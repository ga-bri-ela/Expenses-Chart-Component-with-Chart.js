import dataJSON from '/data.json' assert {type: 'json'};

/*
async function fetchData() {
    const url= 'data.json';
    const response = await fetch(url);
    const dataPoints = await response.json();
    return dataPoints;
}

fetchData().then(datapoints => {
    const weekData = datapoints.map(
        function(index){
            return index;
        });
    console.log(index)
    });
*/


const d = new Date();
let today = d.getDay();
let adjustedDay = today - 1;


const daysHover = ['hsl(10, 79%, 85%)', 'hsl(10, 79%, 85%)', 'hsl(10, 79%, 85%)','hsl(10, 79%, 85%)', 'hsl(10, 79%, 85%)','hsl(10, 79%, 85%)'];
daysHover.splice(adjustedDay, 0, 'hsl(186, 34%, 85%)');


window.onload = function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    let orangeBar = 'hsl(10, 79%, 65%)';
    let blueBar = 'hsl(186, 34%, 60%)';


  
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: dataJSON.map((element) => element.day),
        datasets: [{
            data: dataJSON.map((element) => element.amount),
            backgroundColor: (color) => {
              let backgroundColor = color.dataIndex === adjustedDay ? blueBar : orangeBar;
              return backgroundColor;
            },
            hoverBackgroundColor: (daysHover),
            borderSkipped: false,
            borderRadius: 5,
        }],
      },
      options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip:{
                backgroundColor: 'hsl(25, 47%, 15%)', 
                displayColors: false,
                cornerRadius: 5,
                padding: 10,
                caretSize: 0,
                callbacks: {
                    title : (function () {
                        return null;
                    }),
                },
            }
        },
        scales: {
            x: {
                title:{
                    display: true,
                },
                grid: {
                    display: false,
                    borderColor: 'white',
                },
            },
            y : {
                beginAtZero: true,
                grid: {
                    display: false,
                    borderColor: 'white',
                },
                ticks: {
                    display: false,
                },
            },
        },
      },
    });
  };