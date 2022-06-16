import { initializeApp } from 'firebase/app';
import { getAuth , signInWithPopup , GoogleAuthProvider , createUserWithEmailAndPassword  } from 'firebase/auth'
import { getFirestore , doc , getDoc , setDoc } from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyBYUEWUgqBKGQsNRREdrSc4BBO4udPbXaM",
  
    authDomain: "crwn-clothing-db-89f5a.firebaseapp.com",
  
    projectId: "crwn-clothing-db-89f5a",
  
    storageBucket: "crwn-clothing-db-89f5a.appspot.com",
  
    messagingSenderId: "898334361407",
  
    appId: "1:898334361407:web:ee45a048ced8504651b58a"
  
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters(
      {
          prompt: 'select_account'
      }
  );

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth , provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {displayName : ''}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid )
    
    const userSnapshot = await getDoc(userDocRef);



    if(!userSnapshot.exists()){
        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ... additionalInformation
            });
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user email already is used');
            }else{
                console.log('error creating the user', error.message);
            }
            };

        
    }
    return userDocRef;
  };
  export const createAuthUserWithEmailAndPassword = async (email,password)=> {
      if(!email || !password) return;

    return createAuthUserWithEmailAndPassword(auth , email , password);

  };