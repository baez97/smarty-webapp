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
import { i18n } from 'internationalization/i18n';

export function HomePage() {
  const dispatch = useDispatch();
  const { smartphones, loadingSmartphones, smartphoneHasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);
  const { bestSellers, loadingBestSellers, bestSellersHasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);
  const { smartphoneSearch } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);

  React.useEffect(() => {
    dispatch(fetchSmartphones());
    dispatch(fetchBestSellers());
  }, [dispatch]);

  if (loadingSmartphones) {
    return <SmartyText type='heading'>Loading smartphones...</SmartyText>
  }

  if (smartphoneHasErrors || bestSellersHasErrors) {
    return <SmartyText type='heading'>Unable to display smartphones...</SmartyText>
  }

  return (
    <div className='hp-container'>
      <HomeSidePanel />
      <div className='hp-content-container'>
        <SmartySpace height={'var(--theme-size-distance-from-top)'} />
        { smartphoneSearch.query?.length > 0 ? (
          <>
            <SmartyText type='heading'>{`Search results for "${smartphoneSearch.query}"`}</SmartyText>
            <SmartphoneList loading={loadingSmartphones} smartphones={smartphoneSearch.results} batchSize={15}/>
          </>
        ) : (
          <>
            <section>
              <SmartyText type='heading'>{i18n('bestSellers')}</SmartyText>
              <SmartphoneBestSellers loading={loadingSmartphones || loadingBestSellers} smartphones={smartphones} bestSellers={bestSellers} />
            </section>
            <section>
              <SmartyText type='heading'>{i18n('allSmartphones')}</SmartyText>
              <SmartphoneList loading={loadingSmartphones} smartphones={smartphones} batchSize={20}/>
            </section>
          </>
        )}
      </div>
    </div>
  )
}