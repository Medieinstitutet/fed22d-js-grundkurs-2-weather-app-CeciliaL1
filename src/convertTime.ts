/**
 * CONVERTS TIME FOR CURRENTTIME.
 */

export function convertTime(timestamp: any) {
  const time = (new Date(timestamp)).toTimeString();
  return time.replace(':00 GMT+0100 (centraleuropeisk normaltid)', '');
}

/**
 *  CONVERTING FORECAST TIME 
 * @param validtime 
 * @returns  stamp as example : 2022-12-25T22:00:00Z
 * 
 * firstReg matching = 2022-12-25T'
 * secondReg matching = :00Z
 */

export function convertForeCastTime(validtime: any){
const foreCastTime = validtime;
const firstReg = new RegExp(/\d{4}\-\d{2}\-\d{2}\w/g);
const secondReg = new RegExp(/\:\d{2}\w/g);
// replacing first section of regex and saving in a variable
const  newForeCast = foreCastTime.replace(firstReg, '');
// taking the new variable and replacing second regex and creating a new variable to return
const secondNewForeCast = newForeCast.replace(secondReg, '');
return secondNewForeCast;

}

