import React from 'react'
import Home from './pages/Home'
import { MyProvider } from './component/store/ContextApi'

const App = () => {
  return (
     <>
<MyProvider>
<Home/>
</MyProvider>

     
     </>
  )
}

export default App