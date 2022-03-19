import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';
import { ISmartphone } from '../models/smartphone.model';
import { fetchSmartphones, ISmartphoneSliceState, smartphonesSelector } from '../slices/smartphones';

export function HomePage() {
  const dispatch = useDispatch();
  const { smartphones, loading, hasErrors } = useSelector<RootState, ISmartphoneSliceState>(smartphonesSelector);

  React.useEffect(() => { dispatch(fetchSmartphones()) }, [dispatch]);

  const renderSmartphones = () => {
    if (loading) return <h1>Loading smartphones...</h1>
    if (hasErrors) return <h1>Unable to display smartphones...</h1>
    return smartphones.map((iSmartphone: ISmartphone) => <p>{iSmartphone.name}</p>)
  }

  return (
    <section>
      <h1>All the smartphones</h1>
      {renderSmartphones()}
    </section>
  )
}