
interface calculateAgeProps {
    selectedDate: Date | undefined
}
export const calculateAge = ({selectedDate}: calculateAgeProps) => {
    if(selectedDate === undefined) return
    const date = new Date()
    const differences = date.getTime() - selectedDate.getTime()
    const age: number = Math.floor(differences / (1000 * 60 * 60 * 24 * 365.25))
    return age
}