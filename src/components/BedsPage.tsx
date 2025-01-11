import React from 'react';
import FilterComponent from './FilterComponent';
import ResultComponent from './ResultComponent';

function BedsPage() {
    return (
        <div className="flex flex-col md:flex-row gap-10 p-6 justify-center items-start w-full">
            <div className="flex flex-col gap-10 md:flex-row justify-between md:w-[80%]">
                <div className="w-full">
                    <ResultComponent />
                </div>

                <div className="w-full md:w-[40%] sticky top-6">
                    <FilterComponent />
                </div>
            </div>
        </div>
    );
}

export default BedsPage;
