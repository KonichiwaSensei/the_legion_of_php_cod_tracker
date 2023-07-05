import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/app.js',
                'resources/js/Navigation/Header/header-app.jsx',
                'resources/js/Home.jsx',
                'resources/js/Tracker.jsx'
            ],
            refresh: true,
        }),
        react(),
    ],
});
