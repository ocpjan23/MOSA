import React from 'react';
import Item from 'components/Item';
import ProductDetails from 'model/ProductDetails';

interface ListProps {
    data: ProductDetails[];
    defaultMessage?: string;
}

const List: React.FC<ListProps> = ({
    data,
    defaultMessage,
}) => {
    return (
        <div className="list">
        {
            data.length > 0 ?
                data.map((item, index) => <Item key={index} data={item} />)
                : defaultMessage
        }
        </div>
    );
};

List.defaultProps = {
    defaultMessage: 'No data available',
};
  
export default List;