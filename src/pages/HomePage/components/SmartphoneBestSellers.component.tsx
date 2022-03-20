import React from 'react';
import { ISmartphone } from 'models/smartphone.model';
import { SmartyCard } from 'common-components/SmartyCard.component';
import './SmartphoneBestSellers.component.css';
import { SmartySpace } from 'common-components/SmartySpace.component';

export function SmartphoneBestSellers(props: { smartphones: Array<ISmartphone>,  bestSellers: Array<string>, loading: boolean }) {
  const bestSellersSmartphones = React.useMemo(() => {
    const merged = new Array<ISmartphone>();
    if (props.smartphones && props.bestSellers) {
      props.bestSellers.forEach(iBestSellerId => {
        const smartphoneData = props.smartphones.find(iSmartphone => iSmartphone._id === iBestSellerId);
        if (smartphoneData)
          merged.push(smartphoneData);
      });
    }
    return merged;
  }, [props.smartphones, props.bestSellers]);

  return (
    <div className="sbs-container">
      <SmartySpace width={'calc(var(--theme-size-distance-from-side)'} />
      {bestSellersSmartphones.map(iSmartphone => (
        <SmartyCard smartphone={iSmartphone} size='large' key={iSmartphone._id} space={40}/>
      ))}
    </div>
  );
}