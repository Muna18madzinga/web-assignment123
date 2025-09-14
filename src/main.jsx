import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { preloadImages, preloadModels, criticalAssets } from './utils/preloader.js'

preloadImages(criticalAssets.images);
preloadModels(criticalAssets.models);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
