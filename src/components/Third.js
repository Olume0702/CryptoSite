import React from 'react'
import Bal from '../assets/trade.png'
import "./Third.css"
const Third = () => {
    return (
        <div className='third'>
            <div className='A'>
                <img src={Bal} alt="" id='bal' />
            </div>


            <div className='B'>
                <h3>
                    Earn passive income with crypto.</h3>
                    <p>
                    Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.
                    </p>
                    <div className='B1'>
                    <input type="text" id=" input-email" placeholder='Enter your email' />
                    <button id='butt'>
                        Learn More
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Third
