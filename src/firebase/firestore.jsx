import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteField,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
const short = require("short-uuid");

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

const getUserData = async (userID, dispatch) => {
  try {
    const userData = {};
    const querySnapshot = await getDocs(collection(db, userID));
    querySnapshot.forEach((doc) => {
      userData[doc.id] = doc.data();
    });
    dispatch({ type: "SAVE_USER_DATA", payload: userData });
  } catch (err) {
    console.error("Error during fetching data: ", err);
  }
};

const updateOrder = async (
  userID,
  orderDetails,
  orderID = short.generate()
) => {
  try {
    await updateDoc(doc(db, userID, "orders"), {
      [orderID]: { ...orderDetails, timeStamp: serverTimestamp() },
    });
  } catch (err) {
    console.error("Error during adding/updating data: ", err);
  }
};

const deleteOrder = async (userID, orderID) => {
  try {
    await updateDoc(doc(db, userID, "orders"), { [orderID]: deleteField() });
  } catch (err) {
    console.error("Error during deleting order: ", err);
  }
};

export { createUser, getUserData, updateOrder, deleteOrder };
