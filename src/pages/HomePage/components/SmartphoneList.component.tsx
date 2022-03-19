import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'index';
import { SmartyText } from 'common-components/SmartyText.component';
import { ISmartphone } from 'models/smartphone.model';
import { ISmartphoneSliceState, smartphonesSelector, fetchSmartphones } from 'slices/smartphones';

export function SmartphoneList() {
  const dispatch = useDispatch();
  const { smartphones, loading, hasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);

  React.useEffect(() => { dispatch(fetchSmartphones()) }, [dispatch]);

  if (loading) {
    return <SmartyText type='heading'>Loading smartphones...</SmartyText>
  }

  if (hasErrors) {
    return <SmartyText type='heading'>Unable to display smartphones...</SmartyText>
  }

  return (
    <div>
      {smartphones.map((iSmartphone: ISmartphone) => {
        return <SmartyText type='body' key={iSmartphone._id}>{iSmartphone.name}</SmartyText>
      })}
    </div>
  );
}
