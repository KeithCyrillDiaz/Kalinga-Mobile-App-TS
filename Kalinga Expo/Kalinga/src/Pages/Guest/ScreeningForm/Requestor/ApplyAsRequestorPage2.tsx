import { CustomButton, KalingaStatusBar, PageIndicator } from "@/Components";
import { ImagesContainer } from "@/Components/Guest/ScreeningForm/ImagesContainer";
import { MedicalAbstractInfant } from "@/Components/Guest/ScreeningForm/InfantMedicalAbstract";
import { ScreeningFormPage2 } from "@/Components/Guest/ScreeningForm/ScreeningFormPage2";
import { ApplyAsRequestorPage2Props } from "@/data/props";
import { RootStackParams } from "@@/App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, View } from "react-native";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";


export default function ApplyAsRequestorPage2 ({route}:  ApplyAsRequestorPage2Props) {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const {data, userType} = route.params
    const {images, uploadImage} =useImagePickerHook()
    return(
        <>
            <KalingaStatusBar
            title = {`Apply as ${userType}`} 
            navigation={navigation}
            back="DataPrivacyPage"
            home = {false} 
            backButton={true}
            params={{userType: "Requestor"}}
            />
            <ScrollView
            >
                
                <View style={{marginTop: 100}}/> 
                {/* for spacing */}
                <PageIndicator pageNumber={3} currentPageNumber={2}/>
                <MedicalAbstractInfant uploadImage={uploadImage}/>
                <ImagesContainer images = {images}/>
                 {/* for spacing */}
                <View style={{marginBottom: 70}}/> 
               
            </ScrollView>
      
            {/* <CustomButton text="next" navigateTo="ApplyAsRequestorPage" */}
        </>
       
        
    )
}