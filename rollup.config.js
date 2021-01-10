import multiInput from 'rollup-plugin-multi-input';
import commonjs from '@rollup/plugin-commonjs';

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
            commonjs(),
        ],
        external: [
            'eruda',
            'react-ga',
            '@vkontakte/vk-bridge',
            'konva',
            'react',
        ],
    },
];
