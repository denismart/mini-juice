import multiInput from 'rollup-plugin-multi-input';
import babel from '@rollup/plugin-babel';

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
            babel({
                babelHelpers: 'external',
                exclude: 'node_modules/**',
            }),
        ],
    },
];
