import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyBDAkAaHgrQsQzt9p2magc_jEAp5jWlJD0",
    authDomain: "netflix-clone-9db36.firebaseapp.com",
    projectId: "netflix-clone-9db36",
    storageBucket: "netflix-clone-9db36.appspot.com",
    messagingSenderId: "608978606720",
    appId: "1:608978606720:web:f6dc1d41872242102ba465",
    measurementId: "G-PHEXWSY5V1"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;