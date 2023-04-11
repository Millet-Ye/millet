const sidebar = require("./utils/getSidebarData")

module.exports = {
    head: [
        // 添加百度统计
        [
            "script",
            {},
            `var _hmt = _hmt || [];
            (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?6371333d39195dbe958ef14c0a722ac4";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
            })();`
        ],
        ['link', {
            rel: 'icon',
            href: 'img/newlogo.ico'
        }],
        ['meta', {
            name: 'referrer',
            content: 'no-referrer'
        }]
    ],
    title: 'Millte的知识积累',
    base: './',
    dest: './dist',  // 设置输出目录
    description: '立志不再懒懒散散的小前端的知识库',
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        repo: 'Millet-Ye/millteknowledge', // Github仓库地址
        docsDir: 'docs', // .md文件放在了docs目录下
        editLinks: true, // 启用编辑链接
        editLinkText: '编辑',
        logo: '/img/home.jpg',
        sidebarDepth: 2,
        footer: "MIT Licensed | Copyright © 2023-present Millet",
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '前端学习',
                items: [{
                        text: '基础',
                        items: [{
                                text: 'JavaScript',
                                link: '/'
                            },
                            {
                                text: '算法&常用方法',
                                link: '/'
                            },
                            {
                                text: 'TypeScript',
                                link: '/'
                            },
                            {
                                text: 'css',
                                link: '/'
                            },
                            {
                                text: '现代JavaScript库开发',
                                link: '/'
                            }
                        ]
                    },
                    {
                        text: '框架学习',
                        items: [
                            // {text:'vue',link:'/vue/lesson1'},
                            {
                                text: 'react',
                                link: '/'
                            },
                            {
                                text: 'vuePress',
                                link: '/'
                            },
                            {
                                text: 'qiankun微前端',
                                link: '/'
                            },
                            {
                                text: 'vue2',
                                link: '/pages/66e25e/'
                            },
                            {
                                text: 'vue3',
                                link: '/'
                            },
                        ]
                    },
                    {
                        text: 'webgl学习',
                        items: [{
                            text: 'threejs',
                            link: '/'
                        }]
                    }
                ]
            },
            {
                text: '白帽子',
                items: [{
                        text: 'VM基础',
                        items: [{
                                text: 'VM的下载和安装',
                                link: '/pages/1c4297/'
                            },
                            // {text:'算法&常用方法',link:'/'},
                            // {text:'TypeScript',link:'/'},
                            // {text:'css',link:'/'},
                            // {text:'现代JavaScript库开发',link:'/'}
                        ]
                    },
                    // { 
                    //     text: '框架学习',
                    //     items:[
                    //         // {text:'vue',link:'/vue/lesson1'},
                    //         {text:'react',link:'/'},
                    //         {text:'vuePress',link:'/'},
                    //         {text:'qiankun微前端',link:'/'},
                    //         {text:'vue2',link:'/pages/66e25e/'},
                    //         {text:'vue3',link:'/'},
                    //     ]
                    // },
                    // {
                    //     text:'webgl学习',
                    //     items:[
                    //         {text:'threejs',link:'/'}
                    //     ]
                    // }
                ]
            },

            {
                text: '关于我',
                items: [{
                        text: '关于我',
                        link: '/'
                    },
                    {
                        text: '零零碎碎',
                        link: '/'
                    },
                    {
                        text: '随记',
                        link: '/'
                    },
                    {
                        text: '索引',
                        items: [{
                            text: '归档',
                            link: '/'
                        }, ]
                    },
                ]
            }
        ],
        sidebar: sidebar
    }
}