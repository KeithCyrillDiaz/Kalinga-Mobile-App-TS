import React, {useEffect} from 'react'
import { CommonActions } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export const ResetPage= (navigation: StackNavigationProp<any>, page: string) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes:[{name: page}]
        })
    )
}