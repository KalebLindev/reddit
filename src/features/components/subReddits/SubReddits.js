import './subReddits.css'
import SingleSubReddit from '../singleSubReddit/SingleSubReddit'
import { fetchSubReddits } from '../../slices/subReddits/subRedditSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const SubReddits = () => {
    const dispatch = useDispatch()
    let fetchCount = 0

    //^ This useEffect dispatches the fetch function that API's the top 25 most popular subreddits ONE time
    useEffect(() => {
       if(fetchCount > 0) return
       dispatch(fetchSubReddits())
       fetchCount++
    }, [])
    
    return (
        <div className='subreddits-container'>
            <section className='subreddits-section'>
                <h2>SUBREDDITS</h2>
                <SingleSubReddit />
                <SingleSubReddit />
                <SingleSubReddit />
                <SingleSubReddit />
                <SingleSubReddit />
                <SingleSubReddit />
                <SingleSubReddit />
                <SingleSubReddit />
            </section>
        </div>
    )
}

export default SubReddits