import React, { useState } from 'react'
import fire from '../assets/fire.png'
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import tera from '../assets/tera.png'
import pancake from '../assets/pancake.png'
import stepn from '../assets/stepn.png'
import gainers from "../assets/gainers.png"
import bitsubishi from '../assets/bitshubishi.png'
import metacypher from '../assets/metacypher.png'
import unitrade from '../assets/unitrade.png';
import recent from "../assets/recent.png"
import ReactSwitch from 'react-switch'
import Rate from '../components/chc-table/Rate';
import TrendingCard from './TrendingCard';

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl ml-8 mr-8`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center,`
}

const Trending = () => {

  const [checked, setChecked] = useState(false)  

  const trendingData = [
     {
        number: 1,
        symbol: "LUNA",
        name: "Terra",
        icon: tera,
        isIncrement: false,
        rate: "20.11%"
    }, {
        number: 2,
        symbol: "CAKE",
        name: "PancakeSwap",
        icon: pancake,
        isIncrement: false,
        rate: "3.35%"
    }, {
        number: 3,
        symbol: "GMT",
        name: "STEPN",
        icon: stepn,
        isIncrement: false,
        rate: "12.73%"
    },
]
  const trendingData2 = [
    {
        number: 1,
        symbol: "BITSHU",
        name: "Bitsubishi",
        icon: bitsubishi,
        isIncrement: true,
        rate: "3775.58%"
    }, {
        number: 2,
        symbol: "METAC",
        name: "Metacyber",
        icon: metacypher,
        isIncrement: true,
        rate: "3.35%"
    }, {
        number: 3,
        symbol: "TRADE",
        name: "Unitrade",
        icon: unitrade,
        isIncrement: true,
        rate: "358.85%"
    },
]

const trendingData3 = [
    {
        number: 1,
        symbol: "BTC",
        name: "Bitcoin",
        icon: btc,
        isIncrement: true,
        rate: "2.34%"
    }, {
        number: 2,
        symbol: "USDT",
        name: "Tether",
        icon: usdt,
        isIncrement: false,
        rate: "9.32%"
    }, {
        number: 1,
        symbol: "BTC",
        name: "Bitcoin",
        icon: btc,
        isIncrement: true,
        rate: "2.34%"
    },
]



  return (
    <div className='text-white'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}>Todays Cryptocurrency Prices by Hawk-Market Cap</h1>
                
                <div className='flex mr-10'>
                    <p className='text-gray-400'>Highlights &nbsp;</p>
                    <ReactSwitch checked={checked} onChange={() => {setChecked(!checked)}}/>
                </div>
            </div>
            <br/>

            <div className='flex'>
                <p className='text-gray-400'>The global crypto market cap is ₹1.24T, a &nbsp; </p>
                <span><Rate isIncrement={false} rate='4.83%'/></span>
                <p className='text-gray-400'> &nbsp; decrease over the last day. <span className='underline'>Read More</span></p>
            </div>
            <br/>

            <div className={styles.flexCenter}>
                <TrendingCard title='Trending' icon={fire} trendingData={trendingData}/>
                <TrendingCard title='Biggest Gainers' icon={gainers} trendingData={trendingData2} />
                <TrendingCard title='Recently Added' icon={recent} trendingData={trendingData3} />
            </div>
        </div>        
    </div>
  )
}

export default Trending