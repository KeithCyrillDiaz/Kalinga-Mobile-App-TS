import { navigatePage, resetPage } from "@/functions";
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "@@/App";

const {height, width} = Dimensions.get("screen")

export const LogInHeader: React.FC = () => {
    return(
    <View
        style={header.container}
    >
        <Image
            source={require('@@/assets/Kalinga_Logo.png')}
            style = {header.logo}
        />
       <View style ={{
            alignItems: "center",
            height: 100,
            gap:2
       }}>
        <Text style ={{
                fontSize: 40,
                color: '#E60965',
                fontFamily: "Klee-One-Regular"
            }}>KALINGA</Text>
            <Text style={{
                fontSize: 22,
                color: '#E60965',
                fontFamily: "Klee-One-Regular"
            }}>Welcome Back</Text>
            <Text style={{
                fontSize: 12,
                color: '#E60965',
                fontFamily: "Klee-One-Regular",
                paddingVertical: 7
            }}>Log in to your account</Text>
       </View>
    </View>
    )
}

interface LogInBodyProps {
    navigation: StackNavigationProp<RootStackParams>
}

export const LogInBody: React.FC<LogInBodyProps> = ({navigation}) => {
    return(
        <View
        style ={{
            height: height * .30,
        }}
    >
        <View style={{gap: 10}}>
            <TextInput
                inputMode="text"
                placeholder="Email"
                placeholderTextColor={"#E60965"}
                style = {{
                    paddingVertical: height % 7,
                    paddingHorizontal: 17,
                    marginHorizontal: "17%",
                    backgroundColor: "white",
                    borderRadius: 17,
                    borderWidth: 1,
                    borderColor: "white",
                    elevation: 10,
                    color: "#E60965"
                }}
            />
            <TextInput
                inputMode="text"
                placeholder="Password"
                placeholderTextColor={"#E60965"}
                style = {{
                    paddingVertical: height % 7,
                    paddingHorizontal: 17,
                    marginHorizontal: "17%",
                    backgroundColor: "white",
                    borderRadius: 17,
                    borderWidth: 1,
                    borderColor: "white",
                    elevation: 10,
                    color: "#E60965"
                }}
            />

        </View>
        
        <TouchableOpacity style ={{
            width: width * .40,
            alignSelf: "center"
        }}>
            <Text
            style = {{ 
                color: "white",
                fontSize: 14,
                textAlign: "center",
                marginTop: 10,
                textDecorationLine: "underline" 
            }}
            > Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style ={{
            backgroundColor: "#E60965",
            width: width * .25,
            alignSelf: "center",
            alignItems: "center",
            paddingVertical: 7,
            borderRadius: 17,
            marginVertical: 10
            
        }}>
            <Text
            style = {{ 
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
            }}
            > Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => resetPage(navigation, "GuestHomePage")}
        style ={{
            width: width * .40,
            alignSelf: "center",
            alignItems: "center",
        }}>
            <Text
            style = {{ 
                color: "white",
                fontSize: 14,
                textDecorationLine: "underline" 
            }}
            > Log in as Guest?</Text>
        </TouchableOpacity>

    </View>
    )
}


export const LogInFooter: React.FC = () => {
    return (
        <View 
        style={{ 
            flex: 1,
            paddingTop: 20,
        }}
        >
            <View style={{ 
                flexDirection: "row",
                alignItems:"center",
                }}>
                <View
                    style={[footer.line, {
                        marginLeft: "10%",
                    }]}
                />
                <Text
                    style ={{
                        color: "white",
                    }}
                >Or connect with
                </Text>
                <View
                    style={[footer.line, {
                        marginRight: "10%",
                    }]}
                />
            </View>
            
            <View style ={{
                flexDirection: "row",
                flex: 1,
                gap:17,
                justifyContent: "center",
                marginTop: 7
                }}>
                <TouchableOpacity>
                    <Image source={require('@@/assets/Google_Icon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('@@/assets/fb_Icon.png')}/>
                </TouchableOpacity>
         
          
            </View>
          

      
        </View>
    )
}

const header = StyleSheet.create({
    container: {
        height: height * .45 ,
        alignItems: "center",
        justifyContent:"flex-end",
        gap:7,
        marginTop: 20,
        paddingBottom: 10,
    },
    logo: {
        height: height * .30,
        width: width * .6,
        alignSelf: "center",
    }
})

const body = StyleSheet.create({
    container: {
        flex:1
    },
    logo: {
        alignSelf: "center",
        backgroundColor: "yellow",
    }
})

const footer = StyleSheet.create({
    container: {
        flex:1
    },
    logo: {
        alignSelf: "center",
        backgroundColor: "yellow",
    },
    line: {
        borderBottomWidth: 1,
        flex: 1,
        marginHorizontal: 7,
        borderBottomColor: "white",
    }
})