import React from 'react';

const AddItems = ({ newItem, setNewItem }) => {
    const handleSubmit = () => {
        console.log(newItem);
    };
    return (
        <div className="addItems">
            <input
                type="text"
                placeholder="name"
                value={newItem.name}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
};

export default AddItems;
