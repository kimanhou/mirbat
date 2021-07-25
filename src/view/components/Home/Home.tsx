import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Home.scss';

const Home : React.FC = props => {
    return (
        <div className={`home content-wrapper`}>
            <Header />
            <Navigation />
            <Footer />
        </div>
    );
}

export default Home;