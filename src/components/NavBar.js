import './NavBar.css';

const NavBar = () => {
    return(
        <>
            <ul className="nav-bar">
                <li className="nav"><a href="/"><img className="nav-icon" src="https://static.thenounproject.com/png/53631-200.png" alt="chef hat icon"/></a></li>
                <li className="nav"><a className="nav-link" href="/">Home</a></li>
                <li className="nav"><a className="nav-link" href="/about">About</a></li>
            </ul>
        </>
    )
}

export default NavBar;