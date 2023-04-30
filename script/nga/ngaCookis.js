const cookieName = 'NGAcookie'

$httpClient.get('https://ngabbs.com', function(error, response, data){
    if (error) {
        $notification.post("获取NGAcookie失败", error, "")
        $done()
    } else {
        var cookie = response.headers["Set-Cookie"]
        if (cookie) {
            $persistentStore.write(cookie, cookieName)
            $notification.post("获取NGAcookie成功", "", "")
        } else {
            $notification.post("获取NGAcookie失败", "未找到cookie", "")
        }
        $done()
    }
})