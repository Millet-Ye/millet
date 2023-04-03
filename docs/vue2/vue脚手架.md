---
title: vue脚手架
date: 2023-04-03 14:16:27
permalink: /pages/66e25e/
categories:
  - vue2
tags:
    -
---
## vue脚手架和组件

#### 安装和配置nodejs(因为cli项目命令基于nodejs的)
  1. **安装 Node.js**(推荐一个网站：http://nodejs.cn/)    
    1.1 打开cmd 检查是否成功安装 nodejs
     + 测试 node 是否安装成功以及检查 node 版本
     >node -v 
     + 测试 npm 是否安装成功以及检查 npm 版本
     >npm -v 

  2. **安装淘宝镜像源**
     > npm install -g cnpm --registry=https://registry.npm.taobao.org

     + 2.1 查看镜像源和切换nrm
       + 2.1.1 安装nrm 命令
         >npm install -g nrm

       + 2.1.2 查看可切换的镜像源命令
          > nrm ls

       + 2.1.3 切换淘宝镜像源
         > nrm use taobao

     + 2.2 查看当前镜像源
        > npm config get registry

***

#### Vue脚手架 安装/测试/卸载
   1. **安装** (cnpm 是切换成淘宝源之后使用命令)
        > npm install -g @vue/cli   
        > cnpm install -g @vue/cli

    2. **测试**
        > vue -V（这里是大写的 V）

    3. **卸载**
        > npm uninstall -g @vue/cli

***
#### 使用脚手架创建Vue项目
  1. **创建命令**
     > vue create **项目名**
  2. **命令行操作**
     + 命令行操作：空格是选中或取消、方向键选择、A 是全选、回车是下一步
  3. **选择配置项**  
   ![Vue配置项](/img/vue2/vue脚手架%20配置项.png)
      + 3.1.1 **手动配置**
        + 这里我们选择 **Manually**(因为默认的有两项vue2和vue3项目,选择默认的会直接创建项目并自动配置,选择手动的后面需要自己配置) 
      + 3.1.2 **预配置**
        + vue-first 是我之前配置的项目格式
        + 在每次配置完项目的
   4. **Manually配置项（手动配置）**
      + 命令行操作：空格是选中或取消、方向键选择、A 是全选、回车是下一步
   ![Manually配置项](/img/vue2/Manually-配置项.png)
      + Manually-配置项-解析
      ![Manually-配置项-解析](/img/vue2/Manually-配置项解析.png)
         + Babel—用来屏蔽和解决浏览器的兼容性
         + TypeScript—脚本语言,比JS强大点
         + Progressive Web App (PWA) Support— 渐进式的web框架
         + Router vue—路由
         + Vuex
         + CSS Pre-processors—css预处理器,例如之前的less
         + Linter/Formatter—约束团队代码风格,例如规定单引号必须整个团队都是单引号风格,如果有用双引号的会直接代码报错,还有不允许多余空格,出现多余空格就报错(初学者不建议安装)
         + Unit Testing—单元测试
         + E2E Testing—E2E测试
   5. **Choose Vue version—选择要安装的vue版本号**
         ![选择版本号](/img/vue2/chooseVueVersion-选择vue版本号.png)
   6. **选择css预处理器**
         ![选择css预处理器](/img/vue2/Pick-a-CSSpre-processor-选择css预处理器.png)
   7. **选择第三方包文件的存放地址**
         ![选择第三方包文件的存放地址](/img/vue2/选择第三方包文件的存放地址.png)
   8. **选择是否将本次的配置保存为预设**
         ![选择是否将本次的配置保存为预设](/img/vue2/选择是否将本次的配置保存为预设.png)
         + Yes
            + 为预设配置命名并开始创建项目
            ![为预设配置命名](/img/vue2/为预设命名.png)
         + NO 
            + 直接创建项目，不保存本次配置
   9. **Vue项目创建成功**
         ![Vue项目创建成功](/img/vue2/vue项目创建成功.png)
***
#### 运行/使用脚手架创建的vue项目
   1. **进入到项目文件** 打开终端（cmd/PowerShell）
      + win+R进入cmd >cd 项目路径
      + shift+右击打开powershell
      + 文件地址栏输入cmd
      + 使用vscode打开 打开一个终端（快捷键:CTRL键 + ~键）
   2. **运行**
      > npm run serve
   3. **vue的项目结构**
      ![Vue的项目结构](/img/vue2/Vue%20脚手架项目的项目结构.png)
