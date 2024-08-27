import * as Font from 'expo-font';

export const getFonts = async () => {
    await Font.loadAsync({
        'Open-Sans-Bold': require('@@/assets/Fonts/OpenSans_Condensed-Bold.ttf'),
        'Open-Sans-Regular': require('@@/assets/Fonts/OpenSans_Condensed-Regular.ttf'),
        'Kurale': require('@@/assets/Fonts/Kurale-Regular.ttf'),
        'Inter-Bold': require('@@/assets/Fonts/Inter-Bold.ttf'),
        'Inter-Regular': require('@@/assets/Fonts/Inter-Regular.ttf'),
        'OpenSans_Condensed-Bold': require('@@/assets/Fonts/OpenSans_Condensed-Bold.ttf'),
        'OpenSans_Condensed-Regular': require('@@/assets/Fonts/OpenSans_Condensed-Regular.ttf'),
        'OpenSans-Regular': require('@@/assets/Fonts/OpenSans-Regular.ttf'),
        'Open-Sans-SemiBold': require('@@/assets/Fonts/OpenSans-SemiBold.ttf'),
        'Open-Sans-Light': require('@@/assets/Fonts/OpenSans-Light.ttf'),
        'Klee-One-Regular': require('@@/assets/Fonts/KleeOne-Regular.ttf'),
        'Klee-One-Bold': require('@@/assets/Fonts/KleeOne-SemiBold.ttf'),
    })
}
