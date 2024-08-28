import { Text, View, StyleSheet } from "react-native";
import { MenuButtonCard } from "../Buttons";


export const GuestHomePageComponents: React.FC = () => {
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
                iconFamily="FontAwesome5"
                buttonName="hand-holding-water" 
                title="Apply as Requestor"
                subTitle="Request Breast milk for your infant's needs"
                color="#E60965"
                iconSize={60}
                />
                 <MenuButtonCard 
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
                iconFamily="MaterialIcons"
                buttonName="location-on" 
                title="Apply as Requestor"
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