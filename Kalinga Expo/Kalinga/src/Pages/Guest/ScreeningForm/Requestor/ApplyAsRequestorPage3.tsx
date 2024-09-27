import { CustomButton, KalingaStatusBar, PageIndicator, RFRComponent } from "@/Components";
import { ImagesContainer } from "@/Components/Guest/ScreeningForm/ImagesContainer";
import { ApplyAsRequestorPage3Props } from "@/data/props";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, View } from "react-native";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";
import { FilesContainer } from "@/Components/Guest/ScreeningForm/filesContainer";
import { MedicalRequirements } from "@/Components/Guest";
import { buttonRequestorData } from "@/data/devData";
import { kalingaColor } from "@/styles/styles";
import { useScreeningForm } from "@/hooks";
import { SubmitFormButton } from "@/Components/Buttons/Buttons";


export default function ApplyAsRequestorPage3 ({route}:  ApplyAsRequestorPage3Props) {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {data, userType} = route.params
    const {images, files} = route.params.uploads

    const {} = useScreeningForm({userType: userType})

    console.log("Requestor Page 2: ", JSON.stringify(data, null, 2))
    return(
        <>
            <KalingaStatusBar
            title = {`Apply as ${userType}`} 
            navigation={navigation}
            back="ApplyAsRequestorPage2"
            home = {false} 
            backButton={true}
            params={{userType: "Requestor"}}
            />
            <ScrollView
            >
                
                <View style={{marginTop: 100}}/> 
                {/* for spacing */}
                <PageIndicator pageNumber={3} currentPageNumber={3}/>
                <RFRComponent savedData={data} userType={userType}/>
                <ImagesContainer images = {images}/>
                <FilesContainer files = {files}/>

                <SubmitFormButton/>

                 {/* for spacing */}
                <View style={{marginBottom: 70}}/> 
               
            </ScrollView>
        
        </>
       
        
    )
}

