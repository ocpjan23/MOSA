import ProductDetails from 'model/ProductDetails';
import React from 'react';
import './Item.scss';
import { useMyContext } from 'context/App';

interface ItemProps {
    data: ProductDetails
}

const Item: React.FC<ItemProps> = ({ data }) => {
    const { setValue } = useMyContext();

    const handleSelect = () => {
        setValue(data);
    }

    return (
        <div className="item" onClick={handleSelect}>
            <div>{data.title}</div>
        </div>
    );
};
  
export default Item;