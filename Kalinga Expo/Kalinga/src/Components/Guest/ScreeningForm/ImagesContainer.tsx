import { kalingaColor } from "@/styles/styles";
import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, Modal, ScrollView} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import { SelectedImages } from "@/data/props";
import ImageZoom from "react-native-image-pan-zoom";

const {height, width} = Dimensions.get('screen')

interface ImagesContainerProps {
    images: SelectedImages
}
export const ImagesContainer: React.FC<ImagesContainerProps> = ({
    images
}) => {
    return(
        <>
            {Object.entries(images).length !== 0 && (
                 <ScrollView
                 style={{
                     backgroundColor: "white",
                     borderRadius: 7,
                     height: 170,
                     marginHorizontal: 17,
                     paddingHorizontal: 17,
                     paddingVertical: 7,
                     paddingRight: 200,
                     marginTop: 17,
                     elevation: 7,
                 }}
                 horizontal
                 >   
         
                 {Object.entries(images).map(([requirementType, value]) => (
                     <ImageContainer
                     key={requirementType}
                     uri={value.uri}
                     title={requirementType}
                     />
                 ))}
             
                 <View style={{padding: 17}}/>    
                 </ScrollView>
            )}
        </>
    )
}


interface ImageContainerProps {
    uri: string | undefined,
    title: string
}
export const ImageContainer: React.FC<ImageContainerProps> = ({
    uri,
    title
}) => {
        const [showImage, setShowImage] = useState<boolean>(false)
    return (
        <>
           {uri && (
                  <View style={{alignItems: "center", gap: 7, marginRight: 7}}>
                  <Text
                  style={{
                      color: kalingaColor.text,
                  }}
                  >{title}</Text>
                  <TouchableOpacity
                  onPress={() => setShowImage(true)}
                  style={{
                    backgroundColor: "pink",
                    elevation: 7,
                    borderRadius: 7,
                    width: width *.3,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 7
                  }}
                  >
                      <Image 
                      source={{ uri: uri}}
                      style={{
                        height: 100, 
                        width: 100, 
                        resizeMode: "contain",
                    }}
                      />
                  </TouchableOpacity>
               
                  <Modal
                      visible={showImage}
                      animationType="slide"
                      transparent={true}
                      onRequestClose={() => setShowImage(false)}
                  >
                      <View
                      style={{
                        position: "relative",
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    }}
                      >
                         <TouchableOpacity
                         onPress={() => setShowImage(false)}
                         style={{
                          position: "absolute",
                          zIndex:10,
                          right: 10,
                          top: 10
                      }}
                         >
                          <Entypo name="circle-with-cross" size={30} color="black"/>
                         </TouchableOpacity>
                         <ImageZoom
                         cropWidth={width}
                         cropHeight={height}
                         imageWidth={width}
                         imageHeight={height}
                         >
                            <Image
                                source={{ uri: uri}}
                                style={{height: height, width: width, resizeMode: "contain"}}
                                />
                         </ImageZoom>
                            
                      </View>
                    
                  </Modal>
              </View>
            )}
      
        </>
     
        
    )
}