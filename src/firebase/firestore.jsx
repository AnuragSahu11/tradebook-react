import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteField,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "./firebase";
const short = require("short-uuid");

const infoToast = (text) => () => toast.info(`${text}`);
const orderAdded = () => toast.success("Order Added to Portfolio");
const errorToast = (errorText) => () => toast.error(errorText);

const createUser = async (firstName, lastName, email, userID) => {
  const batch = writeBatch(db);
  try {
    const userRef = doc(db, userID, "userData");
    batch.set(userRef, {
      first: firstName,
      last: lastName,
      email: email,
    });
    const orderRef = doc(db, userID, "orders");
    const closedRef = doc(db, userID, "closed");
    batch.set(orderRef, {});
    batch.set(closedRef, {});
    await batch.commit();
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};

const getUserData = async (userID, dispatch, setLoading) => {
  try {
    const userData = {};
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, userID));
    querySnapshot.forEach((doc) => {
      userData[doc.id] = doc.data();
    });
    dispatch({ type: "SAVE_USER_DATA", payload: userData });
  } catch (err) {
    console.error("Error during fetching data: ", err);
  }
  setLoading(false);
};

const updateOrder = async (
  userID,
  orderDetails,
  orderID = short.generate()
) => {
  try {
    await updateDoc(doc(db, userID, "orders"), {
      [orderID]: { ...orderDetails, openTime: serverTimestamp() },
    });
    orderAdded();
  } catch (err) {
    console.error("Error during adding/updating data: ", err);
  }
};

const closeOrder = async (userID, orderDetails, orderID = short.generate()) => {
  try {
    await updateDoc(doc(db, userID, "closed"), {
      [orderID]: { ...orderDetails, closeTime: serverTimestamp() },
    });
    await updateDoc(doc(db, userID, "orders"), { [orderID]: deleteField() });
    infoToast("Order Closed")();
  } catch (err) {
    errorToast("Order close failed")();
    console.error("Error during adding/updating data: ", err);
  }
};

const deleteOrder = async (userID, orderID) => {
  try {
    await updateDoc(doc(db, userID, "orders"), { [orderID]: deleteField() });
    infoToast("Order Deleted")();
  } catch (err) {
    errorToast("Order delete failed")();
    console.error("Error during deleting order: ", err);
  }
};

export { createUser, getUserData, updateOrder, deleteOrder, closeOrder };
