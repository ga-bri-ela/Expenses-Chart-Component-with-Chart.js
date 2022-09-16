async function fetchData() {
    const url= 'data.json';
    const response = await fetch(url);
    const datapoints = await response.json();
    return datapoints;
};

const d = new Date();
let today = d.getDay();
let adjustedDay = today - 1;

const daysHover = ['hsl(10, 79%, 85%)', 'hsl(10, 79%, 85%)', 'hsl(10, 79%, 85%)','hsl(10, 79%, 85%)', 'hsl(10, 79%, 85%)','hsl(10, 79%, 85%)'];
daysHover.splice(adjustedDay, 0, 'hsl(186, 34%, 85%)');

let days = [];
let amount = [];

fetchData().then(datapoints => {

    days = datapoints.map(
        function(index){
            return index.day;
        });

    amount = datapoints.map(
        function(index){
            return index.amount;
    })

    let orangeBar = 'hsl(10, 79%, 65%)';
    let blueBar = 'hsl(186, 34%, 60%)';
    const labels = days;
    
      const data = {
        labels: labels,
        datasets: [{
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: amount,
          backgroundColor: (color) => {
            let backgroundColor = color.dataIndex === adjustedDay ? blueBar : orangeBar;
            return backgroundColor;
          },
          hoverBackgroundColor: (daysHover),
          borderSkipped: false,
          borderRadius: 5,          
        }]
      };
    
      const config = {
        type: 'bar',
        data: data,
        options: { 
            responsive: true,
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
            plugins: {
                legend: {
                    display: false
                },                
                tooltip:{
                    backgroundColor: 'hsl(25, 47%, 15%)', 
                    displayColors: false,
                    cornerRadius: 5,
                    padding: 7,
                    xAlign: 'center',
                    caretSize: 0,
                    callbacks: {
                        title : (function () {
                            return null;
                        }),
                    label: function(context) {
                            let label = context.dataset.label || '';
    
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        },
                    },
                },
            },
            
        }
      };
    
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
});   