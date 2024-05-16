import { Suspense } from 'react'
import {
  RouterProvider
} from "react-router-dom";
import Router from './Router';

function App() {

  return (
    <>
    <Suspense fallback={null}>
      <RouterProvider router={Router} />
      {/* <Admin /> */}
    </Suspense>
    </>
  )
}

export default App