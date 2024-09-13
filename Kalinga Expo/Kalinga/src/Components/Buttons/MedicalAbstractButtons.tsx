import { View, Text, TouchableOpacity, Modal, Dimensions } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { kalingaColor } from "@/styles/styles";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React, {useState} from "react";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { CloseButton } from "./onClose";
import { useImagePickerHook } from "@/hooks/ImageAndDocumentPickerHooks";
import { Requirements } from "@/data/props";


const {width, height} = Dimensions.get('screen')
interface MedicalAbstractButtonProps {
    title: Requirements["Requestor"];
    uploadImage: (value: "Gallery" | "Camera", requirementType: Requirements["Requestor" | "Donor"]) => void;
    uploadFile: (requirementType: Requirements["Requestor" | "Donor"]) => void;
}

export const MedicalAbstractButton: React.FC<MedicalAbstractButtonProps> = ({
    title,
    uploadImage,
    uploadFile,
}) => {

    const [openUploadModal, setOpenUploadModal] = useState<boolean>(false)
    return(
        <View style={{
            elevation: 7,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            marginHorizontal: "5%",
            paddingLeft: 14,
            paddingRight: 5,
            borderRadius: 7,
            marginVertical: 7
        }}>
            <Text style={{
                color: kalingaColor.text,
                fontSize: 14,
                fontFamily: "Open-Sans-SemiBold",
            }}
            >{title}</Text>

            <View style={{
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
            }}>
                <FontAwesome5 name="asterisk" size={12} color={kalingaColor.text} />
                <TouchableOpacity
                onPress={() => setOpenUploadModal(true)}
                style={{ backgroundColor: "pink", padding: 4, borderRadius: 7, marginLeft: 4}}
                >
                    <AntDesign name="picture" size={27} color={kalingaColor.text} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 37,
                    color: kalingaColor.text,
                    marginBottom: 7
                }}>|</Text>
                <TouchableOpacity
                  onPress={() => uploadFile(title)}
                style={{ backgroundColor: "pink", padding: 4, borderRadius: 7}}
                >
                    <AntDesign name="filetext1" size={24} color={kalingaColor.text} />
                </TouchableOpacity>
            </View>
            <UploadImageModal 
            visible = {openUploadModal} 
            onClose={() => setOpenUploadModal(false)}
            onUploadImage={uploadImage}
            title={title}
            />
        </View>
    )
}

interface UploadImageModal{
    visible: boolean;
    onClose: () => void;
    onUploadImage: (value: "Gallery" | "Camera", requirementType: Requirements["Requestor"]) => void;
    title: Requirements["Requestor"]
}

export const UploadImageModal: React.FC<UploadImageModal> = ({
    visible,
    onClose,
    onUploadImage,
    title
}) => {

    return(
       <Modal
       visible={visible}
       transparent={true}
       animationType="slide"
        onRequestClose={onClose}
       >
             <View style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                alignItems: "center",
                justifyContent: "center",
             }}>
                <View
                style={{
                    height: 150,
                    backgroundColor: kalingaColor.bg,
                    borderWidth: 1,
                    borderColor: kalingaColor.text,
                    borderRadius: 22,
                    width: width*.7,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative"
                }}
                >
                    <CloseButton onClose={onClose} color={kalingaColor.pageIndicator} size={24}/>
                    <View style={{
                        flexDirection: "row",
                        gap: 7,
                    }}>
                        <TouchableOpacity 
                        onPress={() => {
                            onUploadImage("Camera", title)
                            onClose()
                        }}
                        style={{
                            backgroundColor: "white",
                            elevation: 7,
                            borderRadius: 7,
                            gap: 4,
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 7,
                            paddingHorizontal: 17
                        }}>
                                <Entypo name="camera" size={50} color={kalingaColor.pageIndicator} />
                                <Text style={{
                                    color: kalingaColor.text,
                                    fontSize: 14,
                                    fontWeight:"700"
                                }}>
                                    Camera
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => {
                            onUploadImage("Gallery", title)
                            onClose()
                        }
                        }
                        style={{
                            backgroundColor: "white",
                            elevation: 7,
                            borderRadius: 7,
                            gap: 4,
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 7,
                            paddingHorizontal: 17
                        }}>
                     
                                <Feather name="image" size={50} color={kalingaColor.pageIndicator} />
                                <Text style={{
                                    color: kalingaColor.text,
                                    fontSize: 14,
                                            fontWeight:"700"
                                }}>
                                    Gallery
                                </Text>
                        
                        </TouchableOpacity>
                        
                       
                    </View>

                </View>
        </View>
       </Modal>
    )
}