import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Elements that are showed when accordion is openned
     */
    onChange:()=>void

    /**
     * color oh header text
     */
    color: string
}

export let Accordion= ({titleValue, collapsed, onChange, color}:AccordionPropsType) => {
    console.log('Render Accordion')
        return (
            <div>
                <AccordionTitle
                                color={color}
                                title={titleValue}
                                onChange={onChange}
                />

                { !collapsed && <AccordionBody />}
            </div>
        )
}

let AccordionBody = () => {
    console.log('Accordion Body')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
    color?: string
}

let AccordionTitle = ({title, onChange, color}: AccordionTitlePropsType) => {
    console.log('Accordion Title')

    return (
        <h3 style={{color: color ? color : "black"}}
            onClick={onChange}> --{title}-- </h3>
    )
}
