import './header.css'

function Header(props){
    return(
        <div className="header">
            <h1>{props.name}</h1>
            <input className="search" placeholder="block/transaction hash"/>
            <button className="btn">Search</button>
        </div>
    )
}

export default Header;