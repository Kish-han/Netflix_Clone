import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDy_TJUJQh1osdB3hJNee53ngEpJ4nfyQo",
    authDomain: "netflix-clone-7d790.firebaseapp.com",
    projectId: "netflix-clone-7d790",
    storageBucket: "netflix-clone-7d790.appspot.com",
    messagingSenderId: "27246443371",
    appId: "1:27246443371:web:bb716c80664b0b8bbeea2e"
};
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)

export {auth, app}
export default db;
