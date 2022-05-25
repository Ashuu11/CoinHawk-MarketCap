import React from 'react'
import Image from 'next/image'
import Rate from './chc-table/Rate'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'
import binance from '../assets/binance.png'
import doge from '../assets/doge.png'
import RateFilled from './buttons/RateFilled'
import DropdownBtn from './buttons/DropdownBtn'

const styles = {
    coinDetails: `min-h-screen text-white`,
    coinDetailsLinks: `flex mt-3 flex-wrap`,
    greyBtn: `mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl`,
    borderLeft: `ml-10 pl-5 w-full border-l border-gray-800`,
    title: `text-gray-400 whitespace-nowrap mr-2`,
    coinDetailsWrapper: `coin-details flex max-w-screen-2xl m-auto pt-20`,
    coinSymbol: `bg-slate-800 flex items-center px-2 rounded-xl`,
    coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
    coinRates: `w-full flex items-start justify-between`,
    flexBetween: `flex justify-between`,
}


const CoinDetails = ({ coinName, coinSymbol, price}) => {

    const coinIcon = () => {
        switch(coinName) {
            case 'Bitcoin':
                return (
                    <Image src={btc} className='rounded-full' width={50} height={50} alt='btc'/>
                )
            case 'Ethereum':
                return (
                    <Image src={eth} className='rounded-full' width={50} height={50} alt='eth'/>
                )
            case 'Tether':
                return (
                    <Image src={usdt} className='rounded-full' width={50} height={50} alt='usdt'/>
                )
            case 'BNB':
                return (
                    <Image src={bnb} className='rounded-full' width={50} height={50} alt='bnb'/>
                )
            case 'USD Coin':
                return (
                    <Image src={usdc} className='rounded-full' width={50} height={50} alt='usdc'/>
                )
            case 'XRP':
                return (
                    <Image src={xrp} className='rounded-full' width={50} height={50} alt='xrp'/>
                )
            case 'Cardano':
                return (
                    <Image src={cardano} className='rounded-full' width={50} height={50} alt='cardano'/>
                )
            case 'Terra':
                return (
                    <Image src={tera} className='rounded-full' width={50} height={50} alt='tera'/>
                )
            case 'Solana':
                return (
                    <Image src={solana} className='rounded-full' width={50} height={50} alt='solana'/>
                )
            case 'Avalanche':
                return (
                    <Image src={avalanche} className='rounded-full' width={50} height={50} alt='avalanche'/>
                )
            case 'Binance USD':
                return (
                    <Image src={binance} className='rounded-full' width={50} height={50} alt='binance'/>
                )
            case 'Dogecoin':
                return (
                    <Image src={doge} className='rounded-full' width={50} height={50} alt='doge'/>
                )
            default:
                return (
                    <Image src={btc} className='rounded-full' width={50} height={50} alt=''/>
                )
        }
    }
  return (
    <main className={styles.coinDetails}>
        <div>
            <div className={styles.coinDetailsWrapper}>
                <div className='flex flex-col w-fit'>
                    <div className='flex items-center ml-10'>
                        {coinIcon()}
                        &nbsp; &nbsp;
                        <div>
                            <div className='flex'>
                                <p className='text-3xl'>{coinName}</p>
                                &nbsp; &nbsp;&nbsp; &nbsp;
                                <p className={styles.coinSymbol}>{coinSymbol}</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    <div className={styles.coinDetailsLinks}>
                        <div className={styles.greyBtn}>solana.com</div>
                        <div className={styles.greyBtn}>Explorers</div>
                        <div className={styles.greyBtn}>Community</div>
                        <div className={styles.greyBtn}>Chat</div>
                        <div className={styles.greyBtn}>Source Code</div>
                        <div className={styles.greyBtn}>Whitepaper</div>
                    </div>
                    <br/>
                     &nbsp; Topics
                    <div className={[styles.coinDetailsLinks, 'topics']}>
                        <div className={styles.greyBtn}>Mineable</div>
                        <div className={styles.greyBtn}>PoW</div>
                        <div className={styles.greyBtn}>SHA-256</div>
                        <div className={styles.greyBtn}>Store of value</div>
                    </div>
                </div>

                <div className='-ml-16'>
                    <div className={styles.coinRates}>
                        <div>
                            <p className='text-gray-400'>
                                {coinName} ({coinSymbol})
                            </p>
                            <div className='flex my-3'>
                                <h1 className='text-4xl'>${price}</h1>
                                <RateFilled/>
                            </div>
                            <div className='flex items-start'>
                                <p className='text-gray-400'> 15.26 ETH</p>
                                &nbsp;&nbsp;&nbsp;
                                <Rate isIncrement={false} rate='0.53%'/>
                            </div>
                            <div className='flex items-start'>
                                <p className='text-gray-400'> 24.33 BTC</p>
                                &nbsp;&nbsp;&nbsp;
                                <Rate isIncrement={true} rate='0.99%'/>
                            </div>
                        </div>

                        <div className='flex'>
                            <DropdownBtn label='Buy' />
                            <DropdownBtn label='Exchange' />
                            <DropdownBtn label='Gaming' />
                            <DropdownBtn label='Earn Crypto' />
                        </div>
                    </div>

                    <div className={styles.coinInfo} style={{marginLeft: '5rem'}}>
                        <div>
                            <div>
                                <small className={styles.title}>Market Cap</small>
                            </div>
                            <small>$575,242,215,300</small>
                            <Rate isIncrement={true} rate='3.19%'/>
                        </div>

                        <div className={styles.borderLeft}>
                            <div>
                                <small className={styles.title}>
                                    Fully Diluted Market Cap
                                </small>
                            </div>
                            <small>$634,164,327,217</small>
                            <Rate isIncrement={true} rate='3.19%'/>
                        </div>

                        <div className={styles.borderLeft}>
                            <div>
                                <div>
                                    <small className={styles.title}>
                                        Volume &nbsp; <small className={coinSymbol}>BTC</small>
                                    </small>
                                </div>
                                <small>$19,120,444,955</small>
                                <Rate isIncrement={false} rate='27.04%'/>
                            </div>
                            <br/>
                            <div>
                                <div>
                                    <small className={styles.title}>Volume / Market Cap</small>
                                </div>
                                <small>0.03306</small>
                            </div>
                        </div>

                        <div className={styles.borderLeft}>
                            <div>
                                <div>
                                    <small className={styles.title}>Circulating Supply</small>
                                </div>
                                <small>19,046,418.00 BTC</small>
                            </div>
                            <br/>
                            <div>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <small className={styles.title}>Max Supply</small>
                                    </div>
                                    <div>
                                        <small>21,000,000</small>
                                    </div>
                                </div>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <small className={styles.title}>Total Supply</small>
                                    </div>
                                    <div>
                                        <small>19,046,418</small>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default CoinDetails