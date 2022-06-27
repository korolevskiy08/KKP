import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange:()=>void
}

let Accordion= ({titleValue, collapsed, onChange}:AccordionPropsType) => {
    console.log('Render Accordion')
        return (
            <div>
                <AccordionTitle
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
}

let AccordionTitle = ({title, onChange}: AccordionTitlePropsType) => {
    console.log('Accordion Title')

    return (
        <h3 onClick={onChange}> --{title}-- </h3>
    )
}

export default Accordion;