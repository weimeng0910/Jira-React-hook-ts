module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'], // 拓展
    env: {
        // 浏览器环境中的全局变量
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    globals: {
        // 配置文件中通过globals 配置属性设置，对于每个全局变量键，将对应的值设置为 "writable"
        $: true,
        process: true,
        __dirname: true
    },
    parser: '@typescript-eslint/parser', // 解析器，本解析器支持Ts
    parserOptions: {
        // 解析器配置选项
        ecmaFeatures: {
            jsx: true,
            // lambda表达式
            arrowFunctions: true,
            // 解构赋值
            destructuring: true,
            // class
            classes: true,
            // http://es6.ruanyifeng.com/#docs/function#函数参数的默认值
            defaultParams: true,
            // 块级作用域，允许使用let const
            blockBindings: true,
            // 允许使用模块，模块内默认严格模式
            modules: true
        },
        sourceType: 'module', // 代码支持es6，使用module
        ecmaVersion: 6 // 指定es版本
    },
    plugins: ['react', 'standard', 'promise', '@typescript-eslint'], // 插件
    settings: {
        'import/ignore': ['node_modules'],
        react: {
            version: '999.999.999'
        }
    },

    rules: {
        quotes: [1, 'single', { allowTemplateLiterals: true }], //引号类型 `` "" ''
        'no-console': 0,
        'no-debugger': 1,
        'no-var': 1,
        semi: ['error', 'always'],
        'no-irregular-whitespace': 0,
        'no-trailing-spaces': 1,
        'eol-last': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-case-declarations': 0,
        'no-underscore-dangle': 0,
        'no-alert': 2,
        'no-lone-blocks': 0,
        'no-class-assign': 2,
        'no-cond-assign': 2,
        'no-const-assign': 2,
        'no-delete-var': 2,
        'no-dupe-keys': 2,
        'use-isnan': 2,
        'no-duplicate-case': 2,
        'no-dupe-args': 2,
        'no-empty': 2,
        'no-func-assign': 2,
        'no-invalid-this': 0,
        'no-redeclare': 2,
        'no-spaced-func': 2,
        'no-this-before-super': 0,
        'no-undef': 2,
        'no-return-assign': 0,
        'no-script-url': 2,
        'no-use-before-define': 2,
        'no-extra-boolean-cast': 0,
        'no-unreachable': 1,
        'comma-dangle': 2,
        'no-mixed-spaces-and-tabs': 2,
        'prefer-arrow-callback': 0,
        'arrow-parens': 0,
        'arrow-spacing': 0,
        camelcase: 0,
        'jsx-quotes': [1, 'prefer-double'],
        'react/display-name': 0,
        'react/forbid-prop-types': [
            2,
            {
                forbid: ['any']
            }
        ],
        'react/jsx-boolean-value': 0,
        'react/jsx-closing-bracket-location': 1,
        'react/jsx-curly-spacing': [
            2,
            {
                when: 'never',
                children: true
            }
        ],
        //'react/jsx-indent': ['error', 4],//如果您不使用 JSX，那么您可以禁用此规则。
        'react/jsx-key': 2,
        'react/jsx-no-bind': 0,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-literals': 0,
        'react/jsx-no-undef': 1,
        'react/jsx-pascal-case': 0,
        'react/jsx-sort-props': 0,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 2,
        'react/no-danger': 0,
        'react/no-did-mount-set-state': 0,
        'react/no-did-update-set-state': 0,
        'react/no-direct-mutation-state': 2,
        'react/no-multi-comp': 0,
        'react/no-set-state': 0,
        'react/no-unknown-property': 2,
        'react/prefer-es6-class': 2,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 0,
        'react/sort-comp': 0,
        'react/no-array-index-key': 0,
        'react/no-deprecated': 1,
        'react/jsx-equals-spacing': 2
    }
};
