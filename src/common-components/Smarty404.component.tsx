import { Bugs } from 'assets/bugs';

import './Smarty404.component.css';
import { SmartySpace } from './SmartySpace.component';
import { SmartyText } from './SmartyText.component';

export function Smarty404(props: { message: string }) {
  return (
    <div className="s404-container">
      <Bugs />
      <SmartySpace height={30} />
      <SmartyText type='content-title'>{props.message}</SmartyText>
    </div>
  );
}