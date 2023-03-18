import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,BrowserRouter
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot><App /></RecoilRoot>
  </BrowserRouter>,
)
