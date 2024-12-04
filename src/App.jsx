import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExploreComponent from './components/ExploreComponent'

function App() {
  const [count, setCount] = useState(0)
   const Props = {
     name: "Explorin Academy",
     count: 4,
     images: [
       {
         url: "https://th.bing.com/th/id/OIP.1pvWgC0y_SoEdtovoTEckgHaHa?w=185&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7",
         ready: true,
         error: true,
       },

       { url: "image3.jpg", ready: true, error: false },
       {
         url: "https://th.bing.com/th/id/OIP.5L3doQJIZR-zDn9vBDkdfwHaFj?rs=1&pid=ImgDetMain",
         ready: true,
         error: true ,
       },
     ],
   };

  return (
   <div>
    <ExploreComponent {...Props}/>
    </div>
  )
}

export default App
