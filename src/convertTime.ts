export function convertTime(timestamp: any) {
  const time = (new Date(timestamp)).toTimeString();
  return time.replace(':00 GMT+0100 (centraleuropeisk normaltid)', '');
}


//NOT DONE!
export function convertForeCastTime(validtime: any){
const foreCastTime = validtime;
const firstReg = new RegExp(/\d{4}\-\d{2}\-\d{2}\w/g);
const secondReg = new RegExp(/\:\d{2}\w/g);
return foreCastTime.replace()

}

