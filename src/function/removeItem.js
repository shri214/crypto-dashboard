import { toast } from "react-toastify";

export const removeItem = (id) => {
  if (window.confirm("Are you sure want to remove this coin")) {
    let arr = JSON.parse(localStorage.getItem("item"));
    localStorage.setItem(
      "item",
      JSON.stringify(arr.filter((val) => val != id))
    );
    console.log("item is removed", id);
    toast.success(`${id.slice(0, 1).toUpperCase() + id.slice(1)} is remove`);
  } else {
    toast.error("couldn't remove the coin");
  }
};
