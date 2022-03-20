import { ISmartphone } from 'models/smartphone.model';
import './SmartyCard.component.css';
import { SmartyImage } from './SmartyImage.component';
import { SmartyPriceTag } from './SmartyPriceTag.component';
import { SmartyText } from './SmartyText.component';

export function SmartyCard(props: { smartphone: ISmartphone, size: 'medium' | 'large' }) {
  const size = props.size || 'medium';
  return (
    <div className={`sc-container sc-${size}`}>
      <SmartyImage size={size} source={props.smartphone.imageUrl} />
      <SmartyText type='content-title' ellipsize={true}>{props.smartphone.name}</SmartyText>
      <SmartyPriceTag price={props.smartphone.price} />
    </div>
  );
}
