import { createRoot } from 'react-dom/client'
import App from './App'


// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'www.google.com',
//     target: '_blank'
//   },
//   'click to visit google!',
// )
// createRoot(document.getElementById('root')).render(

//   reactElement
// )


createRoot(document.getElementById('root')).render(
  <App />
)
