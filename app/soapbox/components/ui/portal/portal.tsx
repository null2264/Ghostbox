import React, { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  children: React.ReactNode
  target?: Element | DocumentFragment
}

/**
 * Portal
 */
const Portal: React.FC<IPortal> = ({ children, target = document.getElementById('soapbox') as HTMLDivElement }) => {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsRendered(true);
  }, []);


  if (!isRendered) {
    return null;
  }

  return ReactDOM.createPortal(children, target);
};

export default Portal;
