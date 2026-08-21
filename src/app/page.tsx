'use client';

import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchData = async () => {
            const response = await fetch('/api', {signal, method: 'GET'});
            const data = await response.json();
        }
        fetchData().catch((err) => {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted');
                // This is normal during cleanup, so we don't need to set an error state
            }
        });

        return () => controller.abort();
    }, []);

    return (
        <div>
            <h1>Welcome</h1>
        </div>
    );
}
