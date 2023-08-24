import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import {Auth} from "./components/Auth";

const App = () => {
    return (
        <Box width="400px" sx={{width: {xl: '1488'}}} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
            <Footer />
        </Box>
    );
};

export default App;
