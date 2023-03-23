


const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe: 'Es la base de la tabla multiplicar'
    })  
    
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption:true,
        describe: 'Este es el numero hasta donde quieres multiplicar'
    })  


    .option ('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption:true,
        describe : 'Muestra la tabla en consola'
    })
    
    .check ((argv, options) => {
        
        if( isNaN( argv.b )) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
        .argv;


        module.exports = argv;