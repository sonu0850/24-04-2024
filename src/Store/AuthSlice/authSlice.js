import {
  createAsyncThunk,
  createSlice,

} from "@reduxjs/toolkit";
import axios from "axios";






//This is  Function is Using for SignUp
export const signUp = createAsyncThunk("/signUp/authSlice", async (values) => {
  console.log("values signup form", values);
  try {
    const response = await axios.post(
      "http://localhost:8080/users/register",
      values
    );
    console.log("resssss", response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.response;
  }
});




// Log In
export const Login = createAsyncThunk("/signUp/authSlice", async (values) => {
  console.log("values signup form", values);
  try {
    const response = await axios.post(
      "http://localhost:8080/users/Login",
      values
    );
    console.log("resssss", response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {}
});


// Showing User Data in Table
export const tableData = createAsyncThunk("/tableData/authSlice", async (Data) => {
  console.log("table data", Data);
  return Data;
});



//Delete Data from Table
export const deleteData = createAsyncThunk("/Delete/authSlice", async (deleteData) => {
  console.log("Delete data authslice", deleteData);
  return deleteData;
});
// Delete Data from Table
export const popUpEdit = createAsyncThunk("/PopUp/authSlice", async (value) => {
  console.log("Delete data authslice", value);
  return value;
});
// Edit Single Person data
export const editSinglePerson = createAsyncThunk("/PopUp/authSlice", async (editdata) => {
  console.log("editSinglePerson", editdata );
  return editdata;
});



const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    Data: [],
    editData: [],
    Loading: false,
   isOpen: false, // New state for modal visibility
  },


  reducers: {
   
 

    openModal: (state,action) => {
      state.isOpen = true; // Set modal to open
    },
    closeModal: (state,action) => {
      state.isOpen = false; // Set modal to close
    },
  },

  extraReducers(builder) {

    
    
    //Saved Form  Data in Data State 

    builder
    .addCase(tableData.pending, (state, action) => {
        state.Loading=true
    })
    .addCase(tableData.fulfilled, (state, action) => {
        state.Data= [...state.Data,action.payload]
        state.Loading=false
    })
    .addCase(tableData.rejected, (state, action) => {
        state.Loading=false
    })

  
    //PopUp open and close on Edit Button
    .addCase(deleteData.pending, (state, action) => {
        state.Loading=true
    })
    .addCase(deleteData.fulfilled, (state, action) => {
      state.Data = action.payload;
      console.log("delete action ", action);

        state.Loading=false
    })
    .addCase(deleteData.rejected, (state, action) => {
        state.Loading=false
    })
    //Edit Single Person Data
    .addCase(editSinglePerson.pending, (state, action) => {
        state.Loading=true
    })
    .addCase(editSinglePerson.fulfilled, (state, action) => {
      state.editData= action.payload
    console.log("action edit",action.payload );

        state.Loading=false
    })
    .addCase(editSinglePerson.rejected, (state, action) => {
        state.Loading=false
    })
  
  },
});
export const { openModal, closeModal } = authSlice.actions;
export default authSlice.reducer;
