import React from 'react';
import '../StyleSheet/Style.css';
const Card = (props) => {
    const {title, img, info, age, time} = props.data;
    console.log(props.data)
    return (
        <div className='m-left-80'>
                <div className="card b-radius border-0 card-area m-top-35">
                    <img id='card-img' src={img} alt="..." />
                   <div className='f-family m-card'>
                        <h6 className='f-weight-500 f-size-18'>{title}</h6>
                        <p className='opacity-50 f-size-15'>{info}</p>
                        <p className='f-size-16'>For Age : <span className='f-weight-500 f-size-16'>{age}</span></p>
                        <p className='f-size-16'>Time required : <span className='f-weight-500 f-size-16'>{time}s</span></p>
                        <button className='button-blue text-center'>Add to list</button>
                    </div>
               </div>  
        </div>
    );
};

export default Card;