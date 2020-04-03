export function reuse(process) {
	let store;
	let doing = false;
	let requests = [];

	function dispatch (mode, result) {
		requests.forEach((request) => {
			request[mode](result)
		});
		requests = [];
	}

	return function () {
		return new Promise(async (resolve, reject) => {
			if(store) {
				resolve(store);
				return;
			}
			requests.push({
				resolve,
				reject,
			});
			if(doing) {
				return;
			}
			doing = true;
			try {
				const processResult = await process();
				store = processResult;
				dispatch('resolve', processResult);
			} catch (e) {
				dispatch('reject', e);
			}
		})
	}
}
