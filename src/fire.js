import firebase from "firebase";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_hz_HhLxK3aOKz6BAMthQ04VyWQZr5yE",
  authDomain: "quesapp-4df8c.firebaseapp.com",
  projectId: "quesapp-4df8c",
  storageBucket: "quesapp-4df8c.appspot.com",
  messagingSenderId: "391720005208",
  appId: "1:391720005208:web:2b846806aab768dfb3e42d",
  measurementId: "G-NTWW838H92",
};

const fire = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default fire;
