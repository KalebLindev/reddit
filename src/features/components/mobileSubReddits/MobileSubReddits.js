import '../subReddits/subReddits.css'
import SingleSubReddit from '../singleSubReddit/SingleSubReddit'
import { selectSubReddits } from '../../slices/subReddits/subRedditSlice'
import { useSelector } from 'react-redux'

const MobileSubReddits = () => {

    const { subReddits } = useSelector(selectSubReddits)

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
    
