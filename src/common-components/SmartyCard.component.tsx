import { ISmartphone } from 'models/smartphone.model';
import { useNavigate } from 'react-router-dom';
import './SmartyCard.component.css';
import { SmartyImage } from './SmartyImage.component';
import { SmartyPriceTag } from './SmartyPriceTag.component';
import { SmartyText } from './SmartyText.component';

export function SmartyCard(props: { smartphone: ISmartphone, size: 'medium' | 'large', space?: number }) {
  const size = props.size || 'medium';

  const navigate = useNavigate();

  function goToDetails() {
    navigate(`/details/${props.smartphone._id}`);
  }

  return (
    <div className={`sc-container sc-${size}`} style={{ marginRight: props.space, marginBottom: props.space }} onClick={goToDetails}>
      <SmartyImage size={size} source={props.smartphone.imageUrl} alt={props.smartphone.name}/>
      <div className={`sc-info-container sc-info-${size}`}>
        <SmartyText type='content-title' ellipsize={true}>{props.smartphone.name}</SmartyText>
        <SmartyPriceTag price={props.smartphone.price} />
      </div>
    </div>
  );
}
