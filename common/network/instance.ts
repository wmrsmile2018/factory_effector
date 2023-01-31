import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
    // timeout: 3000,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${document.cookie}`
    },
});