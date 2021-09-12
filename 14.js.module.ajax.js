let ajax = function (options) {
    return new Promise(function (resolve, reject) {
        let method = (options.method || 'GET').toUpperCase();
        let xhr = new XMLHttpRequest();
        if (method == 'GET') {
            xhr.open('get', options.url + '?' + options.params, true)
            xhr.send(null);
        } else {
            xhr.open('post', options.url, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(options.data));
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                let status = xhr.status
                if ((status >= 200 && status < 300) || status == 304) {
                    resolve(xhr.responseText);
                } else {
                    reject(status);
                }
            }
        }
    });
}

export default ajax;