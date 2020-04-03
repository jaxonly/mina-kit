# mina-kit
实用小程序工具合集

## 登录工具
[介绍文章](https://juejin.im/post/5e875e2451882573a25f1b21)
```javascript
// 引入
import { reuse } from 'mina-kit'
// or
const { reuse } = require('mina-kit')

// 使用
const requestLogin = reuse(() =>  {
    return new Promise(resolve => {
        console.log('===处理登录请求===');
        setTimeout(() => {
            console.log('===登录请求响应===');
            resolve({
                token: 'mock'
            });
        }, 1000);
    });
});

requestLogin().then(e => console.log('连续发起请求: A', e));
requestLogin().then(e => console.log('连续发起请求: B', e));

setTimeout(() => {
    requestLogin().then(e => console.log('未完成初始化请求时发起请求', e));
}, 500);

setTimeout(() => {
    requestLogin().then(e => console.log('后续发起请求A', e));
}, 2000);

```

## License

[MIT](LICENSE).
