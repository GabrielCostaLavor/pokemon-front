import DataContextProvider from './context/dataContext'
import './index.css'
import HomePage from './page/Home'


function App() {
  return (
    <DataContextProvider>
      <HomePage />
    </DataContextProvider>
  )
}

export default App
