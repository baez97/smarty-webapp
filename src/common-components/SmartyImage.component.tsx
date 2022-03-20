import React from 'react';
import './SmartyImage.component.css';
import EmptyPhone from '../assets/empty-phone';

export function SmartyImage(props: { source?: string, size: 'medium' | 'large' }) {
  const [error, setError] = React.useState(false);

  if (!props.source) {
    return <div className={`si-empty-${props.size}`} />
  }

  return (
    <div className={`si-${props.size}`}>
      {error ? <EmptyPhone /> : <img src={props.source} alt={'Smartphone preview'} onError={() => setError(true)}/>}
    </div>
  )
}