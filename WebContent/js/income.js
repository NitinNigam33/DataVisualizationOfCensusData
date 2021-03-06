function loadDoc(obj) {
    //sector = document.getElementById("link").innerHTML;
    //console.log (sector);
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

            var ctx = $('#myChart');

            for (var x in data2) {
                labels_all[temp] = x;
                data_all[temp] = data2[x];
                temp++;
            }

            console.log(labels_all);

            var myChart = new Chart(ctx, {
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
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    };
    xhttp.open("POST", "../getIncome.php", true);
    xhttp.send();
}


function loadDoc2(obj) {
    //sector = document.getElementById("link").innerHTML;
    //id = '"'+obj.id+'"';
    //console.log (id);
    sector = document.getElementById(obj.id).innerHTML;
    //console.log (sector);
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

            var ctx = $('#myChart');

            for (var x in data2) {
                labels_all[temp] = x;
                data_all[temp] = data2[x];
                temp++;
            }

            console.log(labels_all);

            var myChart = new Chart(ctx, {
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
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    };
    xhttp.open("POST", "../getIncome.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("sector=" + sector);
}
