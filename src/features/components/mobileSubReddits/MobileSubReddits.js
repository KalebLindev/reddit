import '../subReddits/subReddits.css'
import SingleSubReddit from '../singleSubReddit/SingleSubReddit'
import { fetchSubReddits, selectSubReddits } from '../../slices/subReddits/subRedditSlice'
import { fetchActiveRedditPosts } from '../../slices/postsSlice/postsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MobileSubReddits = () => {
    const dispatch = useDispatch()
    let fetchCount = 0
    let postsCount = 0
    const { subReddits } = useSelector(selectSubReddits)
    
    //^ This useEffect dispatches the fetch function that API's the top 25 most popular subreddits ONE time
    useEffect(() => {
        if(fetchCount > 0) return
        dispatch(fetchSubReddits())
        fetchCount++
    }, [])

    useEffect(() => {
        if(postsCount > 0) return
        dispatch(fetchActiveRedditPosts('home'))
        postsCount++
    }, [])

    return (
        <div className='mobile-subreddits-container'>
            <section className='mobile-subreddits-section'>
                <h2>SUBREDDITS</h2>
                {subReddits.map((each, index) => {
                    return <SingleSubReddit name={each.name} img={each.img} key={index}/>
                })}
            </section>
        </div>
    )
}

export default MobileSubReddits

export const toggleModal = () => {
    const target = document.querySelector('.mobile-subreddits-container')
    target.style.display = 'block'
    setTimeout(() => {
        target.style.left = target.style.left === '15px'  ? '-350px' : '15px'
    }, 100)
    }
    
