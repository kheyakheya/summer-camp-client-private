import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { router } from './Routes/Route';
import AuthProvider from './Providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-2xl mx-auto'>
          <RouterProvider router={router} />

          </div>
        </QueryClientProvider>

      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
