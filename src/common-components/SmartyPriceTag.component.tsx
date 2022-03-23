import React from 'react';
import { SmartyText } from './SmartyText.component';
import './SmartyPriceTag.component.css';

export function SmartyPriceTag(props: { price: number }) {
  const formattedPrice = React.useMemo(() => {
    return `${props.price.toFixed(2)}€`;
  }, [props.price]);

  return (
    <div className='spt-container'>
      <SmartyText type='label'>{formattedPrice}</SmartyText>
    </div>
  )
}