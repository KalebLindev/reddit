import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//^ This is an ASYNC Thunk that fetches the popular subreddits and puts them into an array for mapping into
//^     the subReddits side section on the page
export const fetchSubReddits = createAsyncThunk('fetch/subReddits', async (thunkAPI) => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const jsonResponse = await response.json()
    const data = jsonResponse.data
    const dataList = data.children
    const names = dataList.map((reddit) => {
        // console.log(reddit)
        return reddit.data.subreddit
    })
    return names
})

export const subRedditsSlice = createSlice({
    name: 'allSubReddits',
    initialState: {
        subReddits: []
    },
    reducers: {
        pushSubReddit: (state, action) => {
            console.log(action.payload)
            state.subReddits.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubReddits.fulfilled, (state, action) => {
            // if(state.subReddits.some(each => each --- action.payload)) return
            console.log(action.payload)
            state.subReddits.push(action.payload)
        })
    }
})

export const pushSubReddit = subRedditsSlice.actions
export default subRedditsSlice.reducer
