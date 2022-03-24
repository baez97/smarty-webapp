import React from 'react';
import { SmartyText } from 'common-components/SmartyText.component';
import { ISmartphone } from 'models/smartphone.model';
import { SmartyCard } from 'common-components/SmartyCard.component';
import { SmartyButton } from 'common-components/SmartyButton.component';
import './SmartphoneList.component.css';
import { SmartySpace } from 'common-components/SmartySpace.component';
import NoResults from 'assets/no-results';
import { i18n } from 'internationalization/i18n';

export function SmartphoneList(props: { loading: boolean, smartphones: Array<ISmartphone>, batchSize: number }) {
  const [nOfItems, setNOfItems] = React.useState(props.batchSize);

  if (props.loading) {
    return <SmartyText type='content-title'>Loading</SmartyText>;
  }

  const smartphonesToShow = props.smartphones.slice(0, nOfItems);
  const allSmartphonesShown = nOfItems >= props.smartphones.length;

  if (smartphonesToShow.length === 0) {
    return (
      <div className='sl-no-results-container'>
        <NoResults width={'var(--illustration-width)'}/>
        <SmartySpace height={10} />
        <SmartyText type='content-title' secondary>No smartphones found</SmartyText>
      </div>
    )
  }
  return (
    <div className="sl-container">
      <div className="sl-grid">
        {smartphonesToShow.map((iSmartphone: ISmartphone) => {
          return <SmartyCard smartphone={iSmartphone} size="medium" key={iSmartphone._id} space={30} />
        })}
      </div>
      <SmartySpace height={50}/>
      {!allSmartphonesShown && <SmartyButton title={i18n('showMore')} onClick={() => setNOfItems(prev => prev + props.batchSize)} />}
    </div>
  );
}
