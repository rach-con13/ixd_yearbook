import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDWk02SlFgOdDOVHXL2uonhunFutMESYCw",
    authDomain: "ixd-yearbook21.firebaseapp.com",
    projectId: "ixd-yearbook21",
    storageBucket: "ixd-yearbook21.appspot.com",
    messagingSenderId: "477550652471",
    appId: "1:477550652471:web:f83995ee3004e9082563b2",
    measurementId: "G-VRK6G8BKVK"
  };

  firebase.initializeApp(firebaseConfig);

  let storage = firebase.storage();
  export default storage;