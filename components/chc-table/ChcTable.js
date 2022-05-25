import React, { useState, useContext, useEffect, useCallback} from 'react'
import btc from '../../assets/btc.png'
import { CoinHawkContext } from '../../context/context'
import ChcTableHeader from './ChcTableHeader'
import ChcTableRow from './ChcTableRow';

const ChcTable = () => {
    let { getTopTenCoins } = useContext(CoinHawkContext)
  let [coinData, setCoinData] = useState(null)

  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins()
      let filteredResponse = []

      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i]
        if (element.cmc_rank <= 10) filteredResponse.push(element)
      }

      setCoinData(filteredResponse)
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTenCoins])
    console.log(coinData)
  return (
    <div className='font-bold text-white'>
      <div className='mx-auto max-w-screen-2xl'>
        <table className='w-full'>
          <ChcTableHeader/>

          {coinData && coinData ? (
            coinData.map((coin,index) => {
              return (
                <ChcTableRow
                key= {index}
                starNum= {coin.cmc_rank}
                coinName= {coin.name}
                coinSymbol= {coin.symbol}
                coinIcon= {btc}
                showBuy={true} 
                hRate={coin.quote.USD.percent_change_24h}
                dRate={coin.quote.USD.percent_change_7d}
                hRateIsIncrement={true}
                price={coin.quote.USD.price}
                marketCapValue={coin.quote.USD.market_cap}
                volumeCryptoValue={coin.quote.USD.volume_24h}
                volumeValue={coin.total_supply}
                circulatingSupply={coin.circulating_supply}
                />
              )
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  )
}

export default ChcTable