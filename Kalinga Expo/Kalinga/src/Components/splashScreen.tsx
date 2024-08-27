import { Text, View, StyleSheet, Image } from "react-native";


export const SplashScreen: React.FC = () => {
    return(
            <Image 
            source={require('@@/assets/custom/splashScreenImages/KalingaSplashScreen.png')}
            style={styles.image}
            />
    )
}

const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: "100%"
    }
})