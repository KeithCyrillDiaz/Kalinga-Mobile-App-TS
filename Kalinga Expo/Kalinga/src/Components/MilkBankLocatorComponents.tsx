import { View, Text, StyleSheet, Dimensions} from "react-native";
import { GOOGLE_MAPS_API_KEY } from "@/data/myConstants";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

const {height} = Dimensions.get("screen")
export const MapContainer: React.FC = () => {
    return(
        // <View>
        //     <Text>Google Maps</Text>
        // </View>
        <MapView
        initialRegion={{
            latitude: 14.5995,
            longitude: 120.9842,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          style={{
            height: height,
            zIndex: 0
          }}
        />
    )
}