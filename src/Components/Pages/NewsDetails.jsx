import React from 'react';
import Header from '../Header';
import { useLoaderData, useNavigate } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    const navigate = useNavigate();

    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 gap-5'>
                <section className='col-span-9 p-10 rounded-lg'>
                    <h2 className='font-semibold text-2xl text-white'>Dragon News</h2>
                    <div className="rounded-lg mt-5 p-10 shadow-lg bg-gray-800 overflow-hidden">
                        <img
                            src={news.image_url}
                            alt={news.title}
                            className="w-full object-cover rounded-lg mb-4"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-white">{news.title}</h3>
                            <div className="flex items-center space-x-3 text-gray-400 text-sm mb-3">
                                <img
                                    src={news.author.img}
                                    alt={news.author.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="font-semibold">{news.author.name}</p>
                                    <p>{new Date(news.author.published_date).toDateString()}</p>
                                </div>
                            </div>
                            <p className="text-gray-300">{news.details}</p>
                        </div>
                        {/* Go Back Button */}
                        <button onClick={() => navigate(-1)} className="mt-5 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"> ← All news in this category </button>
                    </div>
                </section>
                <aside className='col-span-3'>
                    {/* Sidebar content if needed */}
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
