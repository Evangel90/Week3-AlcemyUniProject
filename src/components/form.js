import { Alchemy, Network } from 'alchemy-sdk';
import { useState } from 'react';
import{ Link } from 'react-router-dom';

import './style/form.css';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function Form (props){

    const [inputValue, setInputValue] = useState();
    
    const handleClick = async() => {
        console.log('click')
        const block = await alchemy.core.getBlockWithTransactions(inputValue[0] === "0" ? inputValue : parseInt(inputValue));
        console.log(block.transactions.length);
        props.hash(block.hash)
        props.num(block.number);
        props.tnxLent(block.transactions.length);
        props.nonce(block.nonce);
        props.phash(block.parentHash);
        props.miner(block.miner);
        props.diff(block.difficulty);
        
    }
    
    return(
        <div className='form'>
            <input className="search" placeholder="block num/transaction hash"  onInput={e => setInputValue(e.target.value)}/>
            <button className="btn" onClick={handleClick}>
                <Link to = {true ? '/block-detail' : '/'} className="btn-txt">
                    Search
                </Link>
            </button>
        </div>
    )
}

export default Form;