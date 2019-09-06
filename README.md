# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress 

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 开始写作
npx vuepress dev docs