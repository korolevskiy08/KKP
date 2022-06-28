import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { OnnOff } from './OnnOff';


export default {
    title: 'OnnOff stories',
    component: OnnOff,
}

export const OnnMode = () => <OnnOff on={true} setOnnOffCollapsed={()=>{}}/> 
export const OffMode = () => <OnnOff on={false} setOnnOffCollapsed={()=>{}}/> 

export const ModeChanged = () => {
    const [value, setValue] = useState(true)
    return <OnnOff on={value} setOnnOffCollapsed={()=>setValue(!value)}/>
}

