import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'AA' },
  { id: '1', name: 'BB' },
  { id: '2', name: 'CC' },
]
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default userSlice.reducer
