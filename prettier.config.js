module.exports = {
    // 一行最多 100 字符
    printWidth: 100,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: true,
    // 末尾不需要逗号
    trailingComma: 'none',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'avoid',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'lf',

    //用来控制import输入顺序

    importOrder: [
        // 默认情况下，首先会放置外部依赖项
        '^@formily/(.*)',
        '^@(assets|components|context|hooks|lib|pages|routes|services|styles|ui|utils)/?(.*)$',
        //<THIRD_PARTY_MODULES>将第三方导入分配到适当的位置
        '<THIRD_PARTY_MODULES>',
        // 本地依赖项，样式除外
        '^./((?!scss).)*$',
        // 其他
        '^[./]'
    ],
    importOrderSeparation: true,
    importOrderParserPlugins: ['jsx', 'typescript'],
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.json', '*.yml', '*.yaml', '*.md'],
            options: {
                tabWidth: 4,
                singleAttributePerLine: true
            }
        }
    ]
};
