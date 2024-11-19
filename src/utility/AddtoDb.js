import { toast } from "react-toastify";
const getStoredAddtoCart = () => {
  // add to cart
  const storedListStr = localStorage.getItem("add-to-cart");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredAddtoCart = (id) => {
  const storedList = getStoredAddtoCart();
  if (storedList.includes(id)) {
    // already exist . do not add it
    console.log(id, "already exists in the add to cart");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("add-to-cart", storedListStr);
    toast("This product is added to your cart list");
  }
};
const getStoredWishList = () => {
  // read-list
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};
const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    // already exists. do not add it
    console.log(id, "already exists in the read list");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast("This product is added to your wish list");
  }
};
// remove a product from localstorage
const removeCart = (id) => {
  // get all previuously saved product
  const storedList = getStoredAddtoCart();
  const remaining = storedList.filter((product) => product.id != id);
  localStorage.setItem("add-to-cart", remaining);
  toast("successfully removed");
};

export {
  addToStoredAddtoCart,
  addToStoredWishList,
  getStoredAddtoCart,
  getStoredWishList,
  removeCart,
};
