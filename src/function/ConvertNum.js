export const ConvertNum = (num) => {
  let number = num.toLocaleString();
  let numArr = number.split(",");
  if (numArr.length == 5) {
    //trillion
    return numArr[0] + "." + numArr[1].slice(0, 2) + "T";
  } else if (numArr.length === 4) {
    return numArr[0] + "." + numArr[1].slice(0, 2) + "B";
  } else if (numArr.length === 3) {
    return numArr[0] + "." + numArr[1].slice(0, 2) + "M";
  } else if (numArr.length === 2) {
    return numArr[0] + "." + numArr[1].slice(0, 2) + "K";
  } else {
    return num.toLocaleString();
  }
};
