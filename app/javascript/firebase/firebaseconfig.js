import firebase from 'firebase';
import React from 'react';

var firebaseConfig = {
    apiKey: "AIzaSyAXxkofTSQsPHy0Gp5noxNmAnAj9edZeMc",
    authDomain: "the-cybele-project.firebaseapp.com",
    projectId: "the-cybele-project",
    storageBucket: "the-cybele-project.appspot.com",
    messagingSenderId: "539658636919",
    appId: "1:539658636919:web:94bc1c8cd186e15bf24072",
    measurementId: "G-VMQ4SPM5E6"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;


