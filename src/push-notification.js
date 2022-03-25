import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC79OtcY-4Sqat0nlPVSFPLvQKc6jY137Y",
  authDomain: "foodboot-971c1.firebaseapp.com",
  databaseURL: "https://foodboot-971c1-default-rtdb.firebaseio.com",
  projectId: "foodboot-971c1",
  storageBucket: "foodboot-971c1.appspot.com",
  messagingSenderId: "629378649489",
  appId: "1:629378649489:web:08d8d964df3f65f2265e30"
});

export const askForPermissionToReceiveNotifications = async () => {
  const messaging = getMessaging(firebaseApp);

  getToken(messaging, { vapidKey: 'BP1-61dMnHa7t8Js30YIHvNt45QYGb9VmzDSzWdRGImef9uCnmSOOnx9Pcj8YbJKH5yn55rb-hv_eUQXd1C0ZIg' }).then((currentToken) => {
    if (currentToken) {
      console.log('Your token is:', currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  })

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
}