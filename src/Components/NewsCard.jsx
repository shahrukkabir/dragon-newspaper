import React from 'react';
import { FaBookmark, FaShareAlt } from 'react-icons/fa';


const NewsCard = ({ news }) => {
    return (
        <div className=" rounded-2xl overflow-hidden bg-gray-800 my-5 shadow-lg p-8 mx-8">
            <div className="flex justify-between items-center bg-gray-800 text-white p-3 rounded-md mb-4">
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-full" src={news.author.img} alt={news.author.name} />
                    <div>
                        <p className="font-semibold text-sm">{news.author.name}</p>
                        <p className="text-gray-400 text-xs">{new Date(news.author.published_date).toDateString()}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-400">
                    <FaBookmark className="cursor-pointer hover:text-white" />
                    <FaShareAlt className="cursor-pointer hover:text-white" />
                </div>
            </div>
            <h2 className="font-bold text-lg mb-2">{news.title}</h2>
            <div className='flex justify-center'>
                <img className="w-full h-96 object-cover rounded-md mb-3" src={news.thumbnail_url} alt="news" />
            </div>
            <p className="text-gray-700 text-sm mb-3">
                {news.details.length > 100 ? `${news.details.slice(0, 150)}...` : news.details}
            </p>
            <a href="#" className="text-blue-500 text-sm font-semibold">Read More</a>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>{i < Math.round(news.rating.number) ? '★' : '☆'}</span>
                    ))}
                    <span className="text-gray-600 text-sm ml-1">{news.rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5s-7.5-3-7.5-10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
