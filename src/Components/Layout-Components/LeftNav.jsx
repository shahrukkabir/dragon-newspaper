import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category)
            );
    }, [])
    return (
        <div className='flex flex-col gap-3'>
            <h5 className='mb-4'>All Category : {categories.length}</h5>
            {
                categories.map((category) => <button className='btn ' key={category.category_id}>{category.category_name}</button>)
            }
        </div>
    );
};

export default LeftNav;