import { View, Text } from "react-native"
import React, {useState, useEffect} from "react"
import { kalingaColor } from "@/styles/styles"


interface PageIndicatorProps {
    pageNumber: number
    currentPageNumber: number
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({pageNumber, currentPageNumber}) => {

    const [arrayDummy, setArrayDummy] = useState<number[]>([])
    useEffect(() => {
        const dummy = Array(pageNumber).fill(0).map((_, index) => index + 1); // Filling the array with sequential numbers starting from 1
        setArrayDummy(dummy);
    }, [pageNumber])
    return(
      
        <View
        style={{
            alignItems: "center",
            alignContent: "center",
            flexDirection: "row",
            gap: 17,
            alignSelf: "center",
            marginVertical: 50,
            marginBottom: 10
        }}
        >{
            arrayDummy.map((_, index) => (
            <View
            key={index}
                style={{ 
                    borderBottomColor: index === currentPageNumber - 1 ? kalingaColor.pageIndicator : "white", 
                    borderBottomWidth: 7,
                    width: "12%",
                    borderRadius: 17,
                    elevation: 17
                    }}/>
                ))
        }
        </View>
       
    )
}