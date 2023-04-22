import './style/header.css'

function Header(props){

    return(
        <div className="header">
            <h1>{props.name}</h1>
        </div>
    )
}

export default Header;