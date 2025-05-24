import './App.css'
import Header from './sections/header/Header'
import Sidebar from './sections/sidebar/Sidebar'
import Main from './sections/dashboard-main/Main'

const App = () => {
  return (
    <main className='app'>
      <Header />
      <section className='section-wrapper'>
        <Sidebar />
        <Main />
      </section>
      
    </main>
  )
}

export default App