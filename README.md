# Expenses Chart Component with Chart.js

## Hi hi! 👋

This project is a solution for a challenge developed by [Frontend Mentor](https://www.frontendmentor.io). To start the challenge, we receive screenshots of the final product and some guidelines on style and expectations on the usability. The rest was up to me, what is very exciting and mildly terrifying. 🙃
I particularly enjoy completing these type of challenges as they are a great opportunity to develop my skills in a similar context to real world workflow. Once I was done, I also published it on the Frontend Mentor platform and had the chance to receive feedback from the community. Feel free to visit [my profile at Frontend Mentor]( https://www.frontendmentor.io/profile/ga-bri-ela). 

## The Challenge 🧩

According to Frontend Mentor, to complete the [Expenses Chart Component]( https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt) Challenge, the users should be able to:
-	View the bar chart and hover over the individual bars to see the correct amounts for each day
-	See the current day’s bar highlighted in a different color to the other bars
-	See hover states for all the interactive elements on the page

They have also added a bonus task that I chose to accomplish, which was:

-	See dynamically generated bars based on the data provided in the local JSON file

![screenshot of the component](https://github.com/ga-bri-ela/Expenses-Chart-Component-with-Chart.js/blob/main/expenses-%20screenshot%20one.png?raw=true)
This is how the component looks once it is opened.


![screenshot of the component with a hovering state](https://github.com/ga-bri-ela/Expenses-Chart-Component-with-Chart.js/blob/main/expenses-%20screenshot%20two.png?raw=true)
This is the component displaying an orange bar in the hover state.

## Technologies 💻

This project was built using Chart.js, JavaScript ES6, CSS and HTML.

## Personal take-aways 👩‍💻

This was a very exciting project for me as it was my first time working with a JavaScript library. Frontend mentor does not specify which technologies you are supposed to use to complete the challenge, so it was fun to have my pick on how to go about it and work with Chart.js. During the development of this component, I had to carefully go through the documentation to be able to customize all the elements on the chart that I wanted to. Customizing the tooltip was particularly time consuming, as it surprisingly had so much nuance in it. Luckily the documentation was very clear and Youtube had amazing tutorials that made the whole experience really smooth. The coding snippet below shows how I have customized the tooltip with Chart.js:
>      tooltip:{                    
>          backgroundColor: 'hsl(25, 47%, 15%)', 
>	         displayColors: false,
>	         cornerRadius: 5,
>	         padding: 7,
>	         xAlign: 'center',
>	         caretSize: 0,
>	         callbacks: {
>	             title : (function () {
>	                return null;
>	             }),
>	             label: function(context) {
>	                let label = context.dataset.label || '';
>	    
>	                if (label) {
>	                   label += ': ';
>	                }
>	                if (context.parsed.y !== null) {
>	                   label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
>	                }
>	                return label;
>	         },
>	     }, 


By taking on the bonus task proposed by Frontend Mentor and populating the chart with data from a JSON file, I also had the chance implement async JavaScript for the first time independently. To accomplish this task, I also used Fetch API. This was so challenging and got me hitting my head on the keyboard for a bit as I couldn’t get my code to work. I just couldn’t get the fetched information to populate my fields. 😵
And everything started working when I found out that all I had to do was place my code customizing the chart inside of the .then() that was following the function that fetched the data. Oops! The video that helped me understand it will be linked below. 

I am really glad I took on this challenge, it built my confidence to explore new libraries and tools. And all the struggling to figure out why my code was not working, thought me how to look for the answers I needed in a smarter way. I felt that by the end of this project something had switched in my brain about how programming works and how I can breakdown tasks more efficiently. I also find it soooo satisfying seeing the bars load once I open the browser. 😄

## Resources and Links 
-	[Chart.js](https://www.chartjs.org/) Library
-	[Chart JS](https://www.youtube.com/c/ChartJS-tutorials) YouTube Channel
-	Video Tutorial [“Fetch and Display Advanced JSON Data in Chart JS”]( https://www.youtube.com/watch?v=mw5i_QGDomw&t=949s), also known as the video that saved my sanity. 😅
