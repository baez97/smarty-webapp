import React from 'react';
import './SmartyText.component.css';

type TextTypes = 'display' | 'heading' | 'contentTitle' | 'body' | 'label';
type Props = { type: TextTypes, children: any };

export function SmartyText(props: Props) {
  return <div className={`smarty-text st-${props.type}`}>{props.children}</div>
}
