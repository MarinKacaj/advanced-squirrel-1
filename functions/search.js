exports.handler = function (event, context, callback) {
	
  let data = [
    "apple",
    "apricot",
    "avocado",
    "plum",
    "peach",
    "pear",
    "potato",
    "pineapple",
    "orange",
    "olive",
    "watermelon",
    "white mulberry"
  ];
	let searchTerm = event["queryStringParameters"]["s"];
	let results = data.filter(function (entry) {
    return entry.startsWith(entry);
  });
  
	callback(null, {
		statusCode: 200,
		body: JSON.stringify(results)
	});
}
