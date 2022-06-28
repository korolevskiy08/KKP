import React from "react";
import {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4| 5


type RatingPropsType = {
    // value: number
    defaultValue?: RatingValueType
}

export function UnConrolledRating(props: RatingPropsType) {
    console.log('Render Rating')

    let [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <div>
                <Star selected={(value > 1)} setValue={() => setValue(1)}/>
                <Star selected={(value > 1)} setValue={() => setValue(2)}/>
                <Star selected={(value > 2)} setValue={() => setValue(3)}/>
                <Star selected={(value > 3)} setValue={() => setValue(4)}/>
                <Star selected={(value > 4)} setValue={() => setValue(5)}/>
            </div>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

let Star = (props: StarPropsType) => {
    console.log('Render Star')

    return <span onClick={() => props.setValue()}>
        {props.selected ? <b> star </b> : 'star '}
    </span>
}