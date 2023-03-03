import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const postLogin = createAsyncThunk("postData", async(payload)=>{
    const response = await fetch("https://localhost:7097/signin" , {
        method: 'POST',
        headers: {
            'access-control-allow-origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    debugger
    return response.json();
})

export const loginCreater = createSlice({
    name: 'login',
    initialState: {
       isLoading : false,
       data : null,
       isError : false,
    },
  extraReducers: (builder) => {
        builder.addCase(postLogin.pending, (state , action) =>{
            state.isLoading = true;
        });
        builder.addCase(postLogin.fulfilled, (state , action) =>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(postLogin.rejected, (state , action) =>{
            console.log("this is an error here", action.payload)
            state.isError = true;
        });
  },
})

export default loginCreater.reducer