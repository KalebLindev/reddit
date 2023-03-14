import './searchBar.css'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { filterFromSearch } from '../../slices/postsSlice/postsSlice'

const SearchBar = () => {
    const dispatch = useDispatch()

    const filterPosts = (e) => {
        const target = e.target
        const data = target.value
        // console.log(target.value)
        dispatch(filterFromSearch(data))
    }

    return (
        <div className='searchBarContainer'>
            <input placeholder='Search' className='searchBar' onChange={filterPosts}></input>
            <BsSearch className='searchBarIcon' />
        </div>
    )
}

export default SearchBar