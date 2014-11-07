# apns-build

apns-build是一款生成iOS推送服务证书的脚本。

## how to install 

全局安装打包工具，打开你的终端Terminal，调用下面的命令即可。

	npm install -g apns-build

## Command

	apns-build cert_path key_p12_path

**参数：** 
	
cert_path    代表证书存放的路径  
key_p12_path 代表密钥存放的路径

**可选项：**

| 可选项 | 参数用途    | 参数例子  | 默认参数                |  
|-------|------------|---------|------------------------|
| -v    | 打印日志    | 无需参数  | 无输出                  |

## Usages

*  Apple开发者中心下载推送证书`cert.cer`
*  进入Keychain导出证书密钥`key.p12`
*  打开终端Terminal
*  输入`apns-build cert_path key_path`
*  输入`open node'获取所需的`cert.pem`与`key.pem` 

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com
- write by `andy` andy_ios@163.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).