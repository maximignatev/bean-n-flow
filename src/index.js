import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider, FXProvider } from 'context'
import './assets/index.css'

import AudioRecorder from 'audio-recorder-polyfill'
import AsyncComponent from './async-comp'

window.MediaRecorder = AudioRecorder

const loadApp = import('./app')
const App = (props) => (
  <AsyncComponent lazyLoadComponent={loadApp} props={props} />
)

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <FXProvider>
        <App />
      </FXProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
