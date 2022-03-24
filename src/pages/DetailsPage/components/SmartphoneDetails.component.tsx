import { SmartyImage } from "common-components/SmartyImage.component";
import { SmartySpace } from "common-components/SmartySpace.component";
import { ISmartphone } from "models/smartphone.model";

import './SmartphoneDetails.component.css';
import { SmartphoneDetailsList } from "./SmartphoneDetailsList.component";

export function SmartphoneDetails(props: { smartphone: ISmartphone }) {
  return (
    <div className="sd-container">
      <div className="sd-info-container">
        <div className="sd-image-container">
          <SmartyImage size="huge" source={props.smartphone.imageUrl} />
        </div>
        <SmartySpace width={60} />
        <SmartphoneDetailsList smartphone={props.smartphone} />
      </div>
    </div>
  )
}

