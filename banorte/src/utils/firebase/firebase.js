import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyA7SFAtXtRuH_Xw0S963calvVf-AtD7MeA",
    authDomain: "banorte-tf.firebaseapp.com",
    databaseURL: "https://banorte-tf.firebaseio.com",
    projectId: "banorte-tf",
    storageBucket: "banorte-tf.appspot.com",
    messagingSenderId: "252560843852",
    appId: "1:252560843852:web:d7de40b66a0b7cb73640e9"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const storage = app.storage();

  export { db, auth, app, storage };