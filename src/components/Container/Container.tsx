import React, { ReactNode } from 'react';

interface ContainerProps {
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

Container.defaultProps = {
  children: 'No content available',
};

export default Container;
