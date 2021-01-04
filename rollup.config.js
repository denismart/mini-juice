import multiInput from 'rollup-plugin-multi-input';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

export default [
    {
        input: ['src/**/*[!.test].js'],
        output: {
            format: 'cjs',
            dir: 'dist',
            exports: 'auto',
        },
        plugins: [
            multiInput(),
            replace({
                exclude: 'node_modules/**',
                'process.env.NODE_ENV': process.env.NODE_ENV || JSON.stringify('production'),
                'process.env.REACT_APP_PROD_STATUS': process.env.REACT_APP_PROD_STATUS || JSON.stringify('none'),
            }),
        ],
        external: ['react-ga'],
    },
    {
        input: ['src/**/*[!.test].js'],
        output: {
            format: 'cjs',
            dir: 'dist/min',
            exports: 'auto',
        },
        plugins: [
            multiInput(),
            replace({
                exclude: 'node_modules/**',
                'process.env.NODE_ENV': process.env.NODE_ENV || JSON.stringify('production'),
                'process.env.REACT_APP_PROD_STATUS': process.env.REACT_APP_PROD_STATUS || JSON.stringify('none'),
            }),
            babel({
                babelHelpers: 'external',
                exclude: 'node_modules/**',
            }),
            uglify(),
        ],
        external: ['react-ga'],
    },
];
