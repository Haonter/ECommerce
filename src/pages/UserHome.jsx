import React from 'react'
import NavBarUser from '../components/NavBar/NavBarUser';
import Exhibicion from '../components/Exhibicion';
import backgroundimg from '../media/BGCart.jpg'

const Home = () => {
    return ( 
        <>
            <head>
                <title>Home</title>
            </head>
            <div style={{ 
                backgroundImage: `url(${backgroundimg})`,
                width:'100vw', 
                height:'50.5vw', 
                backgroundRepeat: 'repeat-y',
                backgroundSize: '100vmax' 
            }}>
                <NavBarUser />
                <Exhibicion map="products" cols="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8" hiddenop="hidden" href="http://localhost:3000/about-product" />
            </div>
        </>
    );
}

export default Home;