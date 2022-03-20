import React from 'react';
import './SmartyText.component.css';

type TextTypes = 'display' | 'heading' | 'content-title' | 'body' | 'label';
type Props = { type?: TextTypes, children: any, ellipsize?: boolean };

export function SmartyText(props: Props) {
  const type = props.type || 'body';
  return <div className={`smarty-text st-${type} ${props.ellipsize ? 'st-ellipsize' : ''}`}>{props.children}</div>
}
