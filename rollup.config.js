import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
import {
  uglify
} from 'rollup-plugin-uglify'
import {
  terser
} from 'rollup-plugin-terser';
import {
  eslint
} from 'rollup-plugin-eslint';
const isDev = process.env.NODE_ENV !== 'production';
const pkg = require('./package.json')
// console.log(pkg, 'pkg');
let config = {
  input: 'src/main.js',
  output: [{
      file: `dist/${pkg.name}.amd.js`,
      format: 'amd', // ES Module
    }, {
      file: `dist/${pkg.name}.cjs.js`,
      format: 'cjs', // CommonJS
    },
    {
      file: `dist/${pkg.name}.es.js`,
      format: 'es', // ES Module
    },
    {
      file: `dist/${pkg.name}.esm-browser.js`,
      format: 'esm', // ES Module
    },
    {
      file: `dist/${pkg.name}.global.js`,
      format: 'iife',
      name: 'togeojsonWxapp',
    },
    {
      file: `dist/${pkg.name}.umd.js`,
      name: 'bundle',
      format: 'umd', // UMD
    }
  ],
  plugins: [
    resolve(), // 这样 Rollup 能找到 `ms`
    commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel({
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      runtimeHelpers: true, // 使plugin-transform-runtime生效
    }),
    !isDev && terser(),
  ]
};

export default config