
import chalk from 'chalk';


const testObject = {
    Level1: {
        level1Text: 'Level 1 Text',
        level1Number: 1,
        level1Boolean: true,
        Level2: {
            level2Text: 'Level 2 Text',
            level2Number: 2,
            level2Boolean: false,
            Level3: {
                level3Text: 'Level 3 Text',
                level3Number: 3,
                level3Boolean: true,
                Level4: {
                    level4Text: 'Level 4 Text',
                    level4Number: 4,
                    level4Boolean: false,
                    Level5: {
                        level5Text: 'Level 5 Text',
                        level5Number: 5,
                        level5Boolean: true,
                        Level6: {
                            level6Text: 'Level 6 Text',
                            level6Number: 6,
                            level6Boolean: false,
                            Level7: {
                                level7Text: 'Level 7 Text',
                                level7Number: 7,
                                level7Boolean: true,
                                Level8: {
                                    level8Text: 'Level 8 Text',
                                    level8Number: 8,
                                    level8Boolean: false,
                                    Level9: {
                                        level9Text: 'Level 9 Text',
                                        level9Number: 9,
                                        level9Boolean: true,
                                        Level10: {
                                            level10Text: 'Level 10 Text',
                                            level10Number: 10,
                                            level10Boolean: false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};



const colors = [chalk.redBright, chalk.greenBright, chalk.yellowBright, chalk.blueBright, chalk.magentaBright, chalk.cyanBright];
let colorIndex = 0;

export function chalker(obj, indent = '') {
    try {
        if (typeof obj !== 'object' || obj === null) {
            console.log(indent + colors[colorIndex % colors.length](String(obj)));
            return;
        }

        colorIndex++;
        let output = Array.isArray(obj) ? [] : {};

        for (let key in obj) {
            console.log(indent + colors[colorIndex % colors.length](key + ':'));
            chalker(obj[key], indent + '  ');
        }

        colorIndex--;
    } catch (error) {
        console.error(chalk.red('An error occurred:'), error);
    }
}

chalker(testObject);
