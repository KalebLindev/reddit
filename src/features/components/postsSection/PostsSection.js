import './postsSection.css'
import SinglePost from '../singlePost/SinglePost'

const PostsSection = () => {
    return (
        <section className='post-section'>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
        </section>
    )
}

export default PostsSection