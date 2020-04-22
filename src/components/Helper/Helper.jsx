import React from 'react';

export const handleWrapping = (Component, props) => {
  const { children, ...rest } = props;
  return (
    <Component {...rest}>
      {children}
    </Component>
  );
};
