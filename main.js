var program = require('commander');

function main(args) {
    program
        .version(require('./package.json').version)
        .usage('[options]')
        .option('-l --list', 'List all options')
        .option('-i --info', 'Show informational details')
        .parse(args);
    
    var list = program.list;
    console.info('Option list value', list);
    if (!list) {
        console.error('ERROR: list option is required');
        program.outputHelp();
        process.exit(1);
    }
    
    var info = program.info;
    console.info('Option info value', info);
    if (info) {
        console.info('All options:');
        console.info('Pepperoni - Non veggie');
        console.info('Cheese - veggie');
        console.info('Meat Lover - Non veggie');
    } else {
        console.info('All options: Pepperoni, Cheese, Meat Lover');
    }
}

if (require.main === module) {
    main(process.argv);
}

module.exports = main;