import * as Promise from 'bluebird'

export function prop(initialVal) {
	var _val = initialVal

	return function (newVal) {
		if (arguments.length !== 0) {
			_val = newVal
		}
		return _val
	}
}

export function request(opts) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest()

		xhr.open(opts.method, opts.url, true)

		if (opts.headers) {
			for (let key in opts.headers) {
				if (Object.hasOwnProperty.call(opts.headers, key)) {
					xhr.setRequestHeader(key, opts.headers[key])
				}
			}
		}

		xhr.onreadystatechange = function () {
			if (
				xhr.readyState === XMLHttpRequest.DONE
				&& xhr.status >= 200
				&& xhr.status < 400
			) {
				resolve(xhr.response)
			} else {
				reject(xhr.response)
			}
		}

		xhr.onerror = function () {
			reject('xhr error')
			throw new Error('xhr error')
		}

		xhr.send(opts.data)
	})
}
