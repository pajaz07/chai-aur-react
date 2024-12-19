import React from 'react';
import { useParams } from 'react-router-dom';

export default function Parth() {
    const {userid} = useParams()
    return (
        <div>Parth : {userid}</div>
    );
}
