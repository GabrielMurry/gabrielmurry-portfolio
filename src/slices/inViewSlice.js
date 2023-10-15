import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInViewHome: false,
  isInViewAbout: false,
  isInViewSkills: false,
  isInViewProjects: false,
  isInViewContact: false,
};

export const inViewSlice = createSlice({
  name: "inView",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    inViewTrue: (state, action) => {
      if (action.payload === "Home") {
        state.isInViewHome = true;
      } else if (action.payload === "About") {
        state.isInViewAbout = true;
      } else if (action.payload === "Skills") {
        state.isInViewSkills = true;
      } else if (action.payload === "Projects") {
        state.isInViewProjects = true;
      } else {
        state.isInViewContact = true;
      }
    },
    inViewFalse: (state, action) => {
      if (action.payload === "Home") {
        state.isInViewHome = false;
      } else if (action.payload === "About") {
        state.isInViewAbout = false;
      } else if (action.payload === "Skills") {
        state.isInViewSkills = false;
      } else if (action.payload === "Projects") {
        state.isInViewProjects = false;
      } else {
        state.isInViewContact = false;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { inViewTrue, inViewFalse, incrementByAmount } =
  inViewSlice.actions;

// Selector
export const selectIsInViewHome = (state) => state.inView.isInViewHome;
export const selectIsInViewAbout = (state) => state.inView.isInViewAbout;
export const selectIsInViewSkills = (state) => state.inView.isInViewSkills;
export const selectIsInViewProjects = (state) => state.inView.isInViewProjects;
export const selectIsInViewContact = (state) => state.inView.isInViewContact;

export default inViewSlice.reducer;
