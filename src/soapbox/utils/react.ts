export const reactText = (element: JSX.Element | string | undefined, filters: string[] = []): string => {
  if (!element) return '';

  if (typeof element === 'string' && filters.includes(element)) return '';

  if (typeof element === 'string') return element;

  const children = element.props && element.props.children;
  if (Array.isArray(children)) {
    return children.map(c => reactText(c, filters)).join('');
  }
  return reactText(children, filters);
};