import { SmartyText } from 'common-components/SmartyText.component';
import { ISmartphone } from 'models/smartphone.model';
import { SmartyCard } from 'common-components/SmartyCard.component';
import './SmartphoneList.component.css';

export function SmartphoneList(props: { loading: boolean, smartphones: Array<ISmartphone> }) {
  if (props.loading) {
    return <SmartyText type='content-title'>'Loading'</SmartyText>;
  }
  return (
    <div className="sl-grid">
      {props.smartphones.map((iSmartphone: ISmartphone) => {
        return <SmartyCard smartphone={iSmartphone} size="medium" key={iSmartphone._id}/>
      })}
    </div>
  );
}
