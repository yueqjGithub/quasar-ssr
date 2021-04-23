# homepage-mp (homepage-mp)

ssr模式官网移动端

## 安装指令
### 全局安装quasar-cli
```bash
npm install -g @quasar/cli
```

### 项目内安装依赖
```bash
npm install
```

### 开发模式
```bash
quasar dev -m ssr
```

### 部署说明
#### 项目安装成功后按此命令进行部署
```bash
// 执行打包命令-测试环境
npm run build:test
// 打包-生产环境
npm run build:prod
// 进入项目打包后的文件夹dist/ssr启动项目
set PORT=3007 && npm run start (windows)
export PORT=3007 && npm run start (linux)
// 配置nginx代理到指定端口
```
### 重要提示
#### 如何配置quasar分环境打包
```
// quasar 分环境打包配置，直接使用cross-env，执行dev和build时无法注入自定义变量
// 先在quasar.conf.js  build下声明env: { REQ_HOST: process.env.CUS_ENV === ‘PROD_ENV’ ? '生产host' : '测试host' // }，此处REQ_HOST为需要注入的env，CUS_ENV为执行npm命令时设定的env，
// 在package.json中设定好命令  "build:prod": "cross-env CUS_ENV=PROD_ENV quasar build"
// 执行npm run build:prod 即可看到成功打包至生产环境

```


### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
