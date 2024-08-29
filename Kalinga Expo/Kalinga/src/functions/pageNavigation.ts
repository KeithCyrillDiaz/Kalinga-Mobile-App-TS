
import { CommonActions } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '@@/App'

export const resetPage = (navigation: StackNavigationProp<RootStackParams>, page: keyof RootStackParams) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes:[{name: page}]
        })
    )
}

export const navigatePage = (
    navigation: StackNavigationProp<RootStackParams>, 
    page: keyof RootStackParams, 
    parameter?: any
     
) => {
    navigation.navigate(page, parameter)
}
