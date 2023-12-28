import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/Navbar'
import { MainPage } from './components/MainPage'
import { ProjectsPage } from './components/ProjectsPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <MainPage />
    <ProjectsPage />
  </React.StrictMode>,
)
