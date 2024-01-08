import chalker from './chalker.mjs';


const testObject = {
    Level1: { // this should be the bgHex.primary color and the text should be complimentary color
        level1Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.', //key would be the shades.dim color and value would be shades.bright color
        level1Number: 1,
        level1Boolean: true,
        Level2: { // new bgHex.primary color and text should be complimentary color
            level2Text: 'Level 2 Text', //key would be the shades.dim color and value would be shades.bright color
            level2Number: 2,
            level2Boolean: false,
            level2Array: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                level3: { // new bgHex.primary color and text should be complimentary color
                level3Text: 'Level 3 Text', //key would be the shades.dim color and value would be shades.bright color
                level3Number: 3,
                level3Boolean: true,
                level3Array: [`string1`, `string2`, `string3`],
                level4: { // new bgHex.primary color and text should be complimentary color
                    level4Text: 'Level 4 Text', //key would be the shades.dim color and value would be shades.bright color
                    level4Number: 4,
                    level4Boolean: false,
                    level4Array: [{key1: 'value1'}, {key2: 'value2'}, {key3: 'value3'}, {key4: 'value4'}, {key5: 'value5'},{key1: 'value1'}, {key2: 'value2'}, {key3: 'value3'}, {key4: 'value4'}, {key5: 'value5'}, {key1: 'value1'}, {key2: 'value2'}, {key3: 'value3'}, {key4: 'value4'}, {key5: 'value5'},  ],
                    level5: { // new bgHex.primary color and text should be complimentary color
                        level5Text: 'Level 5 Text', //key would be the shades.dim color and value would be shades.bright color
                        level5Number: 5,
                        level5Boolean: true,
                        level5Array: [`string1`, `string2`, `string3`],
                        level6: { // new bgHex.primary color and text should be complimentary color
                            level6Text: 'Level 6 Text', //key would be the shades.dim color and value would be shades.bright color
                            level6Number: 6,
                            level6Boolean: false,
                            level6Array: [`string1`, `string2`, `string3`],
                        }
                    }
                }
            }
        }
    }
}


const example = async () => {
    console.log(`\n\n--- Default Example ---\n\n`);
    // Default example
    chalker(testObject);

    console.log(`\n\n--- Verbose Example ---\n\n`);
    // Verbose example
    chalker(testObject, 4, 0, null, true);
};

example();