import React, { useState } from 'react';

const FilterMovies = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [rate, setRate] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        onFilter(e.target.value, rate);
    };

    const handleRateChange = (e) => {
        setRate(e.target.value);
        onFilter(title, e.target.value);
    };

    return (
        <div className="filterMovies">
            <input
                type="text"
                placeholder="Search by title"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                type="number"
                placeholder="Search by rate"
                value={rate}
                onChange={handleRateChange}
            />
        </div>
    );
};

export default FilterMovies;