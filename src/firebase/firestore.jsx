import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteField,
  writeBatch,
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
    batch.set(orderRef, {});
    await batch.commit();
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};

const getUserData = async (userID) => {
  try {
    const userData = {};
    const querySnapshot = await getDocs(collection(db, userID));
    querySnapshot.forEach((doc) => {
      userData[doc.id] = doc.data();
    });
    console.log(userData);
  } catch (err) {
    console.error("Error during fetching data: ", err);
  }
};

const updateOrder = async (userID, orderDetails) => {
  const orderID = short.generate();
  try {
    await updateDoc(doc(db, userID, "orders"), {
      [orderID]: orderDetails,
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
