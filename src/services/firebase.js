import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDNZitEnvO1A9FjeRTTGUKmlDtnonik4Yw",
    authDomain: "movie-app-5fce2.firebaseapp.com",
    databaseURL: "https://movie-app-5fce2.firebaseio.com",
    projectId: "movie-app-5fce2",
    storageBucket: "movie-app-5fce2.appspot.com",
    messagingSenderId: "682534570810",
    appId: "1:682534570810:web:9502ff3c2058880e085e03"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
