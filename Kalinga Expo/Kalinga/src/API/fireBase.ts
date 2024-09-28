
import { auth } from '@@/firebaseConfig';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut, 
    EmailAuthProvider,
     reauthenticateWithCredential,
     User
    } from 'firebase/auth';

import {ref, uploadBytesResumable, getDownloadURL, uploadBytes,} from 'firebase/storage'
import { storage } from '@@/firebaseConfig';
import { Requirements } from '@/data/props';
import { uploadFilesOrImagesMetaDataToDatabase } from './upload';

export const firebaseAuthentication = async () => {
    console.log("auth: ", auth)
    const user = auth.currentUser
    console.log("user: ", user)
    // if(!user) {
    //     const result = await signInUserInFirebase({email: "diaz.valorantclips@gmail.com", password: "Test1234"})
    //     console.log("result: ", result)
    // }     
}

interface uploadImageOrFilesToFirebaseStorageParams {
  uri: string;
  purpose: 'Registration' | 'ProfilePicture' ;
  userType: 'Donor' | 'Requestor';
  fileType: 'Images' | 'Files';
  ownerId: string;
  ownerName: string;
  requirementType: Requirements['Requestor' | 'Donor']
}

export const uploadImageOrFilesToFirebaseStorage = ({
  uri,
  purpose,
  userType,
  fileType,
  ownerId,
  ownerName,
  requirementType

}: uploadImageOrFilesToFirebaseStorageParams) => {
  return new Promise( async (resolve, reject) => {


    const response = await fetch(uri);
    const blob = await response.blob();

    console.log("blob: ", blob);
    
    const fileName =  + new Date().getTime();
// "registration/Donor/Keith/Application/Images/" 
    const path = purpose === 'Registration' ? `Registration/${userType}/${ownerName}/${fileType}/${fileName}`
    : purpose === 'ProfilePicture' ? `${userType}/${userType}/${purpose}/${fileType}/${fileName}`
    : undefined

    if(!path) {
      console.log("Error: Undefined Path");
      return
    }

    const storageRef = ref(storage, path + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("progress: ", progress.toFixed() + "%");
      },
      (error) => {
        console.error('Upload failed:', error);
      }, 
      async () => {
        try {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("downloadURL: ", downloadUrl);
          if(downloadUrl){
            await uploadFilesOrImagesMetaDataToDatabase({
              uri,
              purpose,
              fileType,
              ownerId,
              ownerName,
              requirementType
            })
          }
          resolve(null);
        } catch (error) {
          console.error('fetching download URL failed:', error);
          reject(error)
        }
      }
    )

  })
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