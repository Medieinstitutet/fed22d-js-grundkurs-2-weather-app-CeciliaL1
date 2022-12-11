function convertDate(timestamp: any) {
  const date = (new Date(timestamp)).toDateString();
  const regex = new RegExp(/\d{4}/);
  const regDate = date.replace(regex, '')
  return regDate;
}
export default convertDate;