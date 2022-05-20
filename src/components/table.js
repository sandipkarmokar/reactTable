import React, { useState } from 'react';

const Table = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState();

    const handleChange = (status, id) => {
        const findItem = data.find((el) => el.id === id);
        findItem.status = status;
        setSelectedItem(findItem);
    };

    // select dropdown menu has a onChange event handle which trigers handleChange with args. id and status. It it turns find the object containing the id and mututes its status and re-renders the component.

    return (
        <div className="table">
            <div className="table-bar">
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Description</p>
                <p>Status</p>
            </div>
            <div className="table-contents">
                {data.map((el) => {
                    const { id, name, email, phone, description, status } = el;
                    return (
                        <div className={`table-item ${status}`} key={id}>
                            {' '}
                            {/* On every re-render it add class based on the status.= */}
                            <p className="name">{name}</p>
                            <p className="email">{email}</p>
                            <p className="phone">{phone}</p>
                            <p className="description">{description}</p>
                            <select
                                onChange={(e) =>
                                    handleChange(e.target.value, el.id)
                                }
                                className="select"
                                name="status"
                                id="status"
                            >
                                <option value="status">Status</option>
                                <option value="reject">Reject</option>
                                <option value="approved">Approved</option>
                                <option value="guest">Guest</option>
                            </select>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Table;
