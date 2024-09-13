import { Requirements, SelectedFiles } from "@/data/props";
import { kalingaColor } from "@/styles/styles";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

interface FilesContainerProps {
    files: SelectedFiles
}

export const FilesContainer: React.FC<FilesContainerProps> = ({
    files
}) => {

    const buttonNames: Array<Requirements["Requestor" | "Donor"]> = [
        "Clinical History",
        "Clinical Findings",
        "Diagnosis",
        "Government ID",
        "Prescription",
        "Presenting Complaint",
        "Treatments and Interventions",
    ]
    return(
        <>
            {Object.entries(files).length !== 0 && (
                <View style={{
                    marginHorizontal: 17,
                    backgroundColor: "white",
                    elevation: 7,
                    flex: 1,
                    gap: 7,
                    marginVertical: "7%",
                    borderRadius: 7,
                    padding: 17
                }}>
                    {Object.entries(files).map(([key, value]) => (
                          <FileContainer 
                          key={key} 
                          title={key as Requirements["Requestor" | "Donor"]} 
                          name={value.name}/>
                    ))}
                </View>
            )}
        </>
    )
}

interface FileContainerProps {
    title: Requirements["Donor" | "Requestor"];
    name: string
}

export const FileContainer: React.FC<FileContainerProps> = ({
    title,
    name
}) => {
    return (
        <View style={{
            gap: 4,
          }}>
            <Text
            style={{
                fontSize: 17,
                color: kalingaColor.text,
                fontWeight: "700",
            }}
            >
                {title}
            </Text>
            <View style={{
                flexDirection: "row",
                gap: 2,
                alignItems: "center"
            }}>
                <Entypo name="dot-single" size={24} color={"black"} />
                <Text style={{
                    color: "black"
                }}>
                {name}
                </Text>
            </View>
           
          </View>
    )
}