import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter} from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { Map } from "./pages/Map.jsx"
import { Main } from "./pages/Home.jsx"
import { Error } from "./pages/Error.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
<HashRouter>


<Routes>
    <Route path="/:id" element={<Map />}/>
]    <Route path="/" element={<Main />}/>
    <Route path="*" element={<Error />}/>
    <Route path="/error" element={<Error />}/>
</Routes>   
  
  
   </HashRouter>
  </StrictMode>,
)
