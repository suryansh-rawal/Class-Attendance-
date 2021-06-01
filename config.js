import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBvyPySyxXuLV-XExGEumru0o0v2uN7Q0M",
  authDomain: "newsletter-c07f3.firebaseapp.com",
  databaseURL: "https://newsletter-c07f3-default-rtdb.firebaseio.com",
  projectId: "newsletter-c07f3",
  storageBucket: "newsletter-c07f3.appspot.com",
  messagingSenderId: "379617498712",
  appId: "1:379617498712:web:00c863d89ccb40ad2cdc2d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();