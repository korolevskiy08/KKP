import React from 'react';
import './App.css';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion'
import {UnConrolledRating} from './components/UnControlledRating/UnConrolledRating';
import {Rating, RatingValueType} from './components/Rating/Rating'
import {useState} from "react";
import Accordion from './components/Accordion/Accordion'
import ConrolledOnnOff from './components/OnnOff/OnnOff'
import { OnnOff } from './components/UnControlledOnnOff/UnControlledOnnOff';

function App(props: any) {
    console.log('Render App')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [onnOffCollapsed, setOnnOffCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className='app'>
            <h1>UnConrolledOnnOff</h1>
            <OnnOff onChange={setSwitchOn}/>{switchOn.toString()}

            <h1>ControlledOnnOff</h1>
            <ConrolledOnnOff
                on={onnOffCollapsed}
                setOnnOffCollapsed={() => setOnnOffCollapsed(!onnOffCollapsed)}
            />

            <h1>UnControlledRating:</h1>
            <UnConrolledRating/>

            <h1>ConrolledRating:</h1>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>

            <h1>UnConrolledAccordion</h1>
            <UnControlledAccordion titleValue={"Menu"}/>


            <h1>ControlledAccorrdion</h1>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
            />



        </div>

    );
}

type PagePropsTitle = {
    title: string
}

let PageTitle = (props: PagePropsTitle) => {
    console.log('Render AppTitle')
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
