import './singleSubReddit.css'

const SingleSubReddit = (props) => {
    return (
        //^ use className of "active-reddit" when you are setting on of these subReddits to active state
        <section className='single-subreddit'>
            <img src={props.img}/>
            <p>{props.name}</p>
        </section>
    )
}

export default SingleSubReddit

