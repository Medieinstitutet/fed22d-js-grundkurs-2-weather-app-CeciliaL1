function convertDate(timestamp: any) {
  const date = (new Date(timestamp)).toDateString();
  return date.replace(/2022/g,  '',);
}
export default convertDate;