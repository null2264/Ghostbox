import React, { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {
  children: React.ReactNode
  target?: Element | DocumentFragment | null
}

/**
 * Portal
 */
const Portal: React.FC<IPortal> = ({ children, target }) => {
  const [isRendered, setIsRendered] = useState<boolean>(false);

  if (!target) {
    target = target = document.getElementById('soapbox') as HTMLDivElement;
  }

  useLayoutEffect(() => {
    setIsRendered(true);
  }, []);


  if (!isRendered) {
    return null;
  }

  return ReactDOM.createPortal(children, target);
};

export default Portal;
