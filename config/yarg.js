
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option('w', {
        alias: 'word',
        demandOption: true,
        describe: 'Palabla que se desea encriptar',
        type: 'string'
    })
    .option('l', {
        alias: 'laps',
        default: 10,
        describe: 'tamano de la clave secreta',
        type: 'number'
    })
    .check((argv,options)=>{
        if(isNaN(argv.l) )
            throw 'el argumento BASE debe ser un numero'
        return true
    }).argv

module.exports = { ARGV:argv }