import { useContext } from "react"
import Editor from "./Pages/Editor"
import AppContextProvider, { AppContext } from "./store/AppContext"


function App() {
  return (
    <AppContextProvider>
      <Editor/>
      
    </AppContextProvider>
  )
}

export default App
