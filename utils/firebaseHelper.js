// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBLVI69-YXdelvuK8yIrOpMQAvBK0Nwadk",
        authDomain: "whatsapp-54094.firebaseapp.com",
        databaseURL: "https://whatsapp-54094-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "whatsapp-54094",
        storageBucket: "whatsapp-54094.appspot.com",
        messagingSenderId: "795127462608",
        appId: "1:795127462608:web:7054f9615a9ed61b953cd5",
        measurementId: "G-RFDBMMMT90"
      };
    // Initialize Firebase
    return initializeApp(firebaseConfig);
    //fix firebase bug permisson dednied when uncreated variable automatically set to 'null' 
    //to search and replace    
    const replaceAll  =(s="",f="",r="")=>  s.replace(new RegExp(f.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), r)

    //to save 
    firebase.database().ref(`path`).update(JSON.parse(replaceAll(JSON.stringify(val),"undefined","null")))
}