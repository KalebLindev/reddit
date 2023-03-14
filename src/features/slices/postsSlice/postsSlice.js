import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const activeRedditPostsSlice = createSlice({
    name: 'activeRedditPosts',
    initialState: {
        posts: []
    },
    reducers: {
        loadActiveRedditPost: (state, action) => {
            // console.log(action.payload)
            state.posts.push(action.payload)
        },
        clearPosts: (state) => {
            state.posts = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchActiveRedditPosts.fulfilled, (state, action) => {
            // console.log(action.payload)
            //^ Using forEach to get single push values for the subReddits state array
            action.payload.forEach(each => state.posts.push(each))
        })
    }
})

export const {loadActiveRedditPost, clearPosts} = activeRedditPostsSlice.actions
export const selectActiveRedditPosts = (state) => state.activeRedditPosts
export default activeRedditPostsSlice.reducer

//^ This is an ASYNC Thunk that fetches the popular subreddits and puts them into an array for mapping into
//^     the subReddits side section on the page
export const fetchActiveRedditPosts = createAsyncThunk('fetch/activeRedditPosts', async (activeReddit) => {
    const response = await fetch(`https://www.reddit.com/r/${activeReddit}.json`)
    const jsonResponse = await response.json()
    const data = jsonResponse.data
    const dataList = data.children
    // console.log(dataList)
    const posts = dataList.map((reddit) => {
        // console.log(reddit)
        const data = reddit.data
        return {
           title: data.title,
           text: data.selftext,
           author: data.author,
           comments: data.num_comments,
           upVotes: data.ups,
           downVotes: data.downs,
           timeSince: data.created_utc,
           img: data.url,
        }
    })
    // console.log(posts)
    return posts
})