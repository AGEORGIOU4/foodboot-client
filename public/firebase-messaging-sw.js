importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyC79OtcY-4Sqat0nlPVSFPLvQKc6jY137Y",
  authDomain: "foodboot-971c1.firebaseapp.com",
  databaseURL: "https://foodboot-971c1-default-rtdb.firebaseio.com",
  projectId: "foodboot-971c1",
  storageBucket: "foodboot-971c1.appspot.com",
  messagingSenderId: "629378649489",
  appId: "1:629378649489:web:08d8d964df3f65f2265e30"
});
const messaging = firebase.messaging();