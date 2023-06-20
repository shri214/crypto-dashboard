export const convertDate = (num) => {
  let myDate = new Date(num);
  return myDate.getDate() + "/" + myDate.getMonth();
};
