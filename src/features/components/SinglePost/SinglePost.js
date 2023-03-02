import './singlePost.css'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import { TiMessage } from 'react-icons/ti'

const SinglePost = () => {
    return (
        <section className='post'>
            <div className='votes'>
                <BiUpArrow />
                <p>23.4k</p>
                <BiDownArrow />
            </div>
            <div className='post-content'>
                <h2>First-Time Home BuyerFirst-Time Home BuyerFirst-Time Home BuyerFirst-Time Home BuyerFirst-Time Home BuyerFirst-Time Home BuyerFirst-Time Home BuyerFirst-Time Home BuyerFirst-Time Home BuyerFirst-Time Home Buyer</h2>
                <div className='border-line'/>
                <div className='post-information'>
                    <p>USERNAME</p>
                    <p>3 HOURS AGO</p>
                    <div className='comment-icon-section'>
                        <TiMessage className='message-icon'/>
                        <span>1235</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePost