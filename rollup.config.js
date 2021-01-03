import multiInput from 'rollup-plugin-multi-input';

export default [
    {
        input: ['src/**/*.js'],
        output: {
            format: 'cjs',
            dir: 'dist',
            exports: 'auto',
        },
        plugins: [multiInput()],
    },
];
