import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CartSlice from './Context/CartSlice'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartSlice>

      <App />
    </CartSlice>
  </React.StrictMode>
)
