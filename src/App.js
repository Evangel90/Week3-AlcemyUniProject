import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import Form from './components/form';
import LatestBlock from './components/latestBlock';
import BlockDetails from './components/blockDetails';

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
  const [latestBlock, setLatestBlock] = useState();
  const [blkHash, setBlkHash] = useState();
  const [tnxLent, setTnxLent] = useState();
  const [tnxNonce, setTnxNonce] = useState();
  const [tnxPHash, setTnxPHash] = useState();
  const [tnxNum, setTnxNum] = useState();
  const [tnxMiner, setTnxMiner] = useState();
  const [tnxDiff, setTnxDiff] = useState();
  

  useEffect(() => {
    async function getBlockNumber() {
      setLatestBlock(await alchemy.core.getBlockNumber());
    }

    console.log(latestBlock);

    getBlockNumber();
  });

  return (


      <>
        <Header name = "Ethereum Block Explorer"/>
        <Form 
          hash={setBlkHash}
          tnxLent={setTnxLent}
          nonce={setTnxNonce}
          phash={setTnxPHash}
          num={setTnxNum}
          diff={setTnxDiff}
          miner={setTnxMiner}
        />
        <Routes>
          <Route path="/" element={<LatestBlock blockNum = {latestBlock}/>}/>
          <Route path="/block-detail" element={<BlockDetails 
                hash={blkHash}
                tnxLent={tnxLent}
                nonce={tnxNonce}
                phash={tnxPHash}
                num={tnxNum}
                diff={tnxDiff}
                miner={tnxMiner}
              />
            }
          />
        </Routes>
      </>
      
    );
}

export default App;
