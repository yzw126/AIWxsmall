const CONF = {
    port: '5757',
    rootPathname: 'https://702745148.knag.xyz/phpmyadmin/',

    // 微信小程序 App ID
    appId: 'wxdd7c89795e373859',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    db: {
      client: 'mysql', //指明数据库类型，还可以是mysql，sqlite3等等
      connection: { //指明连接参数
        host: 'localhost',
        port: 3306,
        user: 'root',
        pass: 'knag.xyz',
        database: 'Agriculture',
        // char: 'utf8mb4'
      }
    },
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'Agriculture',
        pass: 'knag.xyz',
        char: 'utf8mb4'
    },
    dbName: 'online',
    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
