import { SmartyText } from "./SmartyText.component";
import './SmartyButton.component.css';

export function SmartyButton(props: { title: string, onClick: Function }) {
  return (
    <button className="sb-button" onClick={() => props.onClick()}>
      <SmartyText type="button">{props.title}</SmartyText>
    </button>
  )
}