import './singlePost.css'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import { TiMessage } from 'react-icons/ti'

const SinglePost = (props) => {
    let imgCheck = props.img
    if (imgCheck.includes('jpg') || imgCheck.includes('png') || imgCheck.includes('jpeg') || imgCheck.includes('gif')) {
        imgCheck = props.img
    } else {
        imgCheck = false
    }

    const toggleVotesColor = (e) => {
        const list = e.target.closest('span').classList[0]
        const numVotes = e.target.closest('div').children[1]
        list === 'up-votes' ? numVotes.style.color = 'green' : numVotes.style.color = 'red'
    }

    const removeVotesColor = (e) => {
        e.target.closest('div').children[1].style.color = 'black'
    }

    return (
        <section className='post'>
            <div className='votes'>
                <span className='up-votes'><BiUpArrow onMouseOver={toggleVotesColor} onMouseLeave={removeVotesColor}/></span>
                <p className='num-votes'>{props.upVotes}</p>
                <span className='down-votes'><BiDownArrow onMouseOver={toggleVotesColor} onMouseLeave={removeVotesColor}/></span>
            </div>
            <div className='post-content'>
                <h2>{props.title}</h2>
                <p>{props.text ? props.text : null}</p>
                {imgCheck ? (
                    <img src={props.img}/>
                ) : null }
                <div className='border-line'/>
                <div className='post-information'>
                    <p className='author'>{props.author}</p>
                    <p className='time-ago'>{props.timeAgo} HOURS AGO</p>
                    <div className='comment-icon-section'>
                        <TiMessage className='message-icon'/>
                        <span>{props.comments}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePost