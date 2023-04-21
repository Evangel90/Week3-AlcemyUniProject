import './blockRow.css';

function BlockRow(props){
    return(
        <div>
            <a href="#">
                <p>{props.blockNum}</p>
            </a>
        </div>
    )
}

export default BlockRow;