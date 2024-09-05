import { Text, View } from "react-native"
import { ScreeningFormType } from "@/data/props"
import { LongTextInput, DoubleTextInput, BirthdayAndAgeComponent } from "@/Components/TextInputs"
import { kalingaColor } from "@/styles/styles"
import { useScreeningForm } from "@/hooks"

interface InfantInformationProps {
    userType: string
}

export const InfantInformation: React.FC<InfantInformationProps> = ({
    userType = ""
}) => {

    const {data, handleChangeDate, handleUpdateForm } = useScreeningForm({userType: userType})

    return(
            <View
            style={{
                paddingHorizontal: 20,
                gap: 10,
                marginVertical: "5%"
            }}
            >
                <Text
            style={{
                marginLeft: "2%",
                color: kalingaColor.text,
                fontWeight: "bold",
                fontSize: 17, 
               
            }}
            >Infant Information</Text>

          <LongTextInput 
          placeHolder="Name of Child"
          placeHolderColor={kalingaColor.text}
          handleChangeText={handleUpdateForm}
          fieldName="childName"
          value={data.childName}
          />
          <DoubleTextInput
          placeHolderLeftInput="Birth Weight"
          placeHolderRightInput="Sex"
          sameLength={true}
          placeHolderColor={kalingaColor.text}
          />
         <BirthdayAndAgeComponent
          ageValue={data.childAge} 
          birthDayValue={data.childBirthDate}
          placeHolderLeftInput="Age"
          placeHolderRightInput="Birthday"
          placeHolderColor={kalingaColor.text}
          handleChangeDate={handleChangeDate}
          formType="Infant"
         />
        
        </View>
    )
}

