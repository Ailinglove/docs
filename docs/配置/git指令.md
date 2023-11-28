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

