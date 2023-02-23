import './searchBar.css'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
    return (
        <div className='searchBarContainer'>
            <input placeholder='Search' className='searchBar'></input>
            <BsSearch className='searchBarIcon'/>
        </div>
    )
}

export default SearchBar