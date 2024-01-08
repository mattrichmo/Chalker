import chalker from './chalker.mjs';


const testObject = {
    Level1: { // this should be the bgHex.primary color and the text should be complimentary color
        level1Text: 'Level 1 Text', //key would be the shades.dim color and value would be shades.bright color
        level1Number: 1,
        level1Boolean: true,
        Level2: { // new bgHex.primary color and text should be complimentary color
            level2Text: 'Level 2 Text', //key would be the shades.dim color and value would be shades.bright color
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

const example = async () => {
    console.log(`\n\n\n\n`)
    await chalker(testObject); // passing the object to chalker
    console.log(`\n\n\n\n`)
}

example();