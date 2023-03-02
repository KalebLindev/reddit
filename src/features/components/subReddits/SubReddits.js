import './subReddits.css'
import SingleSubReddit from '../singleSubReddit/SingleSubReddit'

const SubReddits = () => {
    return (
        <container className='subreddits-container'>
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
        </container>
    )
}

export default SubReddits