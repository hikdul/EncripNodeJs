
const WIDTHSTR = 7
const CARACTERES = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789".split('');

function RNG(seed) {
  // constantes de GCC
  this.m = 0x80000000; // 2**31;
  this.a = 1103515245;
  this.c = 12345;

  this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
}
 
RNG.prototype.nextInt = function() {
  this.state = (this.a * this.state + this.c) % this.m;
  return this.state;
}

RNG.prototype.nextFloat = function() {
  // en el rango [0,1]
  return this.nextInt() / (this.m - 1);
}

RNG.prototype.nextRange = function(start, end) {
  // en el rango [inicio, fin)
  let rangeSize = end - start;
  let randomUnder1 = this.nextInt() / this.m;
  return start + Math.floor(randomUnder1 * rangeSize);
}
 
RNG.prototype.choice = function(array) {
  return array[this.nextRange(0, array.length)];
}

const rndWrite = ( laps ) => 
{
    const big = !!laps ? laps : WIDTHSTR
    const rng = new RNG(big);
    let psw = "";
    for (let i = 0; i < 50; i++) {
      psw += rng.choice(CARACTERES);
    }

    return psw
}

module.exports={rndWrite}