function convertTime(timestamp: any) {
  const time = (new Date(timestamp)).toTimeString();
  return time.replace(':00 GMT+0100 (centraleuropeisk normaltid)', '');
}
export default convertTime;