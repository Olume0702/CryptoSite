import React from 'react'
import Hero from  "../assets/hero-img.png"
import './First.css'

const First = () => {
    return (
        <div className='first' >
            <div className='a'>
                <h6>
                    Buy & Sell Crypto 24/7 using your retirement account
                </h6>
                <h1>
                    Invest in <span>Cryptocurreny</span> with Your <span>IRA</span>
                </h1>
                <h6>
                    Buy, Sell, and store hundreds of cryptocurrencies
                </h6>
                <div className='a1'>
                    <input type="text" id=" input-email" placeholder='Enter your email' />
                    <button id='butt'>
                        Learn More
                    </button>
                </div>


            </div>


            <div className='b'>
                <img src={Hero} alt="hero" id='img' />
            </div>

        </div>
    )
}

export default First
