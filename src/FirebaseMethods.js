import firebase from "firebase";
import fire from "./fire";
import "firebase/firestore";
class Fire {
  getUserData = async (email) => {
    return new Promise((res, rej) => {
      fire.firestore
        .collection("users")
        .where("email", "==", email)
        .get()
        .then(function (querySnapshot) {
          //TODO MAKE THIS HANDLE THE CASE WHEN THERE ARE NO DOCUMENTS. IF YOU ARE ERRORING USING THIS METHOD, THAT MIGHT BE THE CAUSE.
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots

            res({ id: doc.id, user: doc.data() });
          });
        })
        .catch(function (error) {
          rej("Error getting documents: ", error);
        });
    });
  };
}

Fire.shared = new Fire();
export default Fire;
