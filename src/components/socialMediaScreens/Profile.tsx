import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="bg-[#d9d9d9] flex flex-col items-center justify-center w-full">
            <div className="bg-[#d9d9d9] overflow-hidden w-full max-w-[517px] h-[200px] relative flex flex-col items-center">
                {/* Profile Header Section with Separate Divs for Image and Name */}
                <div className="flex items-center w-full absolute top-3 left-0 px-4">
                    {/* Circular Profile Image */}
                    <div className="w-[15%] h-[15%] md:w-[40px] md:h-[40px] bg-gray-300 rounded-full border-2 border-white flex items-center justify-center mr-3">
                        <span className="text-gray-600">P</span> {/* Default profile icon */}
                    </div>
                    
                    {/* Profile Name Header in a separate div */}
                    <div className="text-lg font-bold">Profile Name</div>
                </div>

                {/* Random Photo Section 1 */}
                <div className="absolute w-[40%] h-[50%] top-[60%] left-[5%] transform -translate-y-1/2 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <img src="https://via.placeholder.com/150" alt="Random" className="w-full h-full object-cover rounded-2xl" />
                </div>

                {/* Random Photo Section 2 */}
                <div className="absolute w-[40%] h-[50%] top-[60%] right-[5%] transform -translate-y-1/2 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <img src="https://via.placeholder.com/150" alt="Random" className="w-full h-full object-cover rounded-2xl" />
                </div>
            </div>
        </div>
    );
}

export default Profile;
