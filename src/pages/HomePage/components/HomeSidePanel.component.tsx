import { SmartySpace } from 'common-components/SmartySpace.component';
import { SmartyText } from 'common-components/SmartyText.component';
import './HomeSidePanel.component.css';
import { SearchBar } from './SearchBar.component';

export function HomeSidePanel() {
  return (
    <div className="hsp-container">
      <SmartyText type="display">Smarty</SmartyText>
      <SmartySpace className="hsp-title-space-bottom" />
      <SearchBar />
    </div>
  );
}