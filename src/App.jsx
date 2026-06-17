import Header from "./components/Header" 
import Links from "./components/Links"
import About from "./components/About"
import './App.css'
export default function App() {
  return (
    <div className="card">
      <Header />
      <About />
      <Links />
    </div>
  )
}