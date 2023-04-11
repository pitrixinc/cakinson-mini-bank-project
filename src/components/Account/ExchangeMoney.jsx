import React from 'react';
import Navbar from './Navbar';
import Iframe from 'react-iframe';

const ExchangeMoney = () => {
  return (
    <div>
        <Navbar/>
      <div className="md:p-4 lg:p-4 p-1 sm:ml-64">
    <div className="p-4 rounded-lg ">
    <Iframe
      title="Cakinson Exchange Rates"
      src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_15c09&symbol=FX%3AEURUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=MASimple%40tv-basicstudies%2CMACD%40tv-basicstudies&theme=light&style=1&timezone=exchange"
      width="100%"
      height="500px"
      allowFullScreen={true}
      frameBorder="0"
      scrolling="no"
    />
        </div>
        </div>
        </div>
  )
}

export default ExchangeMoney;
