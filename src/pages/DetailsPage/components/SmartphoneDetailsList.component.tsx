import { SmartyPriceTag } from "common-components/SmartyPriceTag.component";
import { SmartySpace } from "common-components/SmartySpace.component";
import { SmartyText } from "common-components/SmartyText.component";
import { formatMemory } from "helpers/formatMemory";
import { ISmartphone } from "models/smartphone.model";
import { MdOutlineMemory, MdPhonelinkSetup, MdOutlineStorage, MdOutlineSdStorage, MdStyle, MdScreenshot } from 'react-icons/md';
import './SmartphoneDetailsList.component.css';

export function SmartphoneDetailsList(props: { smartphone: ISmartphone }) {
  const { processor, ram, rom, screenSize } = props.smartphone;

  return (
    <div>
      {!!processor && <SmartphoneDetailsListItem icon="cpu" text={`${processor.name} ${processor.cores} x ${processor.frequency} GHz`} />}
      {!!props.smartphone.os && <SmartphoneDetailsListItem icon="os" text={`${props.smartphone.os.type}`} />}
      {ram !== undefined && <SmartphoneDetailsListItem icon="ram" text={formatMemory(ram)} />}
      {rom !== undefined && <SmartphoneDetailsListItem icon="rom" text={formatMemory(rom)} />}
      {!!props.smartphone.manufacturer && <SmartphoneDetailsListItem icon="manufacturer" text={`${props.smartphone.manufacturer}`} />}
      {screenSize.inches !== undefined && <SmartphoneDetailsListItem icon="screen" text={`${screenSize.inches}' ${screenSize.width} x ${screenSize.height} mm`} />}
      {!!props.smartphone.price && <SmartyPriceTag price={props.smartphone.price} />}
    </div>
  )
}

function SmartphoneDetailsListItem(props: { icon: keyof typeof iconsMap, text: string }) {
  return (
    <div className="sdli-container">
      {iconsMap[props.icon]}
      <SmartySpace width={25} />
      <SmartyText>{props.text}</SmartyText>
    </div>
  )
}

const iconsMap = {
  'cpu': <MdOutlineMemory size={24} />,
  'os': <MdPhonelinkSetup size={24} />,
  'ram': <MdOutlineStorage size={24} />,
  'rom': <MdOutlineSdStorage size={24} />,
  'manufacturer': <MdStyle size={24} />,
  'screen': <MdScreenshot size={24} />
}