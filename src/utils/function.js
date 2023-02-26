import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import firebase from "./firebase";
import { useState, useEffect } from "react";
import Toastify from "./toastify";

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  // const userRef=ref(db,"user/")
  remove(ref(db, "user/" + id));
  Toastify("Deleted Successfully");
};

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "user/");

  const updates = {};

  updates["user/" + info.id] = info;
  Toastify("Updated Successfully");
  return update(ref(db), updates);
};
