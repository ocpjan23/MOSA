import ProductDetails from 'model';
import React from 'react';

interface MyContextData {
    value?: ProductDetails | null;
    setValue: (value: ProductDetails | null) => void;
    selectedItems: ProductDetails[];
    setSelectedItems: (value: ProductDetails[]) => void;
}

export const MyContext = React.createContext<MyContextData | undefined>(undefined);

export const useMyContext = () => {
  const context = React.useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};