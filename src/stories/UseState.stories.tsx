import React, {useMemo, useState} from 'react'

export default {
    title: 'UseState demo'
}

function generateData() {
    console.log('generateData')
    return 1
}

export const Exemple1 = () => {
    console.log('Exemple1')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
    <button onClick={()=>setCounter(changer)}>Counter</button>
        {counter}
    </>
}