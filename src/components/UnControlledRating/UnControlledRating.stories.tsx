import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { UnConrolledRating } from './UnConrolledRating';

export default {
    title: 'UnConrolledRating stories',
    component: UnConrolledRating,
}

export const EmptyStars = () => <UnConrolledRating defaultValue={0}/> 
export const Rating1 = () => <UnConrolledRating defaultValue={1}/> 
export const Rating2 = () => <UnConrolledRating defaultValue={2}/>
export const Rating3 = () => <UnConrolledRating defaultValue={3}/> 
export const Rating4 = () => <UnConrolledRating defaultValue={4}/> 
export const Rating5= () => <UnConrolledRating defaultValue={5}/>  
