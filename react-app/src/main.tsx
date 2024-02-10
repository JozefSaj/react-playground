import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> {/*react renders each component twice* and takes the result of the second render
                      first render is used primaly for detecting and reporting potential issues with our code
                      second is used for actually update the user interface
                      only in dev mode, in production they will render only once*/}
    <App />
  </React.StrictMode>,
)
