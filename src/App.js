import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/header';
import BlockRow from './components/blockRow';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  return (
      // <div className="App">Block Number: {blockNumber}</div>
      <div>
        <Header name = "Ethereum Block Explorer"/>
        <div>
          <h3>Latest Blocks minned on Ethereum</h3>
          <BlockRow blockNum = {blockNumber}/>
          <BlockRow blockNum = {blockNumber-1}/>
          <BlockRow blockNum = {blockNumber-2}/>
          <BlockRow blockNum = {blockNumber-3}/>
          <BlockRow blockNum = {blockNumber-4}/>
          <BlockRow blockNum = {blockNumber-5}/>
          <BlockRow blockNum = {blockNumber-6}/>
          <BlockRow blockNum = {blockNumber-7}/>
        </div>
      </div>
      
    );
}

export default App;
