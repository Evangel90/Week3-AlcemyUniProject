import './style/blockDetails.css';

function BlockDetails(props){

    return(
        <div className="bDetails">
            <table className="table">
                <tr className="tableR">
                    <td>Block hash:</td>
                    <td>{props.hash}</td>
                </tr>
                <tr>
                    <td>Number of Transaction:</td>
                    <td>{props.tnxLent}</td>
                </tr>
                <tr>
                    <td>Block number:</td>
                    <td>{props.num}</td>
                </tr>
                <tr>
                    <td>nounce:</td>
                    <td>{props.nonce}</td>
                </tr>
                <tr>
                    <td>Parent hash:</td>
                    <td>{props.phash}</td>
                </tr>
                <tr>
                    <td>Miner:</td>
                    <td>{props.miner}</td>
                </tr>
                <tr>
                    <td>Difficulty:</td>
                    <td>{props.diff}</td>
                </tr>
            </table>
        
        </div>
    )
}

export default BlockDetails;