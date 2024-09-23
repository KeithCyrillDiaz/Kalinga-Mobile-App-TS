import { CustomButton, KalingaStatusBar, PageIndicator } from "@/Components";
import { ImagesContainer } from "@/Components/Guest/ScreeningForm/ImagesContainer";
import { ScreeningFormPage2 } from "@/Components/Guest/ScreeningForm/ScreeningFormPage2";
import { ApplyAsDonorPage5Props, ApplyAsRequestorPage2Props } from "@/data/props";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, View } from "react-native";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";
import { FilesContainer } from "@/Components/Guest/ScreeningForm/filesContainer";
import { MedicalRequirements } from "@/Components/Guest";
import { buttonDonorData, buttonRequestorData } from "@/data/devData";


export default function ApplyAsDonorPage5 ({route}:  ApplyAsDonorPage5Props) {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {data, userType} = route.params
    const {images, files,  uploadImage, uploadFile} =useImagePickerHook()

    console.log("Donor Page 5: ", JSON.stringify(data, null, 2))
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
                buttonData={buttonDonorData} 
                uploadImage={uploadImage} 
                uploadFile={uploadFile}
                userType="Donor"
                />
                <ImagesContainer images = {images}/>
                <FilesContainer files = {files}/>
                 {/* for spacing */}
                <View style={{marginBottom: 70}}/> 
               
            </ScrollView>
      
            {/* <CustomButton text="next" navigateTo="ApplyAsRequestorPage" */}
        </>
       
        
    )
}