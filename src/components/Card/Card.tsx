import React from 'react';
import './Card.scss';
import Button from 'components/Button';
import { useMyContext } from 'context/App';
import { toast } from 'react-toastify';

const Card: React.FC = () => {
    const {
        value,
        setValue,
        selectedItems,
        setSelectedItems,
    } = useMyContext();

    const handleBack = () => {
        setValue(null);
    }

    const handleAddCart = () => {
        const items = selectedItems && selectedItems.length > 0
            ?  selectedItems : [];
        if (value) {
            setSelectedItems([...items, value]);
            toast.success("Success Notification !", {
                position: "bottom-left"
            });
        }
    }

    if (!value) return <></>;

    return (
        <div className="card">
            <div>
                <Button onClick={handleBack}>Back</Button>
            </div>
            <img src={value.images[0]} alt={value.title} />
            <div>{value.title}</div>
            <hr/>
            <div>{value.description}</div>
            <hr/>
            <div>{value.price}</div>
            <hr/>
            <div>
                <Button onClick={handleAddCart}>Add to Cart</Button>
            </div>
        </div>
    );
};
  
export default Card;