import React from 'react';
import "./Home.css"

//import { Button } from '@material-ui/core';


import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar';
import Body from '../Body/Body'
import Footer from '../Footer/Footer';

function Home({spotify}) {

    
    
        return (
            <div className="home">
                <Navbar spotify={spotify}/>
                <div className="home_body">
                    <Sidebar/>
                    <Body spotify={spotify}/>
                </div>
                <Footer spotify={spotify}/>               
            </div>
            
        );
    
}

export default Home