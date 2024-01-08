import chalker from './chalker.mjs';


const testObject = {
    Level1: { 
        level1Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, 
        a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. 
        Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. 
        Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a 
        pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper null
        a non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla
         non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra au
         gue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor frin
         gilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Don
         ec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a ph
         aretra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. 
         Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.`, 
        level1Number: 1,
        level1Boolean: true,
        Level2: { 
            level2Text: 'Level 2 Text', 
            level2Number: 2,
            level2Boolean: false,
            level2Array: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                level3: { 
                level3Text: 'Level 3 Text', 
                level3Number: 3,
                level3Boolean: true,
                level3Array: [`string1`, `string2`, `string3`],
                level4: { 
                    level4Text: 'Level 4 Text',
                    level4Number: 4,
                    level4Boolean: false,
                    level4Array: [{key1: 'value1'}, {key2: 'value2'}, {key3: 'value3'}, {key4: 'value4'}, {key5: 'value5'},{key1: 'value1'}, {key2: 'value2'}, {key3: 'value3'}, {key4: 'value4'}, {key5: 'value5'}, {key1: 'value1'}, {key2: 'value2'}, {key3: 'value3'}, {key4: 'value4'}, {key5: 'value5'},  ],
                }
            }
        }
    }
}


const example = async () => {
    
    // args are (object, indent, startingDepth, maxDepth, verbose)

    console.log(`\n\n--- Default Example ---\n\n`);    
    // Default example
    chalker(testObject);

    console.log(`\n\n--- Verbose Example ---\n\n`);
    // Verbose example
    chalker(testObject, 4, 0, null, true);

    //Starting at a different depth
    console.log(`\n\n--- Tight Example ---\n\n`);

    chalker(testObject, 4, 3, null, false);
};

example();