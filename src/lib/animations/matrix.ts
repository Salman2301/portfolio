interface MatrixOption {
  text: string;
  waitTick: number;
}

export async function handleAnimation(opts: MatrixOption, cb: (text:string)=>string) {
  let currText= "";
  let { text, waitTick } = opts;
  let char = `你我你我你我你我你我abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_<>`;

  async function animate() {
    let lastCurrText = currText
    for (let i = 0; i < text.length; i++) {
      let randomStr = "";
      for( let j = 0; j < (text.length - currText.length) ; j++) {
        let randomChar = char[Math.floor(Math.random()*char.length)];
        randomStr += randomChar;
      }

      await sleep(waitTick);
      cb(currText + randomStr);
    }
    currText = lastCurrText;
    // cb(currText)
  }

  for( const i in [...text] ) {
    // skip spaces
    if(text[i] !== " ") await animate();
    currText += text[i];
    cb(currText)
  }
}

function sleep(ms = 40) {
  return new Promise(res=>setTimeout(res, ms));
}