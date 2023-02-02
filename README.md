# NoticeJS

## 使用 Vercel 部署

NoticeJS 使用 Nitro 创建，你可以「零配置」的在 Vercel 上部署。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FoCoke%2FNoticeJS&build-command=npm%20run%20vercel)

## How To Use

1. 部署 NoticeJS 后，前往新建的私人仓库。
2. 修改 `notice/data.yaml` 更改公告内容。
3. 重新部署 NoticeJS。
4. 使用下方的代码将公告嵌入到你的网站中。

```html
<script src="https://s.cky.qystu.cc/npm/cky-noticejs@1/templates/client.min.js" server="https://[YOUR_DEPLOY_DOMAIN]"></script>
```
5. Done!

