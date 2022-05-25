import React, { useContext } from 'react'
import { CoinHawkContext } from '../../context/context'
import Image from 'next/image'
import btc from '../../assets/btc.png'
import eth from '../../assets/eth.png'
import usdc from '../../assets/usdc.png'
import usdt from '../../assets/usdt.png'
import xrp from '../../assets/xrp.png'
import cardano from '../../assets/cardano.png'
import tera from '../../assets/tera.png'
import solana from '../../assets/solana.png'
import avalanche from '../../assets/avalanche.png'
import bnb from '../../assets/bnb.png'
import binance from '../../assets/binance.png'
import doge from '../../assets/doge.png'

const styles = {
  coinNameRow: `flex items-center`,
  buyButton: `bg-[#1A1F3A] text-[#6188FF] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-50`,
}

const CoinNameRow = ({ name, icon, clicked }) => {

    const { openModal } = useContext(CoinHawkContext)

  const coinIcon = () => {
    switch(name) {
        case 'Bitcoin':
            return (
                <Image src={btc} className='rounded-full' width={30} height={30} alt='btc'/>
            )
        case 'Ethereum':
            return (
                <Image src={eth} className='rounded-full' width={30} height={30} alt='eth'/>
            )
        case 'Tether':
            return (
                <Image src={usdt} className='rounded-full' width={30} height={30} alt='usdt'/>
            )
        case 'BNB':
            return (
                <Image src={bnb} className='rounded-full' width={30} height={30} alt='bnb'/>
            )
        case 'USD Coin':
            return (
                <Image src={usdc} className='rounded-full' width={30} height={30} alt='usdc'/>
            )
        case 'XRP':
            return (
                <Image src={xrp} className='rounded-full' width={30} height={30} alt='xrp'/>
            )
        case 'Cardano':
            return (
                <Image src={cardano} className='rounded-full' width={30} height={30} alt='cardano'/>
            )
        case 'Terra':
            return (
                <Image src={tera} className='rounded-full' width={30} height={30} alt='tera'/>
            )
        case 'Solana':
            return (
                <Image src={solana} className='rounded-full' width={30} height={30} alt='solana'/>
            )
        case 'Avalanche':
            return (
                <Image src={avalanche} className='rounded-full' width={30} height={30} alt='avalanche'/>
            )
        case 'Binance USD':
          return (
              <Image src={binance} className='rounded-full' width={30} height={30} alt='binance'/>
          )
        case 'Dogecoin':
            return (
                <Image src={doge} className='rounded-full' width={30} height={30} alt='doge'/>
            )
        default:
            return (
                <Image src={btc} className='rounded-full' width={30} height={30} alt=''/>
            )
    }
  }

  return (
    <div className={styles.coinNameRow}>
        <div className='flex mr-3' onClick={clicked}>
          <div className='mr-2'>{coinIcon()}</div>
          {name}
        </div>

        <p>
          {name === 'Bitcoin' || name === 'Ethereum' || name === 'Tether' ? (
            <span className={styles.buyButton} onClick={() => openModal()}>
              Buy
            </span>
          ) : (
            <></>
          )}
        </p>
    </div>
  )
}

export default CoinNameRow