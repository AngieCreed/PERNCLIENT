import React from 'react';
import ChemIndex from '../data/ChemIndex';
import './chem.css'

const ChemSplash = (props) => {
    return (
        <div className="chem-bg">
            <ChemIndex token={props.sessionToken} />
        </div>
    )
}

export default ChemSplash;