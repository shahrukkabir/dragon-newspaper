import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
    const { data: news } = useLoaderData();

    return (
        <div>
            <div className='mx-8'>
                <h2 className='font-semibold mb-4'>Dragon News Home</h2>
                <p className='font-semibold text-sm'>{news.length} News Found On this Category</p>
            </div>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;