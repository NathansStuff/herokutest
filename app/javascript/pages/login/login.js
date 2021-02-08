import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';



const config = {
    apiKey: "AIzaSyAXxkofTSQsPHy0Gp5noxNmAnAj9edZeMc",
    authDomain: "the-cybele-project.firebaseapp.com",
    projectId: "the-cybele-project",
    storageBucket: "the-cybele-project.appspot.com",
    messagingSenderId: "539658636919",
    appId: "1:539658636919:web:94bc1c8cd186e15bf24072",
    measurementId: "G-VMQ4SPM5E6"
  };

  firebase.initializeApp(Config);
  
  var uiConfig = {
    signInSuccessUrl: '</>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID, 
    ],
    
  };


  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig);
