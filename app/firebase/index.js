import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB1UHR3-SvAM49Oc56bFfYG0xkYi6F1Sy8",
    authDomain: "plantrepository-f56da.firebaseapp.com",
    databaseURL: "https://plantrepository-f56da.firebaseio.com/",
    projectId: "plantrepository-f56da",
    storageBucket: "plantrepository-f56da.appspot.com",
    messagingSenderId: "10269413594"
}

firebase.initializeApp(config)

const database = firebase.database()

export default database
