import React from "react";
import { View, Text, Image, Modal } from "react-native";
import { Svg, Rect } from "react-native-svg";

interface LoadingBarProps  {
    fileType: "files" | "images";
    progressNum: number;
    uri?: string;
    visible: boolean
}


export const LoadingBar: React.FC<LoadingBarProps> = ({
    fileType,
    progressNum,
    uri = "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
    visible = false
}) => {

    const barWidth = 210;
    const progressWidth = (progressNum / 100) * barWidth;

    return(
       <Modal 
       transparent
       visible={visible}
       >
        <View style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            flex: 1,
            justifyContent: "center"
        }}>
            <View
        style={{
            backgroundColor: "white",
            alignItems: "center",
            paddingVertical: 10,
            paddingBottom: 17,
            marginHorizontal: "17%",
            borderRadius: 22,
            gap: 7
        }}
        >
            {uri && (
                <Image
                source={{uri: uri}}
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: 7,
                    resizeMode: "contain"
                }}
                />
            )}
            <Text>{`Uploading ${fileType}...`}</Text>
            <Svg width={barWidth} height="7">
                <Rect fill={"#eee"} width={barWidth} height={"100%"} rx={3.5} ry={3.5}/>
                <Rect fill={"pink"} width={progressWidth} height={"100%"} rx={3.5} ry={3.5}/>
            </Svg>
        </View>
        </View>
         
       </Modal>
    )
}