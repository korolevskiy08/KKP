import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('clicked on or off')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

const callbackProps = {
    onChange: callback,
}

export const MenuCollapsedMode2 = Template.bind({})

MenuCollapsedMode2.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: false,
}

export const UserCollapsedMode2 = Template.bind({})

UserCollapsedMode2.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: true,
}

export const ModeChanged:Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState(true)
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}

ModeChanged.args = {
    titleValue: 'Menu',
}