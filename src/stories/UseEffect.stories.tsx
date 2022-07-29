import React, {useEffect, useState} from 'react'

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('SimpleExample')

    useEffect(()=>{
        console.log('UseEffect called on every redraw')
        document.title = counter.toString()
    }) // будет срабатывать каждый раз когда компонента будет перерисовываться

    useEffect(()=>{
        console.log('Use effect will be called once when mounting the component(componentDidMount)')
        document.title = counter.toString()
    }, []) // вызовется при монтирований компоненты 1 раз

    useEffect(()=>{
        console.log('Use effect will be called when the value changes')
        document.title = counter.toString()
    }, [counter])

    return <>
        hello, {counter}
        <button onClick={()=>setCounter(counter + 1)}>Counter</button>
        {counter}
    </>
}