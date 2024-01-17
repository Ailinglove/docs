# 常用的git指令
## 本地已有仓库链接远程仓库
1. 连接 `git remote add origin https://github.com/xxx/xxxxxx.git`
2. 推到远程仓库 `git push --set-upstream origin main -f`

## 创建并切换到一个新的分支
`git checkout -b feat/xxx`

## 修改分支名
`git branch -m new-branch`

## 修改远程仓库地址
1. 直接命令修改
`git remote set-url origin https://github.com/xxx/xxxxxx.git`
2. 先删除后添加
```
git remote rm origin
git remote add origin https://github.com/xxx/xxxxxx.git
```

## 修改已提交commit
`git commit --amend "新的commit消息"`

## 修改历史commit
1. 当遇到历史commit中有错别字时，可进行如下操作 `git rebase HEADE~2`  
2. 此时显示的vi的读模式，按`i`则进入写模式，找到想要修改的commit记录，将`pick`改成`edit`或者`e`，先按`esc`，再按`:wq`保存退出vi。然后输入下边的指令 message后的内容就是修改后的内容`git commit --amend --message="feat: 待联调状态"`  
3. 然后  `git rebase --continue`  


