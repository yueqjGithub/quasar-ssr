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
// 执行打包命令
quasar build -m ssr
// 进入项目打包后的文件夹dist/ssr启动项目
set PORT=3007 && npm run start
// 配置nginx代理到指定端口
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
