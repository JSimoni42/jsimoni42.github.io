import React from 'react'
import { createRoot } from 'react-dom/client'

import IndexPage from './pages'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error("Root element not found")

const root = createRoot(rootElement)
root.render(<IndexPage />)
