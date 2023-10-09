import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();
const store = configureStore({
  
});

export default store;