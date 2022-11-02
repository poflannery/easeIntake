import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Navigation from "./navigationReducer";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import BuildSelection from "./newBuildSelectionReducer";
// import {
//    FLUSH,
//    REHYDRATE,
//    PAUSE,
//    PERSIST,
//    PURGE,
//    REGISTER,
//  } from 'redux-persist'


const persistConfig = {
    key: "root",
    version: 1,
    storage: sessionStorage
  };

const reducer = combineReducers({
  navigation: Navigation,
  builds: BuildSelection

})

const persistedReducer = persistReducer(persistConfig,reducer)



const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export default store