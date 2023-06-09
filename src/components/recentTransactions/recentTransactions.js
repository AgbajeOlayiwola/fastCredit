import React from 'react'
import './recentTransactions.css'

const RecentTransaction = ({ transactions }) => {
  return (
    <div className="recent-transactions">
      <div className="recent-trans">
        <div className="recent-trans-head">
          <h2>Recent Transactions</h2>
          <h3>Show All</h3>
        </div>
        <div className="recent-trans-body">
          {transactions?.map((item, index) => {
            return (
              <div className="recent-trans-single" key={index}>
                <div>
                  <div className="recent-trans-img">
                    <img src={item.img} alt="item" />
                  </div>
                  <div>
                    <h2>{item.title}</h2>
                    <p className="trans-date">{item.date}</p>
                  </div>
                </div>
                <p
                  className={
                    item.profit === 'loss'
                      ? 'trans-loss'
                      : item.profit === 'gain'
                      ? 'trans-gain'
                      : null
                  }
                >
                  {item.amount}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RecentTransaction
