import { CustomButton, KalingaStatusBar, PageIndicator } from "@/Components";
import { ImagesContainer } from "@/Components/Guest/ScreeningForm/ImagesContainer";
import { ScreeningFormPage2 } from "@/Components/Guest/ScreeningForm/ScreeningFormPage2";
import { ApplyAsRequestorPage2Props } from "@/data/props";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, View } from "react-native";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";
import { FilesContainer } from "@/Components/Guest/ScreeningForm/filesContainer";
import { MedicalRequirements } from "@/Components/Guest";
import { buttonRequestorData } from "@/data/devData";
import { kalingaColor } from "@/styles/styles";


export default function ApplyAsRequestorPage2 ({route}:  ApplyAsRequestorPage2Props) {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {data, userType} = route.params
    const {images, files,  uploadImage, uploadFile} =useImagePickerHook()

    console.log("Requestor Page 2: ", JSON.stringify(data, null, 2))
    return(
        <>
            <KalingaStatusBar
            title = {`Apply as ${userType}`} 
            navigation={navigation}
            back="ApplyAsRequestorPage"
            home = {false} 
            backButton={true}
            params={{userType: "Requestor"}}
            />
            <ScrollView
            >
                
                <View style={{marginTop: 100}}/> 
                {/* for spacing */}
                <PageIndicator pageNumber={3} currentPageNumber={2}/>
                <MedicalRequirements 
                buttonData={buttonRequestorData} 
                uploadImage={uploadImage} 
                uploadFile={uploadFile}
                userType="Requestor"
                />
                <ImagesContainer images = {images}/>
                <FilesContainer files = {files}/>

                <CustomButton
                text="Next"
                navigateTo="ApplyAsRequestorPage3"
                navigation={navigation}
                color={kalingaColor.text}
                textColor="white"
                elevation={7}
                params={{userType: "Requestor", data: data, uploads: {files: files, images: images}}}
                />


                 {/* for spacing */}
                <View style={{marginBottom: 70}}/> 
            </ScrollView>
            
        </>
       
        
    )
}