import React, { useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";

import { useMyContext } from '../component/store/ContextApi';
import CardItem from '../component/CardItem';
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { PiCaretDoubleLeftLight } from "react-icons/pi";
import FeedbackForm from '../component/FeedbackForm';

const Home = () => {


    const { userListData, loading, setuserListData,
        setToggleItem, toggleItem, extendSidebar,
        setextendSidebar } = useMyContext();

    const itemsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(userListData.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = userListData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const RemoveUser = (userId) => {
        const updatedUserListData = userListData.filter((user) => user.userId !== userId);
        setuserListData(updatedUserListData);

        if (currentItems.length === 1 && totalPages > 1) {

            const newCurrentPage = Math.max(1, currentPage - 1);
            setCurrentPage(newCurrentPage);
        }
    };



    return (
        <>




            <aside class={` bg-slate-200  shadow-2xl rounded-[2rem] text-gray-700 
              fixed top-0 left-0 z-40 
               ${extendSidebar == false ? "w-full lg:w-[390px] " : " w-full lg:w-[85%] grid grid-cols-2"}
                h-screen transition-transform -translate-x-full sm:translate-x-0`} aria-label="Sidebar">

                <div class="h-full lg:w-[390px] px-3 py-4 overflow-y-auto ">
                    <ul class="space-y-2   font-medium px-5 py-14 ">


                        <li>
                            <div className='bg-white p-3  shadow mb-7 rounded-lg flex  items-center gap-5 '>
                                <div>
                                    <img
                                        className='w-14 h-14 rounded-full'
                                        src="data:image/jpeg;base64,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"
                                        alt="" />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold text-black'>Hi Reader,</h1>
                                    <p>Here's your News!</p>
                                </div>
                            </div>

                        </li>


                        {
                            !extendSidebar && (
                                <li>
                                    <div className='bg-white p-4  shadow mb-7 rounded-lg  gap-5 '>
                                        <h1 className='text-3xl mb-4  font-bold text-black text-center'>View Toggle</h1>
                                        <div className='grid grid-cols-2 rounded-lg bg-slate-200 mx-3 '>

                                            <div className={`${toggleItem == false ? " bg-green-200" : ""} flex flex-grow py-3 h-full rounded-l-lg `}>
                                                <span
                                                    onClick={() => setToggleItem(false)}
                                                    className='text-center ml-10'><CgMenuGridO className='w-10 h-10' /></span>
                                            </div>
                                            <div className={`flex flex-grow py-3 h-full rounded-r-lg ${toggleItem ? "bg-green-200 " : ""} `}>
                                                <span
                                                    onClick={() => setToggleItem(true)}
                                                    className='text-center ml-10'><TfiMenuAlt className='w-10 h-10' /></span>
                                            </div>

                                        </div>

                                    </div>
                                </li>
                            )
                        }

                        <li>
                            <div className='bg-white p-3 shadow mb-7 rounded-lg  gap-5 '>
                                <h1 className='text-3xl mb-4  font-bold text-black text-center'>Have a FeedBack</h1>



                                <div className='w-full text-center'>
                                    <button
                                        onClick={() => setextendSidebar(!extendSidebar)}
                                        className={`text-lg capitalize text-black font-bold px-16 mb-2  
                                        text-center py-3.5 rounded-md  ${extendSidebar ? "bg-rose-400" : "bg-green-200"}  `}>
                                        we're listening!
                                    </button>
                                </div>


                            </div>
                        </li>
                    </ul>

                </div>

                <div className=' py-20 pr-5  overflow-y-auto'>
                    <div>
                        <h1 className='text-3xl font-semibold mb-2 text-black'>Thankyou so mauch for taking the time!</h1>
                        <p className='text-base font-semibold '>please provie the below details !</p>

                        <FeedbackForm />

                    </div>



                </div>





            </aside>


            <div class=" p-3 lg:px-10 py-12 bg-slate-200 sm:ml-[390px]">
                <div className={`${toggleItem ? "flex-col" : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 "}`}>



                    {loading ? (
                        <div className='flex justify-center items-center h-screen font-medium text-black text-xl'>Loading...</div>
                    ) : (
                        
                   
                            currentItems.map((user) => (
                                <CardItem key={user.id} user={user} RemoveUser={RemoveUser} />
                            ))
                        
                    )}




                    {/* {
                        userListData && currentItems.map(user => (
                            <CardItem key={user.id} user={user} RemoveUser={RemoveUser} />
                        ))
                    } */}


                </div>






                <div className='flex justify-center'>
                    <div className='flex space-x-2'>
                        {/* Previous button */}
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className='h-8 w-8 flex items-center justify-center bg-gray-300 text-white rounded-full'
                        >
                            <PiCaretDoubleLeftLight />
                        </button>

                        {/* Page numbers */}


                        {Array.from({ length: totalPages }, (_, index) => {

                            const pageRange = 3;
                            const startPage = Math.max(1, currentPage - pageRange);
                            const endPage = Math.min(totalPages, startPage + 2 * pageRange);

                            if (index + 1 >= startPage && index + 1 <= endPage) {
                                return (
                                    <button
                                        key={index}
                                        onClick={() => paginate(index + 1)}
                                        className={`h-8 w-8 flex items-center justify-center rounded-full ${currentPage === index + 1 ? 'bg-white' : 'bg-gray-300 text-white'
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                );
                            } else if (index + 1 === endPage + 1 && endPage !== totalPages) {
                                // Show ellipsis if there are more pages after the range
                                return (
                                    <span key={index} className="flex items-center justify-center text-gray-300">
                                        ...
                                    </span>
                                );
                            } else if (index + 1 === startPage - 1 && startPage !== 1) {

                                return (
                                    <span key={index} className="flex items-center justify-center text-gray-300">
                                        ...
                                    </span>
                                );
                            }

                            return null;
                        })}






                        {/* Next button */}
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className='h-8 w-8 flex items-center justify-center bg-gray-300 text-white rounded-full'
                        >
                            <HiOutlineChevronDoubleRight />
                        </button>
                    </div>


                </div>

            </div>





        </>
    )







}

export default Home