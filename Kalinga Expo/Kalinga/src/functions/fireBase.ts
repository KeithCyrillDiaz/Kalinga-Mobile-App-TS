
import { auth } from '@@/firebaseConfig';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    EmailAuthProvider,
     reauthenticateWithCredential,
     User
    } from 'firebase/auth';

export const firebaseAuthentication = async () => {
    console.log("auth: ", auth)
    const user = auth.currentUser
    console.log("user: ", user)
    // if(!user) {
    //     const result = await signInUserInFirebase({email: "diaz.valorantclips@gmail.com", password: "Test1234"})
    //     console.log("result: ", result)
    // }     
}

interface SignInParams {
    email: string;
    password: string;
  }
export const signInUserInFirebase = async ({email, password}: SignInParams) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user.email);
      return userCredential
    } catch (error: any) {
      console.error('Error signing in:', error.message);
    }
  };

  export const signOutUserInFirebase = async () => {

    const currentUser = auth.currentUser;
    if (currentUser) {
        console.log('Current user:', currentUser);
    } else {
        console.log('No user is currently signed in.');
    }
    
    // Sign out the user
    signOut(auth).then(() => {
        console.log('User signed out successfully.');
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
  }


//   export const deleteFireBaseAccount = async (user: User) => {

//     const credential = EmailAuthProvider.credential("diaz.valorantclips@gmail.com", "Backspace1234")
//     console.log("credential: ", credential)
//     try {
//           console.log('User reauthenticated successfully.');
//           // Proceed to delete the user account
//           await deleteUserAccount();
//           await credential.delete()
//     } catch (error: any) {
//         console.error('Error reauthenticating user:', error.message);
//     }
 
//   }