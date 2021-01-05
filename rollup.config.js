import multiInput from 'rollup-plugin-multi-input';
import replace from '@rollup/plugin-replace';

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
];
