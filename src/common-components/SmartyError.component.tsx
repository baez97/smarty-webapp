import { ErrorInWeb } from 'assets/error-in-web';

import './SmartyError.component.css';
import { SmartySpace } from './SmartySpace.component';
import { SmartyText } from './SmartyText.component';

export function SmartyError(props: { message: string }) {
  return (
    <div className="se-error-container">
      <ErrorInWeb />
      <SmartySpace height={30} />
      <SmartyText type='content-title'>{props.message}</SmartyText>
    </div>
  );
}