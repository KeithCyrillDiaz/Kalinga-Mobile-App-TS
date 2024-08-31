import React, {useRef, useState} from 'react'
import { Text, View, StyleSheet, FlatList, Image, ImageSourcePropType, Dimensions, Animated, ViewToken, TouchableOpacity,} from "react-native";
import { WelcomePageRequestData } from "@/data/devData";
import { resetPage } from '@/functions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '@@/App';
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("screen")

export const Onboarding: React.FC = () => {

    return(

            <FlatList
                data={WelcomePageRequestData}
                renderItem={({item})=>
                    <OnBoardingItem data={item}/>
                }
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                keyExtractor={(item) => item.id}
                bounces={false}
            />
    )
}

interface OnBoardingItemProps {
    data: {
      id: String;
      title: String;
      description: String;
      image: ImageSourcePropType
    }
}

export const OnBoardingItem: React.FC<OnBoardingItemProps> = ({data}) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    return(
        <View style={{width:width}}>
             <Image
                source={data.image}
                style = {{
                    width: width,
                    height: height,
                }}
                resizeMode="cover"
            />
                <View style={onBoardingItemStyles.overlay}>
                    <Text style= {onBoardingItemStyles.title}>{data.title}</Text>
                    <Text style={onBoardingItemStyles.description}>{data.description}</Text>
                    <PageIndicatorOnboarding id={data.id}/>
                    {data.id === "4" && (
                        <TouchableOpacity
                         style= {onBoardingItemStyles.button}
                         onPress={() => resetPage(navigation, "LogInPage")}
                         >
                           <Text
                             style={{
                                 position: "absolute",
                                 color: "white", 
                                 fontSize: 17                   
                             }}
                           >Done</Text>
                         </TouchableOpacity>
                    )}
                   
                </View>
        </View>
           
    )
}


const onBoardingItemStyles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: "10%",
        gap: 7
      },
    title: {
        fontSize: 36,
        textAlign:"center",
        fontWeight:"bold",
        color: "white"
    },
    description: {
        fontSize: 17,
        textAlign:"justify",
        color:"white"
    },
    button: {
        position: "absolute",
        padding: 20,
        backgroundColor: "#E60965",
        height: 20,
        alignItems:"center",
        justifyContent: "center",
        width: width * .25,
        borderRadius: 7,
        bottom: "10%"
    }
})

interface PageIndicatorProps {
    id: String
}
export const PageIndicatorOnboarding: React.FC<PageIndicatorProps> = ({id}) => {

    return(
        <View
        style={{
            ...StyleSheet.absoluteFillObject,
            alignItems: "center",
            justifyContent: "center"
        }}
        >
                <View
            style={{ 
                ...StyleSheet.absoluteFillObject,  
                borderBottomColor: id === "1" ? "#E60965" : "white", 
                borderBottomWidth: 4,
                width: "12%",
                bottom: "20%",
                left: "20%"
                }}/>
        <View
            style={{ 
                ...StyleSheet.absoluteFillObject,  
                borderBottomColor: id === "2"? "#E60965" : "white", 
                borderBottomWidth: 4,
                width: "12%",
                bottom: "20%",
                left: "35%"
                }}/>
        <View
            style={{ 
                ...StyleSheet.absoluteFillObject,  
                borderBottomColor: id === "3" ? "#E60965" : "white", 
                borderBottomWidth: 4,
                width: "12%",
                bottom: "20%",
                left: "50%"
                }}/>
        <View
            style={{ 
                ...StyleSheet.absoluteFillObject,  
                borderBottomColor: id === "4" ? "#E60965" : "white", 
                borderBottomWidth: 4,
                width: "12%",
                bottom: "20%",
                left: "65%"
                }}/>
            

        </View>
    )
}



