import React, {useState, useEffect} from 'react';
import { Dimensions, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import {Requirements, SelectedFiles, SelectedImages } from '@/data/props';

export const useImagePickerHook = () => {
   
    const [images, setImages] = useState<SelectedImages>({})
    const [files, setFiles] = useState<SelectedFiles>({})

    const chooseImagePicker = async (value: "Camera" | "Gallery") => {
        if(value === "Camera"){
            const {status} = await ImagePicker.requestCameraPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work');
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 1,
            })
            return result
        }
        
        else {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 1,
                // allowsMultipleSelection: true, 
            });

            return result
        }
    }

        const uploadImage = async (value: "Gallery" | "Camera", requirementType: Requirements["Requestor" | "Donor"]) => {
            const result = await chooseImagePicker(value)   
            deleteFileOrImage(requirementType, "File")
            if(result && result.assets){
                    result.assets.forEach((item) => {
                        setImages(prevState => ({
                            ...prevState,
                            [requirementType]: {
                                uri: item.uri ?? '',
                                name: "test",
                                type: item.mimeType,
                                owner: "Keith",
                                ownerID: "1234",
                                fileSize: item.fileSize,
                                userType: "Requestor"
                          
                            }
                            
                        }));
                      
                 })
            } 
        }

        const uploadFile = async (requirementType: Requirements["Requestor" | "Donor"]) => {
            console.log("images: ", JSON.stringify(images, null, 2))
            const result = await DocumentPicker.getDocumentAsync();
            deleteFileOrImage(requirementType, "Image")
           if(result && result.assets && !result.canceled){
                result.assets.forEach((item) => {
                    setFiles({
                        ...files,
                        [requirementType]: {
                            uri: item.uri,
                            type: item.mimeType,
                            owner: "Keith",
                            fileSize: item.size,
                            name: item.name,
                            ownerID: "1234",
                            requirementType: requirementType,
                            userType: "Requestor"
                        }
                    })
                })
           }
        }

        const deleteFileOrImage = (
            requirementType: Requirements["Donor" | "Requestor"], 
            fileType: "Image" | "File",
        ) => {
            if(fileType === "Image") {
                const updatedImages = {...images}
                delete updatedImages[requirementType]
                setImages(updatedImages)
            }
            else {
                const updatedFiles = {...files}
                delete updatedFiles[requirementType]
                setFiles(updatedFiles)
            } 
        }


        // useEffect(() => {
        //     console.log("uploadedImages: ", JSON.stringify(images, null, 2))
        // }, [images])

        // useEffect(() => {
        //     console.log("uploadedFiles: ", JSON.stringify(files, null, 2))
        // }, [files])

    return {
        images,
        files,
        uploadImage,
        uploadFile,
    }
}