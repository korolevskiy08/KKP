import React, {useEffect, useState} from "react"

type PropsType = {}

const setDigitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

return <div>
    <span>{setDigitsString(date.getHours())}</span>
    :
    <span>{setDigitsString(date.getMinutes())}</span>
    :
    <span>{setDigitsString(date.getSeconds())}</span>
</div>
}