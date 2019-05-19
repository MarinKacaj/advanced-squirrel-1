var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [],
        axes: {
            data1: 'y2'
        },
        types: {
            data1: 'line',
            data2: 'bar',
            data3: 'bar'
        }
    },
    axis: {
        y2: {
            show: true,
            label: {
                text: 'Marin income',
                position: 'inner-middle'

            }
        },
        y: {
            show: true,
            label: {
                text: 'Cosmopolitan income',
                position: 'inner-middle'
            }

        }
    },
});

fetch('/.netlify/functions/shares')
  .then(function (response) {
  	return response.json();
  })
  .then(function (data) { 
  	console.log(data);
  	return data;
  })
  .then(function (data) {
  	chart.load({
  		columns: data
  	});
  });