import { ISmartphone } from 'models/smartphone.model';
import React from 'react';

export function useSmartphoneById(id?: string, allSmartphones?: Array<ISmartphone>): [ISmartphone | undefined, React.Dispatch<React.SetStateAction<ISmartphone | undefined>>] {
  const [smartphone, setSmartphone] = React.useState<ISmartphone>();

  React.useEffect(() => {
    if (!allSmartphones?.length || id === undefined) {
      return;
    }
    const smartphone = allSmartphones.find(iSmartPhone => iSmartPhone._id === id);
    if (smartphone) {
      setSmartphone(smartphone);
    }
  }, [allSmartphones, id]);

  return [smartphone, setSmartphone];
}