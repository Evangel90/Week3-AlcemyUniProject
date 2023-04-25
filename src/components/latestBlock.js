import './style/latesBlock.css';

function LatestBlock(props){
    return(
        <div className='block'>
            <p className='lmb'>Latest Minned Block :</p>
            <p className='bNum'>{props.blockNum}</p>
        </div>
    )
}

export default LatestBlock;