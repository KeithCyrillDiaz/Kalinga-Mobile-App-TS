import { View, Text } from "react-native"
import React, {useState, useEffect} from "react"


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
            alignSelf: "center"
        }}
        >{
            arrayDummy.map((_, index) => (
            <View
                style={{ 
                    borderBottomColor: index === currentPageNumber - 1 ? "#E60965" : "white", 
                    borderBottomWidth: 4,
                    width: "12%",
                    borderRadius: 17,
                    elevation: 17
                    }}/>
                ))
        }
        </View>
       
    )
}