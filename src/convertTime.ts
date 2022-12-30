/**
 * CONVERTS TIME FOR CURRENTTIME.
 */

export function convertTime(timestamp: any) {
  const time = (new Date(timestamp)).toTimeString();

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    const regexMatchMobile = new RegExp(/\:\d{2}\ \w{3}\+\d{4}\ \(\w{16}\ \w{3}\)/g);
    const _time = time.replace(regexMatchMobile, ' ');
    return _time;
  }else{
  // matchar sträng : 15:00:00 GMT+0100 (centraleuropeisk normaltid)
  const regexMatchDeskt = new RegExp(/\:\d{2}\ \w{3}\+\d{4}\ \(\w{16}\ \w{9}\)/g);
  const _time = time.replace(regexMatchDeskt, ' ');
  return _time;
  }
  


}

/**
 *  CONVERTING FORECAST TIME 
 * @param validtime 
 * @returns  stamp as example : 2022-12-25T22:00:00Z
 */

export function convertForeCastTime(validtime: any){
  const foreCastTime = validtime;

  // firstReg matching = 2022-12-25T
  const firstReg = new RegExp(/\d{4}\-\d{2}\-\d{2}\w/g);
  //secondReg matching = :00Z
  const secondReg = new RegExp(/\:\d{2}\w/g);

  // replacing first section of regex and saving in a variable
  const  newForeCast = foreCastTime.replace(firstReg, '');
  // taking the new variable and replacing second regex and creating a new variable to return
  const secondNewForeCast = newForeCast.replace(secondReg, '');

return secondNewForeCast;
}

