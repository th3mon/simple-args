'use strict';

function parse (validArgumets, config) {
    var
        args = process.argv.slice(2),
        statements = {};
        
    args.forEach(processArguments);

    function processArguments (arg) {
        validArgumets.forEach(function processValidArguments (validArgument) {
            if ( arg === validArgument ) {
                statements[arg] = true;
            } 
            
            else if ( arg === 'no-' + validArgument ) {
                statements[arg] = false;
            }
        });
    }
    
    return statements;
}

module.exports = parse;