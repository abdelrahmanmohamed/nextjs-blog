import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link';

const Result = () => {
    const state = useSelector(state => state);

    return (
        <>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <Link href="/">Start Over</Link>
        </>
    );
};

export default (Result);