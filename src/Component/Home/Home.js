import React, { useState } from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'


const Home = () => {
    // usestate =>
    const [heading] = useState("Create account")
    const [toggle, setToggle] = useState(true)

    return (
        <>
            {
                toggle ? <Register toggleComponent={setToggle} heading={heading} />
                    :
                    <Login toggleComponent={setToggle} />
            }
        </>
    )
}

export default Home