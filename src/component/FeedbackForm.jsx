import React from 'react'
import { useMyContext } from './store/ContextApi'

const FeedbackForm = () => {

    const { formData, formErrors, handleInputChange, handleSubmit } = useMyContext()
    return (
        <>

            <form className='py-10' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-2 '>
                    <label className='text-base mb-2' htmlFor='firstName'>
                        First Name:
                    </label>
                    <input
                        placeholder='John'
                        className='bg-white px-4 py-2 rounded-lg shadow w-full sm:w-80'
                        type='text'
                        name='firstName'
                        id='firstName'
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    {formErrors.firstNameError && <p className='text-red-500'>{formErrors.firstNameError}</p>}
                </div>

                <div className='flex flex-col mb-3 '>
                    <label className='text-base mb-2' htmlFor='lastName'>
                        Last Name:
                    </label>
                    <input
                        placeholder='Joe'
                        className='bg-white px-4 py-2 rounded-lg shadow w-full sm:w-80'
                        type='text'
                        name='lastName'
                        id='lastName'
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    {formErrors.lastNameError && <p className='text-red-500'>{formErrors.lastNameError}</p>}
                </div>

                <div className='flex flex-col mb-3 '>
                    <label className='text-base mb-2' htmlFor='address'>
                        Address:
                    </label>
                    <textarea
                        id='address'
                        rows='4'
                        className='block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Write your address here...'
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                    ></textarea>
                    {formErrors.addressError && <p className='text-red-500'>{formErrors.addressError}</p>}
                </div>

                <div className='flex flex-col mb-3 relative '>
                    <label className='text-base mb-2' htmlFor='country'>
                        Country:
                    </label>
                    <input
                        placeholder='India'
                        className='bg-white px-4 py-2 rounded-lg shadow w-full sm:w-96'
                        type='text'
                        name='country'
                        id='country'
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                    <svg
                        className='absolute right-52 top-10 text-gray-400 w-6 h-6 pointer-events-none'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                        />
                    </svg>
                    {formErrors.countryError && <p className='text-red-500'>{formErrors.countryError}</p>}
                </div>

                <div className='flex flex-col mb-3 '>
                    <label className='text-base mb-2' htmlFor='email'>
                        Email ID:
                    </label>
                    <input
                        placeholder='example@gmail.com'
                        className='bg-white px-4 py-2 rounded-lg shadow w-full sm:w-80'
                        type='text'
                        name='email'
                        id='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {formErrors.emailError && <p className='text-red-500'>{formErrors.emailError}</p>}
                </div>

                <div className='flex flex-col mb-3 '>
                    <label className='text-base mb-2' htmlFor='phoneNumber'>
                        Phone Number:
                    </label>
                    <div className='flex flex-wrap gap-2 items-center'>
                        <p className='px-2 py-2 bg-white rounded'>+91</p>
                        <input
                            placeholder='Enter your phone number'
                            className='bg-white px-4 py-2 rounded-lg shadow w-full sm:w-60'
                            type='text'
                            name='phoneNumber'
                            id='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.phoneNumberError && <p className='text-red-500'>{formErrors.phoneNumberError}</p>}
                </div>

                <button className='px-6 sm:w-56 text-white capitalize text-lg font-bold py-3 rounded-lg mt-5 bg-green-400'>
                    Submit feedback
                </button>
            </form>

        </>
    )
}

export default FeedbackForm