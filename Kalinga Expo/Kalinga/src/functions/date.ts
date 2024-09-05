
interface formatDateProps {
    selectedDate: Date | undefined;
}

const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export const formatDate = ({selectedDate}:formatDateProps) => {
    if(selectedDate === undefined) return {
        month: null,
        day: null,
        year: null,
        formatDate: null
    }
    const day = selectedDate.getDate()
    const monthInt = selectedDate.getMonth() + 1
    const year = selectedDate.getFullYear()
    const month = months[monthInt - 1]
    const formattedDate = month + " " +  day + ", " + year
    return {
       month: month, 
       day: day,
       year: year,
       formattedDate: formattedDate
    }
}
