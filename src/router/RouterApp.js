import { CreatePage } from '../pages/CreatePage/CreatePage';
import { HomePage } from '../pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export function RouterApp(props) {
    return (
        <Router>
            {props.children}
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='/create-nft'
                    element={<CreatePage />}
                />
            </Routes>
        </Router>
    );
}
