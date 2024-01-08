
import chalk from 'chalk';
import crayolaColours from './src/colours/colours.mjs';


const colors = crayolaColours.map(color => chalk.hex(color.hex));
const bgColors = crayolaColours.map(color => chalk.bgHex(color.hex));
let colorIndex = 0;


const chalker = (obj, indentLevel = 4, startingDepth = 0, maxDepth = null, verbose = false) => {
    // Formatting defaults
    const maxStringLength = verbose ? Infinity : 140;
    const maxArrayLength = verbose ? Infinity : 10;

    // Helper function to create indentation
    const createIndent = (level) => ' '.repeat(level * indentLevel);

    // Helper function to format arrays
    const formatArray = (arr, depth) => {
        let hiddenItemCount = 0;
        if (!(verbose || arr.length <= maxArrayLength)) {
            hiddenItemCount = arr.length - maxArrayLength;
            const hiddenItemIndicator = chalk.dim(`(... ${hiddenItemCount} Hidden Array Items ...)`);
            return [...arr.slice(0, 5), hiddenItemIndicator, ...arr.slice(-5)];
        }
        return arr;
    };

    // Helper function to format strings
    const formatString = (str, depth) => {
        const colour = crayolaColours[depth % crayolaColours.length];
        if (verbose || str.length <= maxStringLength) {
            return chalk.hex(colour.shades.bright.hex)(str);
        } else {
            const hiddenChars = str.length - maxStringLength;
            return `${chalk.hex(colour.shades.bright.hex)(str.substr(0, 70))}${chalk.dim(` (...${hiddenChars} characters hidden...)`)}${chalk.hex(colour.shades.bright.hex)(str.substr(-70))}`;
        }
    };

    const printObj = (obj, depth, currentIndent) => {
        if (maxDepth !== null && depth > maxDepth) {
            return;
        }

        if (depth < startingDepth) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const value = obj[key];
                    if (typeof value === 'object' && value !== null) {
                        printObj(value, depth + 1, currentIndent);
                    }
                }
            }
            return;
        }

        const colour = crayolaColours[depth % crayolaColours.length];
        const nextColour = crayolaColours[(depth + 1) % crayolaColours.length];

        const openChar = Array.isArray(obj) ? '[' : '{';
        const closeChar = Array.isArray(obj) ? ']' : '}';
        console.log(currentIndent + chalk.hex(colour.complimentary)(openChar));

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                const newIndent = currentIndent + ' '.repeat(indentLevel);

                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    console.log(newIndent + chalk.bgHex(nextColour.hex).hex(nextColour.complimentary)(key));
                    printObj(value, depth + 1, newIndent);
                } else {
                    const formattedKey = chalk.hex(colour.shades.dim.hex)(key);
                    let formattedValue;

                    if (typeof value === 'string') {
                        formattedValue = formatString(value, depth);
                    } else if (Array.isArray(value)) {
                        let arrayToDisplay = formatArray(value, depth);
                        formattedValue = arrayToDisplay.map((item, index) => {
                            if (typeof item === 'string') {
                                return chalk.hex(colour.shades.dim.hex)(`${index}: `) + formatString(item, depth);
                            } else if (typeof item === 'object' && !Array.isArray(item)) {
                                return chalk.hex(colour.shades.dim.hex)(`${index}: `) + chalk.hex(colour.shades.bright.hex)(JSON.stringify(item));
                            } else if (item.includes('Hidden Array Items')) {
                                // Apply dim formatting to hidden items indicator
                                return newIndent + item;
                            }
                            return chalk.hex(colour.shades.dim.hex)(`${index}: `) + item.toString();
                        }).join('\n' + newIndent);
                    } else {
                        formattedValue = chalk.hex(colour.shades.bright.hex)(value.toString());
                    }

                    console.log(newIndent + `${formattedKey}: ${formattedValue}`);
                }
            }
        }

        console.log(currentIndent + chalk.hex(colour.complimentary)(closeChar));
    };

    printObj(obj, 0, createIndent(startingDepth));
};

export default chalker;














