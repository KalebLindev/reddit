import './postsSection.css'
import SinglePost from '../singlePost/SinglePost'
import { selectActiveRedditPosts } from '../../slices/postsSlice/postsSlice'
import { useSelector } from 'react-redux'

const PostsSection = () => {
    const { filteredPosts } = useSelector(selectActiveRedditPosts)

    return (
        <section className='post-section'>
            {filteredPosts.map((post, index) => {
                return (
                    <SinglePost title={post.title} text={post.text} img={post.img} author={post.author} timeAgo={post.timeSince} comments={post.comments} upVotes={post.upVotes} downVotes={post.downVotes} key={index}/>
                )
            })}
        </section>
    )
}

export default PostsSection