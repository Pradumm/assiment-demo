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

    const handlsidebarExtend = (e) => {
        console.log(e.target.id)
        if (e.target.id === "closesidemenu") {
            setextendSidebar(false);
        }
    }


    return (
        <>




            <aside class={` bg-slate-200  shadow-2xl rounded-[2rem] text-gray-700 
              fixed top-0 left-0 z-40 
               ${extendSidebar == false ? "w-[40%] lg:w-[390px] " : " w-full lg:w-[85%] grid grid-cols-2"}
                h-screen transition-transform -translate-x-full sm:translate-x-0`} aria-label="Sidebar">

                <div class="h-full lg:w-[390px] px-3 py-4 overflow-y-auto  ">
                    <ul class="space-y-2   font-medium px-7 py-14 ">


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



                                <div className='w-full text-center' id='closesidemenu' onClick={handlsidebarExtend}>
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

                <div className=' py-20 pr-5 lg:-ml-10 overflow-y-auto'>
                    <div>
                        <h1 className='text-3xl font-semibold mb-2 text-black'>Thankyou so mauch for taking the time!</h1>
                        <p className='text-base font-semibold '>please provie the below details !</p>

                        <FeedbackForm />

                    </div>



                </div>





            </aside>


            <div class=" p-3 lg:px-10 py-12 bg-slate-200 sm:ml-[40%] lg:ml-[390px]">
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
                    <div className='flex flex-wrap space-x-2'>
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