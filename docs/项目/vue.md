# 生成一个快速生成h5的项目

## 背景

组内日常工作是开发一些h5页面，通常情况下，每来一个需求就用vue新创建一个项目，比较麻烦。目的，创建一个项目，新需求时只需要运行指令npm run create即可快速生成一个页面

## 思路

1. npm create vue@leates  创建一个项目
2. 一个项目的结构如下图所示，那么运行指令的时候需要生成这些文件
 ![Alt text](image.png)

3. 交互

- 通过`inquirer` 实现命令行的交互

```javascript
inquirer
  .prompt([
    {
      type: 'input',
      message:'请输入项目名称' ,
      name: 'pageName',
      validate: (pageName)=>{
        if(!pageName){
          errorLog('\n请输入页面文件夹名');
          return false
        }
        return true
      }
    },
    {
      type: 'confirm',
      message: '是否使用 router',
      name: 'isUseRouter',
    }
  ]).then(answer=>{
    ...
  })

```

- 接收 inquirer 输入的answers，根据answers开始生成项目
    - 生成项目的目录
    - 生成main.js
    - 生成App.vue
    - 生成其他目录文件
    - 特殊文件生成
![Alt text](image-1.png)
- 通过 `chalk`实现命令行的打印


