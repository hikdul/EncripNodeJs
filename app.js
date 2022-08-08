var CryptoJS = require("crypto-js");
const {rndWrite} = require('./utils/RandowStr')
var colors = require('colors');
 
// obtengo argumentos de la consola
const { ARGV } = require('./config/yarg')
const {word, laps } = ARGV
console.clear()
// Genero la clave aleatoria
const secretKey = rndWrite(laps)
const original = word
 
// Encrypt
var ciphertext = CryptoJS.AES.encrypt(original, secretKey).toString();
console.log('Encriptado: ',ciphertext)
// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
var unciphertext = bytes.toString(CryptoJS.enc.Utf8);
// result

console.log("===========================> ++ <===========================".rainbow)

console.log('Texto Original '.gray.underline + " ==> ".bgBrightGreen + original.brightGreen)
console.log('Salt'.gray.underline + " ==> ".bgBrightGreen + secretKey.brightGreen)
console.log('cifrado: '.gray.underline + " ==> ".bgBrightGreen + ciphertext.brightGreen)
console.log('desifrado '.gray.underline + " ==> ".bgBrightGreen + unciphertext.brightGreen)

console.log("===========================> ++ <===========================".rainbow)