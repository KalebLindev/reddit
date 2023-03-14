import './navBar.css'
import { FaReddit } from 'react-icons/fa'
import SearchBar from '../searchBar/SearchBar'
import NavBarHamburger from '../navBarHamburger/NavBarHamburger'

const NavBar = () => {
    return (
        <header>
            <div className='navBar'>
                <NavBarHamburger />
                <div className='navBarLeft'>
                    <FaReddit className='navBarIcon' />
                    <p className='navBarTitle'>Reddit Clone</p>
                </div>
                <SearchBar />
            </div>
        </header>
    )
}

export default NavBar