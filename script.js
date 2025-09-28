function clock() {
    //Time
    const today = new Date(); 
    
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = hours >=12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12; 

    // Add leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;

    //Date Arrays
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const weekDay = days[today.getDay()];
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    document.getElementById('weekDay').textContent = weekDay;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('year').textContent = year;  
    
}
 clock();
 setInterval(clock, 1000); //keeps the clock running every second 

 //Theme toggler

    const toggleButton = document.getElementById('switchTheme');
    toggleButton.addEventListener('click', () => {  
        document.body.classList.toggle('dark-mode');

        if  (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode';
        } else {
            toggleButton.textContent = 'Dark Mode';
        }   
    });