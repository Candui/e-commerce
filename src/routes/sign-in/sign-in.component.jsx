import { async } from '@firebase/util';
import { Link } from 'react-router-dom';
import { signInWithGooglePopup , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return(
        <div>
        <h1>Sign In page</h1>
        <button onClick = { logGoogleUser }>Sign in with GooglePopup</button>
        </div>
    );
};


export default SignIn;