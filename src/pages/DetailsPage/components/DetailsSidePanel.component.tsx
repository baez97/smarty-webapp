import { SmartyBackButton } from 'common-components/SmartyBackButton.component';
import { SmartySpace } from 'common-components/SmartySpace.component';
import { SmartyText } from 'common-components/SmartyText.component';
import { useNavigate } from "react-router-dom";
import './DetailsSidePanel.component.css';

export function DetailsSidePanel() {
  const navigate = useNavigate();

  return (
    <div className="dsp-container">
      <SmartyText type="display">Smarty</SmartyText>
      <SmartySpace className="dsp-title-space-bottom" />
      <SmartyBackButton onPress={() => { navigate(-1) }} />
    </div>
  );
}