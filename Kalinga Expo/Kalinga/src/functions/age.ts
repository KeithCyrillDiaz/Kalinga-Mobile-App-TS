
interface calculateAgeProps {
    selectedDate: Date | undefined
    formType: string
}
export const calculateAge = ({selectedDate}: calculateAgeProps) => {
    if(selectedDate === undefined) return
    const date = new Date()
    const differences = date.getTime() - selectedDate.getTime()
    const age: number = Math.floor(differences / (1000 * 60 * 60 * 24 * 365.25))
    if(age === 0){
        console.log("age = 0")
        const ageInDays: number = Math.floor(differences/(1000 * 60 * 60 * 24 ))
        console.log("age in Days: ", ageInDays)
        if(ageInDays === 0) return "New Born"
        if(ageInDays < 30) return ageInDays + " days"
        const ageInMonths: number = Math.floor(differences/(1000 * 60 * 60 * 24 * 30))
         return ageInMonths + " months"
    }
    return age
}