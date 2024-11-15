import React from 'react';
import OfflineBlock from '../OfflineBlock';
import CrashedOfflineBlock from '../CrashedOfflineBlock';

interface Props {
    setDisplayFirstHash: React.Dispatch<React.SetStateAction<number>>
}

export default function Profile({ setDisplayFirstHash }: Props) {
    const quantPosts = 11
    const randomIndex = Math.floor(Math.random() * quantPosts)

    return (
        <div className="flex flex-col items-center justify-center relative size-full">
            <div className="flex items-center absolute top-2 left-2 max-md:top-0 max-md:left-0">
                <div className="py-2 px-4 max-md:py-1 max-md:px-2 bg-[#a6aff2] rounded-full border-2 border-white flex items-center justify-center mr-3 max-md:mr-1">
                    <span className="text-gray-600 max-md:text-[.5rem]">U</span>
                </div>
                <div className="text-lg max-md:text-[.5rem] text-white font-bold">User3626783</div>
            </div>

            <div className='grid grid-cols-3 max-md:grid-cols-2 items-center gap-6 max-lg:gap-3 overflow-scroll h-3/4 max-md:h-2/4 no-scrollbar'>
                {[...Array(quantPosts)].map((_, index) => {
                    if (index === randomIndex) {
                        return <CrashedOfflineBlock key={index} setDisplayFirstHash={setDisplayFirstHash} />
                    }

                    return <OfflineBlock key={index} />
                })}
            </div>
        </div>
    )
}
