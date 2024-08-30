import { Text, View, StyleSheet } from "react-native";
import { MenuButtonCard } from "../Buttons";
import { RootStackParams } from "@@/App";
import { StackNavigationProp } from "@react-navigation/stack";



interface Props {
    navigation: StackNavigationProp<RootStackParams>
}

export const GuestHomePageComponents: React.FC<Props> = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View
            style ={{
                flexDirection:"row",
                alignItems: "center",
                justifyContent: "center",
                gap: 17
            }}
            >
                <MenuButtonCard 
                navigation={navigation}
                navigateTo="DataPrivacyPage"
                params={{userType: "Requestor"}}
                iconFamily="FontAwesome5"
                buttonName="hand-holding-water" 
                title="Apply as Requestor"
                subTitle="Request Breast milk for your infant's needs"
                color="#E60965"
                iconSize={60}
                />
                 <MenuButtonCard 
                navigation={navigation}
                navigateTo="DataPrivacyPage"
                params={{userType: "Donor"}}
                iconFamily="FontAwesome"
                buttonName="handshake-o" 
                title="Apply as Donor"
                subTitle="Offer surplus breast milk for donation"
                color="#E60965"
                iconSize={60}
                />
            </View>

            <View
            style ={{
                flexDirection:"row",
                alignItems: "center",
                justifyContent: "center",
                gap: 17
            }}
            >
                <MenuButtonCard
                navigation={navigation}
                navigateTo="MilkBankLocatorPage"
                iconFamily="MaterialIcons"
                buttonName="location-on" 
                title="Milk Bank Locator"
                subTitle="Easily find human milk banks near you"
                color="#E60965"
                iconSize={60}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 17
    }
})