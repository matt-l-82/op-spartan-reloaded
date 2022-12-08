import { db } from "../utils/firebase/firebase.utils";
import { collection, getDocs, query, where } from "firebase/firestore";

export const listProducts = () => {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("active", "==", true));
  return getDocs(q);
};
