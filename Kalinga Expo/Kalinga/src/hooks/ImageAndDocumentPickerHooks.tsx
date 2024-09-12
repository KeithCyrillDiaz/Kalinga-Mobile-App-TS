import React, {useState, useEffect} from 'react';
import { Dimensions, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import {Requirements, SelectedImages } from '@/data/props';

export const useImagePickerHook = () => {
   
    const [images, setImages] = useState<SelectedImages>({})

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
                allowsMultipleSelection: true, 
            });

            return result
        }
    }

        const uploadImage = async (value: "Gallery" | "Camera", requirementType: Requirements["Requestor"]) => {
            const result = await chooseImagePicker(value)   
            console.log("images: ", JSON.stringify(images, null, 2))
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

        useEffect(() => {
            console.log("uploadedImages: ", JSON.stringify(images, null, 2))
        }, [images])

    return {
        images,
        uploadImage
    }
}