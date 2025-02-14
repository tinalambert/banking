import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
   const loggedIn = { firstName: 'Tina', lastName: 'Is Awesome', email: 'TinaIsAwesome@awesome.com' }
  return (
    <section className='home'>
      <div className='home-content'>
         <header className='home-header'>
            <HeaderBox 
               type="greeting"
               title="Welcome"
               user={loggedIn?.firstName || 'Guest'}
               subtext="Access and manage your account and transactions efficiently."
            />
            <TotalBalanceBox 
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.35}
            />
         </header>
         RECENT TRANSACTIONS
      </div>
      <RightSidebar 
         user={loggedIn}
         transactions={[]}
         banks={[{currentBalance: 888.80}, {currentBalance: 333.30}]}
      />
    </section>
  )
}

export default Home