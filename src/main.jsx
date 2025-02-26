import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, HashRouter} from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { Na } from "./pages/na/Na.jsx"
import { Eu } from "./pages/eu/Eu.jsx"
import { Main } from "./pages/Home.jsx"
import { Error } from "./pages/Error.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
<HashRouter>


<Routes>
    <Route path="/na" element={<Na />}/>
    <Route path="/eu" element={<Eu />}/>
    <Route path="/" element={<Main />}/>
    <Route path="*" element={<Error />}/>
</Routes>   
  
  
   </HashRouter>
  </StrictMode>,
)
