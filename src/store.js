import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';


// import notifyReducer from './reducers/notifyReducer';
// import settingsReducer from './reducers/settingsReducer';


// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyByjUnQAqxkKo2CuakOQ47aF0HHYNw72yg",
  authDomain: "onedotwebapp.firebaseapp.com",
  databaseURL: "https://onedotwebapp.firebaseio.com",
  projectId: "onedotwebapp",
  storageBucket: "onedotwebapp.appspot.com",
  messagingSenderId: "332607498095"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};


// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);



const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
  // notify: notifyReducer,
  // settings: settingsReducer
});


const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
