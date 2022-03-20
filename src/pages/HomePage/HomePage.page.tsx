import React from 'react';
import { SmartyText } from 'common-components/SmartyText.component';
import { SmartphoneList } from './components/SmartphoneList.component';
import { RootState } from 'index';
import { useDispatch, useSelector } from 'react-redux';
import { ISmartphoneSliceState, smartphonesSelector, fetchSmartphones, fetchBestSellers } from 'slices/smartphones';
import { SmartphoneBestSellers } from './components/SmartphoneBestSellers.component';
import { HomeSidePanel } from './components/HomeSidePanel.component';

import './HomePage.page.css';
import { SmartySpace } from 'common-components/SmartySpace.component';

export function HomePage() {
  const dispatch = useDispatch();
  const { smartphones, loadingSmartphones, smartphoneHasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);
  const { bestSellers, loadingBestSellers, bestSellersHasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);

  React.useEffect(() => {
    dispatch(fetchSmartphones());
    dispatch(fetchBestSellers());
  }, [dispatch]);

  if (loadingSmartphones) {
    return <SmartyText type='heading'>Loading smartphones...</SmartyText>
  }

  if (smartphoneHasErrors) {
    return <SmartyText type='heading'>Unable to display smartphones...</SmartyText>
  }

  return (
    <div className='hp-container'>
      <HomeSidePanel />
      <div className='hp-content-container'>
        <SmartySpace height={'var(--theme-size-distance-from-top)'} />
        <section>
          <SmartyText type='heading'>Best sellers</SmartyText>
          <SmartphoneBestSellers loading={loadingSmartphones || loadingBestSellers} smartphones={smartphones} bestSellers={bestSellers} />
        </section>
        <section>
          <SmartyText type='heading'>All the smartphones</SmartyText>
          <SmartphoneList loading={loadingSmartphones} smartphones={smartphones} />
        </section>
      </div>
    </div>
  )
}