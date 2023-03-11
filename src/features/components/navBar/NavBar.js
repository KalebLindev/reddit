import './navBar.css'
import { FaReddit } from 'react-icons/fa'
import SearchBar from '../searchBar/SearchBar'

const NavBar = () => {
    return (
        <header>
            <div className='navBar'>
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