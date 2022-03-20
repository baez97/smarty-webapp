import React from 'react';
import './SmartyImage.component.css';
import EmptyPhone from '../assets/empty-phone';

export function SmartyImage(props: { source?: string, size: 'medium' | 'large' }) {
  const [showPlaceholder, setShowPlaceholder] = React.useState(props.source === undefined);

  return (
    <div className={`si-${props.size}`}>
      {showPlaceholder ? <EmptyPhone /> : <img src={props.source} alt={'Smartphone preview'} onError={() => { setShowPlaceholder(true); }}/>}
    </div>
  )
}