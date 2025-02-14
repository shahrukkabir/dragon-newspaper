import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-5 justify-center items-center mt-4 px-5 bg-gray-600 py-4'>
            <p className='bg-red-700 px-5 py-2 text-white font-bold'>Latest</p>
            <Marquee pauseOnHover gradient={false} speed={50}>
                <Link to="/news" className='mx-4 text-white hover:underline'>
                    Match Highlights: Germany vs Spain — as it happened!
                </Link>
                <Link to="/news/2" className='mx-4 text-white hover:underline'>
                    Breaking News: Transfer Window Updates for 2025
                </Link>
                <Link to="/news/3" className='mx-4 text-white hover:underline'>
                    Exclusive: Interview with the Championship MVP
                </Link>
                <Link to="/news/4" className='mx-4 text-white hover:underline'>
                    Upcoming Fixtures: Don’t Miss This Weekend’s Thrillers
                </Link>
                <Link to="/news/5" className='mx-4 text-white hover:underline'>
                    Injury Reports: Key Players Out for the Season
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;