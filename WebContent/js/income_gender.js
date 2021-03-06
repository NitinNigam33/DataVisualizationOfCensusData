function loadDoc4(obj) {
    //alert(123);
    //sector = document.getElementById("link").innerHTML;
    //console.log (sector);
    Gender = document.getElementById(obj.id).innerHTML;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //document.getElementById("demo").innerHTML = xhttp.responseText;
            var data1 = xhttp.responseText;
            var data2 = JSON.parse(data1);
            console.log(data2);
            var labels_all = [];
            var data_all = [];
            var temp = 0;

            //var ctx = $('#myChart');

            for (var x in data2) {
                labels_all[temp] = x;
                data_all[temp] = data2[x];
                temp++;
            }

            console.log(labels_all);

            /*var myChart = new Chart(ctx, {
             type: 'bar',
             data: {
             labels: labels_all,
             datasets: [{
             label: "Show/Hide",
             data: data_all,
             backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
             }]
             },
             options: {
             scales: {
             yAxes: [{
             ticks: {
             beginAtZero:true
             }
             }]
             }
             }
             });*/

            $('#census-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: Gender
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: labels_all,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Frequency'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y} Number of People</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                        name: 'Income (in Rupees)',
                        //data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                        data: data_all

                    },
                    /*{
                     name: 'New York',
                     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                     }, {
                     name: 'London',
                     data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                     }, {
                     name: 'Berlin',
                     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

                     }*/

                ]
            });
        }
    };
    xhttp.open("POST", "../getIncomebyGender.php", true);

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.send("Gender=" + Gender);
}   
