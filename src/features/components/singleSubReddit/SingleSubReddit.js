import './singleSubReddit.css'
import { useDispatch } from 'react-redux'
import { fetchActiveRedditPosts, clearPosts } from '../../slices/postsSlice/postsSlice'

const SingleSubReddit = (props) => {
    // console.log(props)
    const dispatch = useDispatch()

    const loadReddit = (e) => {
        // console.log('...loading new reddit posts')
        const target = e.target.closest('section')
        const allDivs = target.parentElement.children
        const allChildren = [...allDivs]
        
        dispatch(clearPosts())

        allChildren.forEach(each => {
            // console.log(each, 'remove')
            each.classList.remove('active-reddit')
        })

        dispatch(fetchActiveRedditPosts(props.name))
        // console.log(`adding class to ${e.target.innerHTML}`)
        target.classList.add('active-reddit')

    }

    if(props.name === 'Home') {
        return (
            //^ use className of "active-reddit" when you are setting on of these subReddits to active state
            <section className='single-subreddit active-reddit' onClick={loadReddit}>
                {props.img.includes('http')  ? <img src={props.img}/> : <img src='https://imgs.search.brave.com/r8SaAT0A4evMc0liRJ96rFUPE24EmlAI590hcOjplDI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/OTFDZFg5dnJ2cDE1/RHIxalMtOWhBSGFI/YSZwaWQ9QXBp'/>}
                <p>{props.name}</p>
            </section>
        )
    }

    return (
        //^ use className of "active-reddit" when you are setting on of these subReddits to active state
        <section className='single-subreddit' onClick={loadReddit}>
            {props.img.includes('http')  ? <img src={props.img}/> : <img src='https://imgs.search.brave.com/r8SaAT0A4evMc0liRJ96rFUPE24EmlAI590hcOjplDI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/OTFDZFg5dnJ2cDE1/RHIxalMtOWhBSGFI/YSZwaWQ9QXBp'/>}
            <p>{props.name}</p>
        </section>
    )
}

export default SingleSubReddit

