---
title: VM的安装和虚拟机的创建
date: 2023-04-05 14:10:04
permalink: /pages/1c4297/
categories:
  - 白帽子
tags:
    -
---
# VM的下载和安装 windows10
> 吐槽一下，这个官网里面找下载链接是真的恶心！ 希望你再看到这个文档的时候，方法还能用！！！
1. 下载
    * 提供一个官网网址： [vmware]([链接地址](https://www.vmware.com/))
    * 提供一个直接下载地址：[2023-4-5-vmware17](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html) 建议直接进入这个网站下载
    ![VM网页下载指定](/img/VM/VM使用提供的下载地址.png)

    * 单击进入官网或者百度搜索VMware然后找到官网
    ![VM网页下载指定](/img/VM/VM官网指引-1.png)
      - 找到搜索按钮 单击展示搜索框
      - 输入：**Download VMware Workstation Pro**
      - 回车
      <!-- VM官网指引-2.png -->
    * 进入版本选择界面 默认选择第一项 单击进入下载页面
    ![VM网页下载指定](/img/VM/VM官网指引-2.png)
    <!-- VM下载完成后的文件.png -->
    * 下载完成
     ![VM网页下载指定](/img/VM/VM下载完成后的文件.png)
  
2.卸载（没安装过的请跳过）
> 首先 我卸载之前是没有创建过虚拟机的 只因为当时拿到的VM版本不兼容 所以就卸载了
> 所以本方法 不一定能解决所有卸载问题！ 仅供参考
 + 1. 在控制面板内删除
    * 打开 控制面板>程序>程序和功能 找到VMware
    * 右击更改>进入带VMware安装向导>选择下一步
    * 进入更改、修修或者删除安装>选择删除>选择下一步
    * 进入保留VMware配置>全不保留>下一步>删除
  
  + 2.在注册表内删除
    * 按下WIN+R 输入 `regedit` > 进入注册表编辑器
    * 找到`HKEY_CURRENT_USER` > `HKEY_CURRENT_USER\SOFTWARE` > `HKEY_CURRENT_USER\SOFTWARE\VMware, Inc.`
    * 然后右击删除`VMware, Inc.`文件 
    * 删除完成

  + 3.完成以上基本不会在安装时受到影响！
  

 
3. 安装
    * 单击下载的文件
    * 后面流程如图：没有图就是选择下一步
    ![VM网页下载指定](/img/VM/安装流程-1.png)
    ![VM网页下载指定](/img/VM/安装流程-2.png)
    ![VM网页下载指定](/img/VM/安装流程-3.png)
    ![VM网页下载指定](/img/VM/安装流程-4.png)

# 解决打开虚拟机 电脑未虚拟化的问题
### 华硕飞行堡垒开启虚拟化
> 问题: 此主机支持AMD-V, 但AMD-V 处于禁用状态
1. 重启电脑时按F2进入BIOS
2. 按F7进入Advance Mode
3. 找到Advance下的SVM Mode，将Disabled改为Enabled
4. 按F10保存设置


   








     