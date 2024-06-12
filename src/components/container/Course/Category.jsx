import React from 'react';

const Category = ({ icon, category }) => {
    return (
        <div className=' flex items-center flex-col bg-white gap-4 p-8 rounded-md'>
            <div className='text-4xl text-Teal'>
                {icon}
            </div>
            <div>{category}</div>
            <a href="" className=' text-sm text-gray'>View More</a>
        </div>
    );
};

export default Category;
