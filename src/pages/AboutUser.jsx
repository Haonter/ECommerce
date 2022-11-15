import React from 'react'
import NavBarAboutUser from '../components/NavBar/NavBarUserAbout'
import backgroundCart from '../media/BGCart.jpg'

const AboutUser = () => {
    return ( 
        <>
            <head>
                <title>About (Administrador)</title>
            </head>
            <div style={{ 
                backgroundImage: `url(${backgroundCart})`,
                width:'100vw', 
                height:'50.5vw', 
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100vmax' 
            }}
            >
                <NavBarAboutUser/>
                <h1 className=' mt-10 font-bold text-center'>This is the About Page</h1>
            </div>
        </>
    );
}

export default AboutUser;