import { Text, View, StyleSheet, Dimensions } from "react-native";
import { message } from "@/data/devData";

interface Props {
    title: String,
    name: String,
    home: boolean
}

const { height } = Dimensions.get('window');

export const KalingaStatusBar: React.FC<Props> = ({title, name, home = false}) => {
    return(
        <View style={[styles.container,
                {
                    height: !home ? height * 0.1 : height * 0.2,
                    paddingTop: !home ? 10 : 0,
                }
            ]}>
            {!home
                ? <Text style={styles.text}>{title}</Text>
                : <View>
                     <Text style={styles.title}>Good Day, {name}!</Text>
                     <Text style={styles.subTitle}>{message.statusbar}</Text>
                  </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E60965",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        paddingHorizontal: "7%",
    },
    text: {
        color: "white",
        fontFamily: "Kurale",
        fontSize: 17,
        alignSelf: "center"
    },
    title: {
        color: "white",
        fontFamily: "Kurale",
        fontSize: 30,
    },
    subTitle: {
        color: "white",
        fontFamily: "Inter-Regular",
        fontSize: 13,
        alignSelf: "center",
        marginTop: "2%"
    },
})