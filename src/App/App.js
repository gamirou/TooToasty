import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import ToastMain from '../ToastMain';
import Navbar from '../Navbar';

// Query client for react-query
const queryClient = new QueryClient();

function App() {
    return (
        <>
            <Router>
                <div className='App w-screen h-screen'>
                    <QueryClientProvider client={queryClient}>
                        {/* <Navbar /> */}
                        <Routes>
                            <Route path="/" element={<ToastMain />} />
                        </Routes>
                    </QueryClientProvider>
                </div>
            </Router>
        </>
    );
}

export default App;
