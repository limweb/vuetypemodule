import esmImportToUrl from 'rollup-plugin-esm-import-to-url';
import babel from 'rollup-plugin-babel';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'main.js',
    plugins: [esmImportToUrl({
        imports: {
            "vue":        "https://unpkg.com/vue@3.0.0/dist/vue.esm-browser.js",
            "vue-router": "https://unpkg.com/vue-router@4.0.0-beta.13/dist/vue-router.esm-browser.js",
            "vuex":       "https://unpkg.com/vuex@4.0.0-beta.4/dist/vuex.esm-browser.js"
        },
    }),
    minifyHTML(),
    babel(),
    uglify()
    ],
    output: {
        dir: './dist',
        format: 'es',
    }
};