import { useEffect } from 'react';
import { useState } from 'react';

export const useFetchAll = (endpoint) => {
    const [champions, setChampions] = useState({});
    const [loading, setLoading] = useState(true);

    const getChampions = async (endpoint) => {
        const response = await fetch(endpoint);
        const json = await response.json();
        const result = await json;

        setTimeout(() => {
            setLoading(false);
        }, 1000);

        setChampions(result.data);
    };

    useEffect(() => {
        getChampions(endpoint);
    }, [endpoint]);

    return {
        champions,
        setChampions,
        loading
    };
};
