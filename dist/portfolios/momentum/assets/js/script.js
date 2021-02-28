const img_folder="assets/images/";var editableText="";const time=document.querySelector(".time"),date=document.querySelector(".date"),greeting=document.querySelector(".greeting"),name=document.querySelector(".name"),focus=document.querySelector(".focus"),btnBgPrev=document.querySelector(".btn-prev"),btnBgNext=document.querySelector(".btn-next"),btnСitation=document.querySelector(".btn-citation"),citationText=document.querySelector(".citation-text"),citationAuthor=document.querySelector(".citation-author"),bgIndex=document.querySelector('input[name="bg_index"]'),citationIndex=document.querySelector('input[name="citation_index"]'),weatherWrap=document.querySelector(".weather-wrapper"),weatherIcon=document.querySelector(".weather-icon"),weatherTemp=document.querySelector(".weather-temperature"),weatherCity=document.querySelector(".weather-city"),weatherDesc=document.querySelector(".weather-description"),weatherHumi=document.querySelector(".weather-humidity"),weatherWind=document.querySelector(".weather-wind"),onInputHide=document.querySelectorAll(".oninputhide"),showAmPm=!0;function showTime(){let e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),a=e.toLocaleDateString("ru-RU",{weekday:"long",month:"long",day:"numeric"});a=a.charAt(0).toUpperCase()+a.slice(1),time.innerHTML=`${addZero(t)}<span>:</span>${addZero(n)}<span>:</span>${addZero(r)}`,date.innerHTML=`${a}`,setTimeout(showTime,1e3)}function addZero(e){return(parseInt(e,10)<10?"0":"")+e}function setBgGreet(e=null){let t=(new Date).getHours(),n=getRandomInt(1,20);e?(index=e+parseInt(bgIndex.value),index>=21&&1==e&&(index=1),index<=1&&-1==e&&(index=20)):index=n,bgIndex.value=index,t>=0&&t<6?(preloadImage(img_folder+"night_"+index+".jpg"),greeting.textContent="Доброй ночи, ",document.body.style.color="white"):t>=6&&t<12?(preloadImage(img_folder+"morning_"+index+".jpg"),greeting.textContent="Доброе утро, "):t>=12&&t<18?(preloadImage(img_folder+"day_"+index+".jpg"),greeting.textContent="Добрый день, "):t>=18&&t<24&&(preloadImage(img_folder+"evening_"+index+".jpg"),greeting.textContent="Добрый вечер, ",document.body.style.color="white")}function getName(){null===localStorage.getItem("name")||""==localStorage.getItem("name")?name.textContent="[Введите имя]":name.textContent=localStorage.getItem("name")}function setName(e){"keypress"===e.type?13!=e.which&&13!=e.keyCode||(localStorage.setItem("name",e.target.innerText),name.blur()):localStorage.setItem("name",e.target.innerText)}function getFocus(){null===localStorage.getItem("focus")||""==localStorage.getItem("focus")?focus.textContent="[Введите задачу]":focus.textContent=localStorage.getItem("focus")}function setFocus(e){"keypress"===e.type?13!=e.which&&13!=e.keyCode||(localStorage.setItem("focus",e.target.innerText),focus.blur()):localStorage.setItem("focus",e.target.innerText)}function getCity(){null===localStorage.getItem("city")||""==localStorage.getItem("city")?(weatherCity.textContent="Самара",getWeather().then(removeCityError).catch(addCityError)):(weatherCity.textContent=localStorage.getItem("city"),getWeather(localStorage.getItem("city")).then(removeCityError).catch(addCityError))}function setCity(e){"keypress"===e.type?13!=e.which&&13!=e.keyCode||(localStorage.setItem("city",e.target.innerText),getWeather(e.target.innerText).then(removeCityError).catch(addCityError),weatherCity.blur()):(localStorage.setItem("city",e.target.innerText),""==weatherCity.innerText?(weatherCity.classList.contains("weather-city-empty")||weatherCity.classList.add("weather-city-empty"),weatherWrap.classList.remove("weather-city-error")):weatherCity.classList.remove("weather-city-empty"))}function getRandomInt(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function changeCitation(e=null){let t=getRandomInt(1,data.length);citationText.textContent="“"+data[t].citation+"”",citationAuthor.textContent=data[t].author}async function getWeather(e="Самара"){const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=7939cb42624cda47d0faac85bb835419&units=metric&lang=ru`,n=await fetch(t),r=await n.json();weatherIcon.classList.add(`owf-${r.weather[0].id}`),weatherTemp.textContent=`${parseInt(r.main.temp)}°C`,weatherDesc.textContent=r.weather[0].description,weatherCity.textContent=r.name,weatherHumi.textContent=`${parseInt(r.main.humidity)}%`,weatherWind.textContent=`${parseInt(r.wind.speed)}м/с`}function preloadImage(e){let t=new Image;t.src=e,t.onload=function(){document.body.style.backgroundImage="url('"+e+"')"}}function addCityError(){weatherWrap.classList.contains("weather-city-error")||""==weatherCity.innerText?""==weatherCity.innerText&&(weatherCity.classList.contains("weather-city-empty")||weatherCity.classList.add("weather-city-empty"),weatherWrap.classList.remove("weather-city-error")):(weatherWrap.classList.add("weather-city-error"),weatherCity.classList.remove("weather-city-empty"))}function removeCityError(){weatherWrap.classList.remove("weather-city-error"),weatherCity.classList.remove("weather-city-empty")}name.addEventListener("keypress",setName),name.addEventListener("blur",setName),focus.addEventListener("keypress",setFocus),focus.addEventListener("blur",setFocus),weatherCity.addEventListener("keypress",setCity),weatherCity.addEventListener("blur",setCity),btnBgPrev.addEventListener("click",(function(){setBgGreet(-1)})),btnBgNext.addEventListener("click",(function(){setBgGreet(1)})),btnСitation.addEventListener("click",changeCitation),onInputHide.forEach((e=>{e.addEventListener("click",(function(e){editableText=e.target.innerText,e.target.innerText=""}))})),onInputHide.forEach((e=>{e.addEventListener("blur",(function(e){""==e.target.innerText&&(e.target.innerText=editableText)}))})),showTime(),setBgGreet(),getName(),getFocus(),changeCitation(),getCity(),setInterval((()=>{setBgGreet(1)}),36e5);