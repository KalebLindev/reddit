import './subReddits.css'
import SingleSubReddit from '../singleSubReddit/SingleSubReddit'
import { fetchSubReddits, selectSubReddits } from '../../slices/subReddits/subRedditSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SubReddits = () => {
    const dispatch = useDispatch()
    let fetchCount = 0
    const { subReddits } = useSelector(selectSubReddits)
    
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
                {subReddits.map((each, index) => {
                    return <SingleSubReddit name={each} key={index}/>
                })}
            </section>
        </div>
    )
}

export default SubReddits