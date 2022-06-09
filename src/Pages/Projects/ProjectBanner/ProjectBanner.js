import React from 'react';
import projectBanner from '../../../Assets/b4.jpg' 
const ProjectBanner = () => {
    return (
        <div className="hero h-96" style={{
            background: `url(${projectBanner})`,
            // backgroundSize: 'cover' 
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-4xl">
                    <h1 className="mb-7 text-5xl font-bold">Web Design And Development.</h1>
                    <p className="mb-5 text-lg font-bold"> Portfolio / Project </p>
                    
                </div>
            </div>
        </div>
    );
};

export default ProjectBanner;