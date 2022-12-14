import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Navigation from "./navigationReducer";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import NewBuildSelection from "./newBuildSelectionReducer";
import RenewalSelection from "./renewalSelectionReducer";
import Resources from "./resourcesReducer";
import NewBuildValues from "./NewBuildValuesReducer";
import Global from "./globalReducer";
import AdminNav from "./adminNavReducer";
import RenewalValues from "./renewalValuesReducer";


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
  adminNavigation: AdminNav,
  newBuildSidebar: NewBuildSelection,
  renewalSidebar: RenewalSelection,
  resources: Resources,
  newBuildValues: NewBuildValues,
  renewalValues: RenewalValues,
  global: Global

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