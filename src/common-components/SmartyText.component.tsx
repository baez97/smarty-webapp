import React from 'react';
import './SmartyText.component.css';

type TextTypes = 'display' | 'heading' | 'content-title' | 'body' | 'label' | 'button';
type Props = { type?: TextTypes, children: any, ellipsize?: boolean, secondary?: boolean };

export function SmartyText(props: Props) {
  const type = props.type || 'body';
  return (
    <div className={`smarty-text st-${type} ${props.ellipsize ? 'st-ellipsize' : ''} ${props.secondary ? 'st-secondary' : ''}`}>
      {props.children}
    </div>
  );
}
