import React from 'react';
import { SmartyText } from 'common-components/SmartyText.component';
import { SmartphoneList } from './components/SmartphoneList.component';

export function HomePage() {
  return (
    <section>
      <SmartyText type='heading'>All the smartphones</SmartyText>
      <SmartphoneList />
    </section>
  )
}