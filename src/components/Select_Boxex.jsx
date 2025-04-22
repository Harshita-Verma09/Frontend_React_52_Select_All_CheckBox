import React, { useState } from "react";

const CheckboxList = () => {
    const [items, setItems] = useState([
        { id: 1, label: "Item 1", checked: false },
        { id: 2, label: "Item 2", checked: false },
        { id: 3, label: "Item 3", checked: false },
    ]);

    // ✅ Check if all checkboxes are selected
    const allChecked = items.every((item) => item.checked);

    // ✅ Check if at least one checkbox is selected
    const someChecked = items.some((item) => item.checked);

    // ✅ Toggle "Select All"
    const handleSelectAll = () => {
        const updatedItems = items.map((item) => ({
            ...item,
            checked: !allChecked, // Toggle all checkboxes based on current state
        }));
        setItems(updatedItems);
    };

    // ✅ Toggle single checkbox
    const handleCheckboxChange = (id) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(updatedItems);
    };

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
            {/* 🔽 Select All Checkbox */}
            <div className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={handleSelectAll}
                    className="w-5 h-5 cursor-pointer"
                />
                <label className="text-lg font-medium">Select All</label>
            </div>

            <hr />

            {/* 🔽 Child Checkboxes */}
            {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="w-5 h-5 cursor-pointer"
                    />
                    <label className="text-md">{item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default CheckboxList;
