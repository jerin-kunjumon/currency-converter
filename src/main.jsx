import ChakraProvider from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import ReactQueryDevTools from '@tanstack/react-query-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
        <ReactQueryDevTools initialIsOpen={false} position={"bottom-right"}></ReactQueryDevTools>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
