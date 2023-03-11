import './singleSubReddit.css'

const SingleSubReddit = (props) => {
    console.log(props)
    return (
        //^ use className of "active-reddit" when you are setting on of these subReddits to active state
        <section className='single-subreddit'>
            {props.img.includes('http')  ? <img src={props.img}/> : <img src='https://imgs.search.brave.com/r8SaAT0A4evMc0liRJ96rFUPE24EmlAI590hcOjplDI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/OTFDZFg5dnJ2cDE1/RHIxalMtOWhBSGFI/YSZwaWQ9QXBp'/>}
            <p>{props.name}</p>
        </section>
    )
}

export default SingleSubReddit

