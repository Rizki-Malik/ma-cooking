import { useState, Suspense } from 'react'
import {
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Course from './pages/Course'
import Router from './Router'

function App() {

  return (
    <>
    <Suspense fallback={null}>
      <RouterProvider router={<Router />} />
      {/* <Admin /> */}
    </Suspense>
    </>
  )
}

export default App