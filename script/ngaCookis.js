// 声明一个变量用于存储获取到的cookie
let myCookie = '';

// 定义请求头信息
const headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1',
    'Accept-Language': 'zh-cn',
    'Cookie': 'your_cookie_here'
};
alert('test')
// 发送请求获取cookie
$httpClient.get('https://ngabbs.com', {headers: headers}, function(error, response, data){
    if (error) {
        console.log('123132',error);
        $notification.post('获取cookie失败', error, '');
    } else {
        myCookie = response.headers['Set-Cookie'];
        console.log('获取到的cookie为：' + myCookie);
        $notification.post('获取cookie成功', myCookie, '');
    }
});

// 将获取到的cookie存储到本地
$persistentStore.write(myCookie, 'exampleCookie');
