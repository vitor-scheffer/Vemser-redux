import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Video from './components/Video'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <SideBar />
      </Provider>
    </div>
  )
}

export default App
