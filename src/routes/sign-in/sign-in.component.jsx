import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { auth, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

  const redirectResult = async () => {
    const response = await getRedirectResult(auth);
    
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }

  useEffect(() => {
    redirectResult()
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with google pop up
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;
