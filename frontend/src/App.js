import React from 'react';
import SignupForm from './pages/SignupPage';
import ThankYou from './pages/ThankYouPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SignupForm />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
