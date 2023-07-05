import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/Global.scss',
                'resources/js/app.js',
                'resources/js/Home.jsx',
                'resources/js/Tracker.jsx',
                'resources/js/Navigation/Header/header-app.jsx',
                'resources/js/Navigation/Footer/Footer-app.jsx',
                
            ],
            refresh: true,
        }),
        react(),
    ],
});
