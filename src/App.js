import './App.css';
import AppRouter from './AppRouter';

import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";

import { configFirebase } from './config';


const App = () => {
  return (
    <FirebaseAuthProvider firebase={firebase} {...configFirebase}>
      <AppRouter />
    </FirebaseAuthProvider>
  );
}

export default App;
