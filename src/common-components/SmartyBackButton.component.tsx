import { i18n } from "internationalization/i18n";
import './SmartyBackButton.component.css';
import { SmartyText } from "./SmartyText.component";
import { MdArrowBack } from "react-icons/md";
export function SmartyBackButton(props: { onPress: Function }) {
  return (
    <button className="sbb-container" onClick={() => props.onPress()}>
      <div className="sbb-content">
        <MdArrowBack className="sbb-icon" size={18}/>
        <SmartyText type="body">{i18n('back')}</SmartyText>
      </div>
      <div className="sbb-underline"/>
    </button>
  )
}