export function convertTime(timestamp: any) {
  const time = (new Date(timestamp)).toTimeString();
  return time.replace(':00 GMT+0100 (centraleuropeisk normaltid)', '');
}


//NOT DONE!
export function convertForeCastTime(validtime: any){
const foreCastTime = validtime;
// creating regwxp
const firstReg = new RegExp(/\d{4}\-\d{2}\-\d{2}\w/g);
const secondReg = new RegExp(/\:\d{2}\w/g);
// replacing first section of regex and saving in a variable
const  newForeCast = foreCastTime.replace(firstReg, '');
// taking the new variable and replacing second regex and creating a new variable to return
const secondNewForeCast = newForeCast.replace(secondReg, '');
return secondNewForeCast;

}

