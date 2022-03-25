import { Smarty404 } from 'common-components/Smarty404.component';
import { SmartyError } from 'common-components/SmartyError.component';
import { SmartyLoading } from 'common-components/SmartyLoading.component';
import { SmartySpace } from 'common-components/SmartySpace.component';
import { SmartyText } from 'common-components/SmartyText.component';
import { useSmartphoneById } from 'hooks/useSmartphoneById';
import { RootState } from 'index';
import { i18n } from 'internationalization/i18n';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ISmartphoneSliceState, smartphonesSelector, fetchSmartphones } from 'slices/smartphones';
import { DetailsSidePanel } from './components/DetailsSidePanel.component';
import { SmartphoneDetails } from './components/SmartphoneDetails.component';

import './DetailsPage.page.css';

export function DetailsPage() {
  const { id: routeIdParam } = useParams();
  const { smartphones: allSmartphones, loadingSmartphones, smartphoneHasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);
  const [smartphone] = useSmartphoneById(routeIdParam, allSmartphones);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!allSmartphones.length) {
      dispatch(fetchSmartphones());
    }
  }, [dispatch, allSmartphones?.length]);


  if (loadingSmartphones) {
    return <SmartyLoading message={i18n('loadingSmartphones')} />
  }

  if (smartphoneHasErrors) {
    return <SmartyError message={i18n('unableToDisplay')} />
  }

  if (smartphoneHasErrors) {
    return <SmartyText type='heading'>{i18n('unableToDisplay')}</SmartyText>
  }

  if (!smartphone) {
    return <Smarty404 message={i18n('deviceNotFound')} />
  }

  return (
    <div className='dp-container'>
      <DetailsSidePanel />
      <div className='dp-content-container'>
        <SmartySpace height={'var(--theme-size-details-distance-from-top)'} />
        <SmartyText type='heading'>{smartphone.name}</SmartyText>
        <SmartySpace height={30} />
        <SmartphoneDetails smartphone={smartphone} />
      </div>
    </div>
  )
}