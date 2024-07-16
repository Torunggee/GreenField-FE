import React from 'react';
import '../styles/Container.scss';

const Container = ({ children }) => {
    return <div className = "container">{children}</div>;
};

export default Container;