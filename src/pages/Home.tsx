import React from 'react';
import { useState, useEffect } from 'react';
import apiClient from '../utils/apiClient';
import apiService from '../utils/apiService';
import { test } from './Interface';

function Test() {
    const [data, setData] = useState<test[]>([]);

    useEffect(() => {
        testget()
    }, [])

    const testget = async () => {
        const response = await apiClient.get(apiService.getTestData);
        setData(response.data.data)
    }

    return (
        <div className='App'>
            {data.map((item, index) => (
                <div key={index}>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Role: {item.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Test;
