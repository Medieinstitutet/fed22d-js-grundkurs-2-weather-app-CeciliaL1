function convertDate(timestamp: any) {
    const time = (new Date(timestamp)).toUTCString();
    return time;
  }

export default convertDate;