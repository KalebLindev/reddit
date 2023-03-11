import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const subRedditsSlice = createSlice({
    name: 'allSubReddits',
    initialState: {
        subReddits: []
    },
    reducers: {
        pushSubReddit: (state, action) => {
            // console.log(action.payload)
            state.subReddits.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubReddits.fulfilled, (state, action) => {
            // console.log(action.payload)
            //^ Using forEach to get single push values for the subReddits state array
            action.payload.forEach(each => state.subReddits.push(each))
        })
    }
})

export const pushSubReddit = subRedditsSlice.actions
export const selectSubReddits = (state) => state.allSubReddits
export default subRedditsSlice.reducer

//^ This is an ASYNC Thunk that fetches the popular subreddits and puts them into an array for mapping into
//^     the subReddits side section on the page
export const fetchSubReddits = createAsyncThunk('fetch/subReddits', async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json')
    const jsonResponse = await response.json()
    const data = jsonResponse.data
    const dataList = data.children
    const names = dataList.map((reddit) => {
        // console.log(reddit)
        return {
            'name': reddit.data.subreddit,
            'img': reddit.data.thumbnail
        }
    })
    return names
})