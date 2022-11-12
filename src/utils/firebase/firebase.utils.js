import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider,
} from 'firebase/auth'
import {getFirestore,doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyAZwRjggvRm493Ioc5vx7xbykoigaztMU4",
    authDomain: "crwn-clothing-db-d874e.firebaseapp.com",
    projectId: "crwn-clothing-db-d874e",
    storageBucket: "crwn-clothing-db-d874e.appspot.com",
    messagingSenderId: "778272729831",
    appId: "1:778272729831:web:d0401835e2ec915ef85042"
  
  };
  
  const firebaseApp = initializeApp(firebaseConfig);


  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: 'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)         //find the reference of the document in the database
    
    // console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)             //gets the reference document in the db

    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
      const {displayName, email} = userAuth
      const createdAt = new Date()
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      } catch (error) {
        console.log('error creating the user', error.message)
      }
    }
  }




  
  

