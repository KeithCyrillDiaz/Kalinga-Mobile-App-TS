import { CustomButton, KalingaStatusBar, PageIndicator } from "@/Components";
import { ImagesContainer } from "@/Components/Guest/ScreeningForm/ImagesContainer";
import { ScreeningFormPage2 } from "@/Components/Guest/ScreeningForm/ScreeningFormPage2";
import { ApplyAsDonorPage5Props, ApplyAsRequestorPage2Props } from "@/data/props";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";
import { FilesContainer } from "@/Components/Guest/ScreeningForm/filesContainer";
import { MedicalRequirements } from "@/Components/Guest";
import { buttonDonorData, buttonRequestorData } from "@/data/devData";
import { uploadImageOrFilesToFirebaseStorage } from "@/API";
import { buttonStyles } from "@/styles/styleSheet";


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
            back="ApplyAsDonorPage4"
            home = {false} 
            backButton={true}
            params={{userType: "Requestor"}}
            />
            <ScrollView
            >
                
                <View style={{marginTop: 100}}/> 
                {/* for spacing */}
                <PageIndicator pageNumber={5} currentPageNumber={5}/>
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
           {/* <LoadingBar progressNum={50} fileType="files" visible={true}/> */}
           
        </>
       
        
    )
}

// const SubmitButton: React.FC = () => {
//     return(
//         <TouchableOpacity
//         onPress={() => 
//             uploadImageOrFilesToFirebaseStorage({
//             uri: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//             userType: "Donor",
//             purpose: "Registration",
//             fileType: "Images"
//         })}
//         style={buttonStyles.default}
//         >
//             <Text 
//             style={{color: "white"}}
//             >Submit</Text>
//         </TouchableOpacity>
//     )
// }