import axios from "axios";
import React, { useEffect, createContext, useContext, useState } from "react";


const MyContext = createContext();

const MyProvider = (props) => {

    const [userListData, setuserListData] = useState([])
    const [loading, setloading] = useState(true)
    const [toggleItem, setToggleItem] = useState(true);
    const [toglegridview, settoglegridview] = useState(false)
    const [extendSidebar, setextendSidebar] = useState(false)


    //  form validation 

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        email: '',
        phoneNumber: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstNameError: '',
        lastNameError: '',
        addressError: '',
        countryError: '',
        emailError: '',
        phoneNumberError: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            formData.firstName &&
            formData.lastName &&
            formData.address &&
            formData.country &&
            formData.email &&
            formData.phoneNumber
        ) {

            alert('Form submitted:', formData);

            setFormData({
                firstName: '',
                lastName: '',
                address: '',
                country: '',
                email: '',
                phoneNumber: '',
            });
            setFormErrors({
                firstNameError: '',
                lastNameError: '',
                addressError: '',
                countryError: '',
                emailError: '',
                phoneNumberError: '',
            });
        } else {

            setFormErrors({
                firstNameError: !formData.firstName ? 'Please enter your first name' : '',
                lastNameError: !formData.lastName ? 'Please enter your last name' : '',
                addressError: !formData.address ? 'Please enter your address' : '',
                countryError: !formData.country ? 'Please enter your country' : '',
                emailError: !formData.email ? 'Please enter a valid email' : '',
                phoneNumberError: !formData.phoneNumber
                    ? 'Please enter a valid phone number'
                    : '',
            });
        }
    }



   

    const handleClose = () => {
        setShowMessageBox(false);

    };

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setuserListData(response.data);

              
                setTimeout(() => {
                    setloading(false);
                }, 5000);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        // Clean up function
        return () => clearTimeout(); 
    }, []); 


    return (
        <MyContext.Provider value={{
            loading,
            handleClose,
            userListData,
            setuserListData,
            setToggleItem,
            toggleItem,
            settoglegridview,
            toglegridview,
            extendSidebar,
            setextendSidebar,
            formData,
            formErrors,
            handleInputChange,
            handleSubmit,

        }}>
            {props.children}
        </MyContext.Provider>
    );
};


const useMyContext = () => {
    return useContext(MyContext);
};

export { MyContext, MyProvider, useMyContext };
