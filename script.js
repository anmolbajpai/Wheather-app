var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
//apik="6c58ed24ee5cec6c40a3cfa2ccea7784";
apik = "63a90ae96d390ec37d6c1252f5a86e1a"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())


    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temparature = data['main']['temp']
            var windspeed = data['wind']['speed']

            city.innerHTML=`Weatther of <span>${nameval}<span>`
            temp.innerHTML=`Temperature: <span>${convertion(temparature)}C</s`
            description.innerHTML = `Sky Condition: <span>${descrip}</span>`
            wind.innerHTML = `wind Speed:<span>${windspeed} km/h</span>`


        })

        .catch(err => alert('You enetered wrong city name'))
       
})