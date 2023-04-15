import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../../images/dumbbell.png';
import '../StyleSheet/Style.css';
import Card from '../Card/Card';

const Home = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('workouts.json')
            .then(res => res.json())
            .then(data => setInfo(data))

    }, [])
    return (
        <div className=''>
            <div className='m-left-80 m-top-35 d-flex'>
                <img style={{ width: 50}} src={logo} alt="" />
                <div className='m-left-20'>
                    <h2 className='h1-title'>ULTRA-ACTIVE-CLUB</h2>
                </div>
           </div>
            <div className='m-left-80 mt-5'>
                <h4>Select today's exercise</h4>
            </div>
            <div className='d-grid grid-col-left-right'>
        
                   
                    <div className="d-grid grid-col-3">
                            {
                                info.map(data => <Card data={data} key={data.id}></Card>)
                            }
                    </div>

                    <div>
                        <h1>hello</h1>
                    </div>
                
            </div>
        </div>
    );
};

export default Home;