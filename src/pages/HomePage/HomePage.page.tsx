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
import { SmartyLoading } from 'common-components/SmartyLoading.component';
import { SmartyError } from 'common-components/SmartyError.component';

export function HomePage() {
  const dispatch = useDispatch();
  const { smartphones, loadingSmartphones, smartphoneHasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);
  const { bestSellers, loadingBestSellers, bestSellersHasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);
  const { smartphoneSearch } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);

  React.useEffect(() => {
    if (!smartphones.length) {
      dispatch(fetchSmartphones());
    }
    if (!bestSellers.length) {
      dispatch(fetchBestSellers());
    }
  }, [dispatch, smartphones, bestSellers]);

  if (loadingSmartphones) {
    return <SmartyLoading message={i18n('loadingSmartphones')} />
  }

  if (smartphoneHasErrors || bestSellersHasErrors) {
    return <SmartyError message={i18n('unableToDisplay')} />
  }

  return (
    <div className='hp-container'>
      <HomeSidePanel />
      <div className='hp-content-container'>
        <SmartySpace height={'var(--theme-size-distance-from-top)'} />
        { smartphoneSearch.query?.length > 0 ? (
          <>
            <SmartyText type='heading'>{`${i18n('searchResultsFor')}"${smartphoneSearch.query}"`}</SmartyText>
            <SmartphoneList smartphones={smartphoneSearch.results} batchSize={15}/>
          </>
        ) : (
          <>
            <section>
              <SmartyText type='heading'>{i18n('bestSellers')}</SmartyText>
              <SmartphoneBestSellers loading={loadingSmartphones || loadingBestSellers} smartphones={smartphones} bestSellers={bestSellers} />
            </section>
            <section>
              <SmartyText type='heading'>{i18n('allSmartphones')}</SmartyText>
              <SmartphoneList smartphones={smartphones} batchSize={20}/>
            </section>
          </>
        )}
      </div>
    </div>
  )
}