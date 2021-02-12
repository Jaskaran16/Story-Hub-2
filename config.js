import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyAOOBkdJTMVG1J5YmSnFQq-wUMJHmJYQLo",
  authDomain: "story-hub-2-732c3.firebaseapp.com",
  databaseURL: "https://story-hub-2-732c3-default-rtdb.firebaseio.com",
  projectId: "story-hub-2-732c3",
  storageBucket: "story-hub-2-732c3.appspot.com",
  messagingSenderId: "136740315394",
  appId: "1:136740315394:web:213ac38ee3e233220da21b",
  measurementId: "G-GVJVWQBLG1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default  firebase.firestore()                                   