import {useState, useCallback} from 'react'
const ItemsList = () => {
    const [items, setItems] = useState(['Items 1', 'Items 2', 'Items 3', 'Items 4', 'Items 5']);

    const removeItem =useCallback((itemToRemove) => {
        setItems(items.filter(item => item !== itemToRemove));
    },[]) 

    return (
        <div>
            {items.map(item => (
                <div>
                    {item}
                    <button onClick={() => removeItem(item)}>Remove</button>
                </div>
            ))}
        </div>
    )
}
export default ItemsList