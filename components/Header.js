import React from 'react'
import Image from 'next/image'
import logo  from '../assets/logo.png'
import Search from '../assets/svg/search'
import { ConnectButton } from 'web3uikit'

const styles = {
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[20px]`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    navLink: `text-white flex mx-[10px]`,
    nav: `flex justify-center items-center gap-[20px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`,
}

const Header = () => {
  return (
    <div className={styles.header}>
        <Image src={logo} alt='logo' width={120} height={60}/>
        <div className={styles.headerWrapper}>

          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <div className={styles.navLink}>Cryptocurrencies</div>
              <div className={styles.badge}></div>
            </div>
            
            <div className={styles.navItem}>
              <div className={styles.navLink}>Exchanges</div>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>NFT</div>
              <div className={styles.badge}></div>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>Cryptown</div>
              <div className={styles.badge}></div>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>Portfolio</div>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>WatchList</div>
            </div>

            <div className={styles.navItem}>
              <div className={styles.navLink}>Products</div>
              <div className={styles.badge}></div>
            </div>

            {/* <div className={styles.navItem}>
              <div className={styles.navLink}>Learn</div>
            </div> */}

          </nav>
          <div className='flex items-center'>
            <ConnectButton/>
            <div className={styles.inputContainer}>
              <Search className='w-2px'/>
              <input className={styles.input} placeholder='Search..'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header