import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { Accordion } from './Accordion';


export default {
    title: 'Accordion stories',
    component: Accordion,
}

const callback = action('clicked on or off')

export const OnnMode = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callback}/> 
export const OffMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/> 

export const ModeChanged = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={()=>setValue(!value)}/>
}