
import chalk from 'chalk';

const crayolaColours = [
    {
        name: 'Almond',
        hex: '#EFDECD',
        complimentary: `#CD9575`,
        shades: {
            dim: {
                name: 'Almond (Dim)',
                hex: '#D9D0C1'
            },
            bright: {
                name: 'Almond (Bright)',
                hex: '#F4E0E6'
            },
        }
    },
    {
        name: 'Aqua',
        hex: '#00FFFF',
        complimentary: `#FF0080`,
        shades: {
            dim: {
                name: 'Aqua (Dim)',
                hex: '#008B8B'
            },
            bright: {
                name: 'Aqua (Bright)',
                hex: '#00CED1'
            },
        }
    },
    {
        name: 'Black',
        hex: '#000000',
        complimentary: `#FFFFFF`,
        shades: {
            dim: {
                name: 'Black (Dim)',
                hex: '#333333'
            },
            bright: {
                name: 'Black (Bright)',
                hex: '#666666'
            },
        }
    },
    {
        name: 'Blue',
        hex: '#0000FF',
        complimentary: `#FFFF00`,
        shades: {
            dim: {
                name: 'Blue (Dim)',
                hex: '#000080'
            },
            bright: {
                name: 'Blue (Bright)',
                hex: '#0000FF'
            },
        }
    },
    {
        name: 'Crimson',
        hex: '#DC143C',
        complimentary: `#00FFFF`,
        shades: {
            dim: {
                name: 'Crimson (Dim)',
                hex: '#8B0000'
            },
            bright: {
                name: 'Crimson (Bright)',
                hex: '#FF69B4'
            },
        }
    },
    {
        name: 'Green',
        hex: '#008000',
        complimentary: `#FFA500`,
        shades: {
            dim: {
                name: 'Green (Dim)',
                hex: '#006400'
            },
            bright: {
                name: 'Green (Bright)',
                hex: '#00FF00'
            },
        }
    },
    {
        name: 'Indigo',
        hex: '#4B0082',
        complimentary: `#FFFFE0`,
        shades: {
            dim: {
                name: 'Indigo (Dim)',
                hex: '#00008B'
            },
            bright: {
                name: 'Indigo (Bright)',
                hex: '#8A2BE2'
            },
        }
    },
    {
        name: 'Magenta',
        hex: '#FF00FF',
        complimentary: `#00FFFF`,
        shades: {
            dim: {
                name: 'Magenta (Dim)',
                hex: '#8B008B'
            },
            bright: {
                name: 'Magenta (Bright)',
                hex: '#FF00FF'
            },
        }
    },
    {
        name: 'Orange',
        hex: '#FFA500',
        complimentary: `#008000`,
        shades: {
            dim: {
                name: 'Orange (Dim)',
                hex: '#FF8C00'
            },
            bright: {
                name: 'Orange (Bright)',
                hex: '#FFD700'
            },
        }
    },
    {
        name: 'Pink',
        hex: '#FFC0CB',
        complimentary: `#008080`,
        shades: {
            dim: {
                name: 'Pink (Dim)',
                hex: '#FF69B4'
            },
            bright: {
                name: 'Pink (Bright)',
                hex: '#FF1493'
            },
        }
    },
    {
        name: 'Purple',
        hex: '#800080',
        complimentary: `#FFFF00`,
        shades: {
            dim: {
                name: 'Purple (Dim)',
                hex: '#4B0082'
            },
            bright: {
                name: 'Purple (Bright)',
                hex: '#800080'
            },
        }
    },
    {
        name: 'Red',
        hex: '#FF0000',
        complimentary: `#00FFFF`,
        shades: {
            dim: {
                name: 'Red (Dim)',
                hex: '#8B0000'
            },
            bright: {
                name: 'Red (Bright)',
                hex: '#FF4500'
            },
        }
    },
    {
        name: 'Silver',
        hex: '#C0C0C0',
        complimentary: `#000000`,
        shades: {
            dim: {
                name: 'Silver (Dim)',
                hex: '#808080'
            },
            bright: {
                name: 'Silver (Bright)',
                hex: '#D3D3D3'
            },
        }
    },
    {
        name: 'Teal',
        hex: '#008080',
        complimentary: `#FFA500`,
        shades: {
            dim: {
                name: 'Teal (Dim)',
                hex: '#006400'
            },
            bright: {
                name: 'Teal (Bright)',
                hex: '#008080'
            },
        }
    },
    {
        name: 'White',
        hex: '#FFFFFF',
        complimentary: `#000000`,
        shades: {
            dim: {
                name: 'White (Dim)',
                hex: '#D3D3D3'
            },
            bright: {
                name: 'White (Bright)',
                hex: '#FFFFFF'
            },
        }
    },
    {
        name: 'Yellow',
        hex: '#FFFF00',
        complimentary: `#0000FF`,
        shades: {
            dim: {
                name: 'Yellow (Dim)',
                hex: '#808000'
            },
            bright: {
                name: 'Yellow (Bright)',
                hex: '#FFFF00'
            },
        }
    },
    {
        name: 'Beige',
        hex: '#F5F5DC',
        complimentary: `#2E8B57`,
        shades: {
            dim: {
                name: 'Beige (Dim)',
                hex: '#D2B48C'
            },
            bright: {
                name: 'Beige (Bright)',
                hex: '#F5F5DC'
            },
        }
    },
    {
        name: 'Cyan',
        hex: '#00FFFF',
        complimentary: `#FF0080`,
        shades: {
            dim: {
                name: 'Cyan (Dim)',
                hex: '#008B8B'
            },
            bright: {
                name: 'Cyan (Bright)',
                hex: '#00CED1'
            },
        }
    },
    {
        name: 'Gray',
        hex: '#808080',
        complimentary: `#FFFFFF`,
        shades: {
            dim: {
                name: 'Gray (Dim)',
                hex: '#333333'
            },
            bright: {
                name: 'Gray (Bright)',
                hex: '#666666'
            },
        }
    },
    {
        name: 'Lavender',
        hex: '#E6E6FA',
        complimentary: `#00FA9A`,
        shades: {
            dim: {
                name: 'Lavender (Dim)',
                hex: '#9370DB'
            },
            bright: {
                name: 'Lavender (Bright)',
                hex: '#E6E6FA'
            },
        }
    },
    {
        name: 'Lime',
        hex: '#00FF00',
        complimentary: `#FF00FF`,
        shades: {
            dim: {
                name: 'Lime (Dim)',
                hex: '#008000'
            },
            bright: {
                name: 'Lime (Bright)',
                hex: '#00FF00'
            },
        }
    },
    {
        name: 'Olive',
        hex: '#808000',
        complimentary: `#800080`,
        shades: {
            dim: {
                name: 'Olive (Dim)',
                hex: '#556B2F'
            },
            bright: {
                name: 'Olive (Bright)',
                hex: '#808000'
            },
        }
    },
    {
        name: 'Salmon',
        hex: '#FA8072',
        complimentary: `#00CED1`,
        shades: {
            dim: {
                name: 'Salmon (Dim)',
                hex: '#FF6347'
            },
            bright: {
                name: 'Salmon (Bright)',
                hex: '#FA8072'
            },
        }
    },
    {
        name: 'Violet',
        hex: '#800080',
        complimentary: `#FFFF00`,
        shades: {
            dim: {
                name: 'Violet (Dim)',
                hex: '#4B0082'
            },
            bright: {
                name: 'Violet (Bright)',
                hex: '#800080'
            },
        }
    },
];

const colors = crayolaColours.map(color => chalk.hex(color.hex));
const bgColors = crayolaColours.map(color => chalk.bgHex(color.hex));
let colorIndex = 0;


// Your crayolaColours array remains the same as you provided

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

    printObj(obj, startingDepth, createIndent(startingDepth));
};

export default chalker;












