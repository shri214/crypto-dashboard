import { toast } from "react-toastify";

export const addingItems = (id) => {
  let arr = [];
  if (localStorage.getItem("item")) {
    arr = JSON.parse(localStorage.getItem("item"));
  }
  arr.push(id);
  console.log("items is added", arr);
  localStorage.setItem("item", JSON.stringify(arr));
  toast.success(`${id.slice(0, 1).toUpperCase() + id.slice(1)} is added`);
};
