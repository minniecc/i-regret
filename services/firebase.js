import firebase from 'firebase/app'
import 'firebase/firestore'

// your firebase config
const config = {
  apiKey: "AIzaSyBgXUnUEPYNGQxOmvMM2BzB4xivG_6FKT0",
  authDomain: "i-regret.firebaseapp.com",
  databaseURL: "https://i-regret.firebaseio.com",
  projectId: "i-regret",
  storageBucket: "i-regret.appspot.com",
  messagingSenderId: "910841881690"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export default {
  db
}
