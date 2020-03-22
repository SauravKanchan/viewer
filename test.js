var converter = require('office-converter')();
converter.generateHtml('input/test.xls', function(err, result) {
    // Process result if no error
    if (result.status === 0) {
        console.log('Output File located at ' + result.outputFile);
    }
});
