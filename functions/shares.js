exports.handler = function (event, context, callback) {
	
	let dataSeries = [
		['data1', 30, 200, 100, 400, 150, 250],
		['data2', 50, 20, 10, 40, 15, 25],
		['data3', 30, 40, 50, 20, 10, 70, 30, 20, 40, 20]
	]
	
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(dataSeries)
	});
}
