import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RouterProvider } from "react-router-dom";

import route from './routes/route.jsx';
import { DndProvider } from 'react-dnd';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <DndProvider backend={HTML5Backend}>
     <RouterProvider router={route} />
    </DndProvider>
    
  </StrictMode>,
)
