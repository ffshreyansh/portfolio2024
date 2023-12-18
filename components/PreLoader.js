// Preloader.js
'use client'
import React, { useState, useEffect } from 'react';

const Preloader = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate some async operation, e.g., fetching data, loading assets, etc.
        const fetchData = async () => {
            // Perform your loading operations here

            // Simulate a delay (you can replace this with your actual loading logic)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Set loading to false when the content is ready
            setLoading(false);
        };

        fetchData();
    }, []);
    return loading ? <div className=" bg-slate-100 h-screen">
            <svg id="preloader" xmlns="http://www.w3.org/2000/svg" className='w-1/2 lg:w-1/6 h-4 lg:h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'  viewBox="0 0 1484 20">
                <g data-name="Group 61" transform="translate(-953.5 -1182.5)">
                    <line id="loading-bar" x2="1464" transform="translate(963.5 1192.5)" fill="none" stroke="rgba(255,255,255,0.5)" stroke-linecap="round" stroke-width="20" />
                    <line id="loading-line-main" x2="1464" transform="translate(963.5 1192.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="20">
                        <animate attributeName="x2" begin="0s" dur="2s" values="0;0;0;0;0;250;280;400;650;900;900;950;1000;1050;1200;1464" calcMode="linear" repeatCount="indefinite" />
                        {/* <!-- You can change animation time by changing 'dur' attribute, erase 'repeatCount' attribute if you want to make it run once --> */}
                    </line>
                </g>
            </svg>
    </div> : children;
};

export default Preloader;
