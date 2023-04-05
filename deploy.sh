# deploy.sh
###
 # @Descripttion: 部署命令是 bash deploy.sh
 # @Author: xx
 # @Date: 2023-4-4
### 
# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd docs/.vuepress/dist

# 提交到本地仓库
# https://github.com/Millet-Ye/millet-knowledge-master.github.io.git
git init
git add -A
git commit -m 'deploy'

# 提交到 你的项目的 gh-pages 分支
git push -f git@ghttps://github.com/Millet-Ye/millet-knowledge-master.github.io.git master:gh-pages
