import { Floating } from 'assets/floating';

import './SmartyLoading.component.css';
import { SmartySpace } from './SmartySpace.component';
import { SmartyText } from './SmartyText.component';

export function SmartyLoading(props: { message: string }) {
  return (
    <div className="sl-loading-container">
      <Floating />
      <SmartySpace height={30} />
      <SmartyText type='content-title'>{props.message}</SmartyText>
    </div>
  );
}