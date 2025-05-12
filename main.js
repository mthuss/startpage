// Cant import files locally for some reason so here's the full json i guess
const weatherCodes = {
	"0":{
		"day":{
			"description":"Sunny",
			"image":"wi-day-sunny"
		},
		"night":{
			"description":"Clear",
			"image":"wi-night-clear"
		}
	},
	"1":{
		"day":{
			"description":"Mainly Sunny",
			"image":"wi-day-cloudy"
		},
		"night":{
			"description":"Mainly Clear",
			"image":"wi-night-alt-cloudy"
		}
	},
	"2":{
		"day":{
			"description":"Partly Cloudy",
			"image":"wi-day-cloudy"
		},
		"night":{
			"description":"Partly Cloudy",
			"image":"wi-night-alt-cloudy"
		}
	},
	"3":{
		"day":{
			"description":"Cloudy",
			"image":"wi-cloud"
		},
		"night":{
			"description":"Cloudy",
			"image":"wi-cloud"
		}
	},
	"45":{
		"day":{
			"description":"Foggy",
			"image":"wi-fog"
		},
		"night":{
			"description":"Foggy",
			"image":"wi-fog"
		}
	},
	"48":{
		"day":{
			"description":"Rime Fog",
			"image":"wi-fog"
		},
		"night":{
			"description":"Rime Fog",
			"image":"wi-fog"
		}
	},
	"51":{
		"day":{
			"description":"Light Drizzle",
			"image":"wi-showers"
		},
		"night":{
			"description":"Light Drizzle",
			"image":"wi-showers"
		}
	},
	"53":{
		"day":{
			"description":"Drizzle",
			"image":"wi-showers"
		},
		"night":{
			"description":"Drizzle",
			"image":"wi-showers"
		}
	},
	"55":{
		"day":{
			"description":"Heavy Drizzle",
			"image":"wi-showers"
		},
		"night":{
			"description":"Heavy Drizzle",
			"image":"wi-showers"
		}
	},
	"56":{
		"day":{
			"description":"Light Freezing Drizzle",
			"image":"wi-showers"
		},
		"night":{
			"description":"Light Freezing Drizzle",
			"image":"wi-showers"
		}
	},
	"57":{
		"day":{
			"description":"Freezing Drizzle",
			"image":"wi-showers"
		},
		"night":{
			"description":"Freezing Drizzle",
			"image":"wi-showers"
		}
	},
	"61":{
		"day":{
			"description":"Light Rain",
			"image":"wi-day-showers"
		},
		"night":{
			"description":"Light Rain",
			"image":"wi-night-alt-showers"
		}
	},
	"63":{
		"day":{
			"description":"Rain",
			"image":"wi-day-rain"
		},
		"night":{
			"description":"Rain",
			"image":"wi-night-alt-rain"
		}
	},
	"65":{
		"day":{
			"description":"Heavy Rain",
			"image":"wi-day-rain"
		},
		"night":{
			"description":"Heavy Rain",
			"image":"wi-night-alt-rain"
		}
	},
	"66":{
		"day":{
			"description":"Light Freezing Rain",
			"image":"wi-day-hail"
		},
		"night":{
			"description":"Light Freezing Rain",
			"image":"wi-night-alt-hail"
		}
	},
	"67":{
		"day":{
			"description":"Freezing Rain",
			"image":"wi-day-hail"
		},
		"night":{
			"description":"Freezing Rain",
			"image":"wi-night-alt-hail"
		}
	},
	"71":{
		"day":{
			"description":"Light Snow",
			"image":"wi-day-snow"
		},
		"night":{
			"description":"Light Snow",
			"image":"wi-night-alt-snow"
		}
	},
	"73":{
		"day":{
			"description":"Snow",
			"image":"wi-day-snow"
		},
		"night":{
			"description":"Snow",
			"image":"wi-night-alt-snow"
		}
	},
	"75":{
		"day":{
			"description":"Heavy Snow",
			"image":"wi-day-snow"
		},
		"night":{
			"description":"Heavy Snow",
			"image":"wi-night-alt-snow"
		}
	},
	"77":{
		"day":{
			"description":"Snow Grains",
			"image":"wi-day-snow"
		},
		"night":{
			"description":"Snow Grains",
			"image":"wi-night-alt-snow"
		}
	},
	"80":{
		"day":{
			"description":"Light Showers",
			"image":"wi-showers"
		},
		"night":{
			"description":"Light Showers",
			"image":"wi-showers"
		}
	},
	"81":{
		"day":{
			"description":"Showers",
			"image":"wi-showers"
		},
		"night":{
			"description":"Showers",
			"image":"wi-showers"
		}
	},
	"82":{
		"day":{
			"description":"Heavy Showers",
			"image":"wi-showers"
		},
		"night":{
			"description":"Heavy Showers",
			"image":"wi-showers"
		}
	},
	"85":{
		"day":{
			"description":"Light Snow Showers",
			"image":"wi-day-snow"
		},
		"night":{
			"description":"Light Snow Showers",
			"image":"wi-night-alt-snow"
		}
	},
	"86":{
		"day":{
			"description":"Snow Showers",
			"image":"wi-day-snow"
		},
		"night":{
			"description":"Snow Showers",
			"image":"wi-night-alt-snow"
		}
	},
	"95":{
		"day":{
			"description":"Thunderstorm",
			"image":"wi-day-thunderstorm"
		},
		"night":{
			"description":"Thunderstorm",
			"image":"wi-night-alt-thunderstorm"
		}
	},
	"96":{
		"day":{
			"description":"Light Thunderstorms With Hail",
			"image":"wi-day-thunderstorm"
		},
		"night":{
			"description":"Light Thunderstorms With Hail",
			"image":"wi-night-alt-thunderstorm"
		}
	},
	"99":{
		"day":{
			"description":"Thunderstorm With Hail",
			"image":"wi-day-thunderstorm"
		},
		"night":{
			"description":"Thunderstorm With Hail",
			"image":"wi-night-alt-thunderstorm"
		}
	}
}

const user = 'nanashi'
var daytime = "day"; //Day period for misc use

//Intervals for updating the widgets
const clockInterval = 100 //in ms
const weatherInterval = 30000 //in ms

// replace X Y and Z with your corresponding info
const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=XXXX&longitude=YYYY&current=temperature_2m,weather_code&timezone=ZZZZ"
const timezone = -3 //my timezone (UTC-3)

let clockElement = document.getElementById("clock")
let dateElement = document.getElementById("date")
// let greetingElement = document.getElementById("greeting-text")

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekdays = ["日","月","火","水","木","金","土"]

//Zero-pad numbers < 10
function padded(v){
    return v < 10 ? "0" + v : v
}

function getDatetime () {
    const dt = new Date()
    let [day, month, year] = [dt.getDate(),dt.getMonth(),dt.getFullYear()]
    let [s,m,h] = [dt.getSeconds(), dt.getMinutes(), dt.getHours()]

    let timeZoneOffset = dt.getTimezoneOffset()/60 + timezone
    //Account for timezone calculations when hour changes to 00:00
    if(h < Math.abs(timeZoneOffset))
        h = h + 24 + timeZoneOffset
    else
        h = h + timeZoneOffset

    //Get day of the week
    let dotw = dt.getDay()

    // Define periods for use in other functions
    var period = "day" //Default period day for greeting
    daytime = "day" //Default daytime value
    if(h >= 12 && h < 19)
        period = "evening"
    else if((h >= 19 && h <= 24) || (h >= 0 && h < 5))
    {
        period = "night"
        daytime = "night"
    }
    else
        period = "morning"

    //MM DD, YYYY | HH:MM:SS
    // return {"date": months[month] + " " + (day < 10 ? "0" + day : day) + ", " + year, "time": `${h < 10 ? "0"+h : h}:${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`, "period": period, "dotw": dotw}

    //MM DD, YYYY | HH:MM
    // return {"date": months[month] + " " + (day < 10 ? "0" + day : day) + ", " + year, "time": `${h < 10 ? "0"+h : h}:${m < 10 ? '0'+m : m}`, "period": period, "dotw": dotw}

    //MM月DD日(dotw) | HH:MM
    return {"date": (padded(month+1)) + "月" + padded(day) + "日", "time": `${padded(h)}:${padded(m)}`, "period": period, "dotw": dotw}
}

function setDatetime()
{
    let dateTime = getDatetime()
    clockElement.innerText = dateTime['time']
    dateElement.innerText = dateTime['date'] + '('+weekdays[dateTime['dotw']] +')'
    // greetingElement.innerText = "Good " + dateTime['period'] + ", " + username + "."

}

async function getWeather(){
    try{
        const weather_json = await fetch(weatherUrl).then(response=>response.json())
        return {'temp': weather_json['current']['temperature_2m'], 'type': weather_json['current']['weather_code']}
    }
    catch(error){
        console.error(error)
    }
}

async function showWeather(){
    const weather = await getWeather()
    let weather_code = weatherCodes[weather['type']][daytime]
    let html = '<span>' + Math.round(weather['temp']) + 'ºC</span>' + '<i id="weather-icon" style="margin-left:8px"></i>'
    let tempElement = document.getElementById('temperature')
    tempElement.innerHTML = html
    document.getElementById('weather-icon').classList.add("wi")
    document.getElementById('weather-icon').classList.add(weather_code['image'])
    document.getElementById('weather-icon').title=weather_code['description']
    tempElement.style.display="flex"
    document.getElementById('separator').style.display="inherit"
}

showWeather()
setInterval(() => {setDatetime()}, clockInterval)
setInterval(() => {showWeather()}, weatherInterval)

//                 Red       Green      Yellow      Blue      Purple      Aqua
const colors = ["#fb4943", "#b8bb26", "#fadb2f", "#83a598", "#d3869b", "#8ec07c"]
// Asterisks (*) come before the letter that's going to be highlighted (as it is the one used for the shortcut)
const list_of_websites = [{'name': "*Backloggd", 'url': 'https://backloggd.com'}, {'name': "Wi*kipedia", 'url': 'https://wikipedia.org'}, {'name': "*RateYourMusic", 'url': 'https://rateyourmusic.com' }, {'name': "*MyAnimeList", 'url': 'https://myanimelist.net' }, {'name': "*Letterboxd", 'url': 'https://letterboxd.com' }, {'name': "*YouTube", 'url': 'https://youtube.com'},{'name': "4*Chan", 'url': 'https://4chan.org'},{'name': "*Goodreads", 'url': 'https://goodreads.com'},{'name': "*WhatsApp", 'url': 'https://web.whatsapp.com'},{'name': "*AniList", 'url': 'https://anilist.co'}, {'name': "*Startpage", 'url': "https://startpage.com"}]
function parseHighlight(arr){
    // sort the array disregarding the asterisks but keeping the asterisks in the resulting array
    const sorted_arr = arr.sort((a,b)=>{
        a2 = a['name'].replace(/\*/g,"")
        b2 = b['name'].replace(/\*/g,"")
        console.log(a2,b2)
        return a2.localeCompare(b2, undefined, {numeric: true})
    })

    // shuffle the color array
    const shuffled_colors = colors.sort(() => Math.random() - .5)

    // Go over each item and highlight the letter following the asterisk (*)
    var count = -1
    const spanned = list_of_websites.map(site => {
        sitename = site['name']
        url = site['url']
        let idx = sitename.indexOf("*") + 1
        count++
        if(count > shuffled_colors.length-1)
            count = 0
        return (`<li><a href="${url}">` + sitename.substring(0, idx) + `<span style="color:${shuffled_colors[count]}">` + sitename[idx] + '</span>' + sitename.substring(idx+1) + '</a></li>').replace(/\*/g,"")
    })
    // Add shortcuts to the ul
    const listElement = document.getElementById('shortcuts')
    spanned.forEach(li => listElement.innerHTML += li)
}
    
// Run the function to actually show it in the document
parseHighlight(list_of_websites);

let searchBarElement = document.getElementById('search-bar')
let searchFormElement = document.getElementById('search-form')

window.handleBackloggd = function(e) {
    e.preventDefault(); //is what made this shit work
    window.open("https://backloggd.com/search/games/" + searchBarElement.value, "_self")
}
window.handle4Chan = function(e){
    e.preventDefault();
    window.open(`https://4chan.org/${searchBarElement.value}/`, "_self")
}
window.handleLetterboxd = function(e){
    e.preventDefault();
    window.open(`https://letterboxd.com/search/${searchBarElement.value}`, "_self")
}

var typing = false
function handleOnBlur(){
    typing = false
    searchFormElement.removeEventListener("submit", handleBackloggd)
    searchFormElement.removeEventListener("submit", handle4Chan)
    searchFormElement.removeEventListener("submit", handleLetterboxd)
    console.log("not typing")
}

function handleOnFocus(){
	typing = true
}
searchBarElement.addEventListener("blur", handleOnBlur)
searchBarElement.addEventListener("focus", handleOnFocus)
var mode = 's'
var prevmode = 's'

// Keypress event listener for shortcuts
document.addEventListener("keyup", e => {
    e.preventDefault()
    if(e.code == "Escape"){
        searchBarElement.blur()
        typing = false
    }
    if(!typing){
        // lower case - search in website
        if(e.key == "s"){
            mode = 's'
            searchFormElement.action="https://startpage.com/search"
            searchFormElement.method="get"
            searchBarElement.placeholder="Search Startpage..."
            searchBarElement.name='query'
            searchBarElement.focus()
        }
        else if(e.key == "b"){
            mode = 'b'
            searchBarElement.placeholder="Search Backloggd..."
            searchFormElement.action=""
            searchFormElement.addEventListener("submit", handleBackloggd)
            searchBarElement.focus()
        }
        else if(e.key == "k"){
            mode = 'k'
            searchFormElement.action="https://en.wikipedia.org/wiki/Special:Search"
            searchFormElement.method="get"
            searchBarElement.placeholder="Search Wikipedia..."
            searchBarElement.name='search'
            searchBarElement.focus()
        }
            
        else if(e.key == "y"){
            mode = 'y'
            searchFormElement.action="https://youtube.com/results"
            searchBarElement.name='search_query'
            searchBarElement.placeholder="Search YouTube..."
            searchBarElement.focus()
            console.log(searchFormElement)
        }
        else if(e.key == "r"){
            mode = 'r'
            searchFormElement.action="https://rateyourmusic.com/search"
            searchBarElement.name='searchterm'
            searchBarElement.placeholder="Search RYM..."
            searchBarElement.focus()
        }
        else if(e.key == "m"){
            mode = 'm'
            searchFormElement.action="https://myanimelist.net/search/all"
            searchBarElement.name='q'
            searchBarElement.placeholder="Search MAL..."
            searchBarElement.focus()
        }
        else if(e.key == "c"){
            mode = 'c'
            searchFormElement.action=""
            searchBarElement.placeholder="Choose 4chan board..."
            searchFormElement.addEventListener("submit", handle4Chan)
            searchBarElement.focus()
        }
        else if(e.key == "g"){
            mode = 'g'
            searchFormElement.action="https://goodreads.com/search"
            searchBarElement.placeholder="Search Goodreads..."
            searchBarElement.name="q"
            searchBarElement.focus()
        }
        else if(e.key == "l"){
            mode = 'l'
            searchFormElement.action="https://letterboxd.com/search"
            searchBarElement.placeholder="Search Letterboxd..."
            searchFormElement.addEventListener("submit", handleLetterboxd)
            searchBarElement.name="q"
            searchBarElement.focus()
        }

        // cleans input field up if changing the "search engine"
        if(mode != prevmode){
            searchBarElement.value=''
            prevmode = mode
        }

        // Upper case - open website
        if(e.key == "S")
            window.open("https://startpage.com", "_self")
        else if(e.key == "B")
            window.open("https://backloggd.com", "_self")
        else if(e.key == "R")
            window.open("https://rateyourmusic.com", "_self")
        else if(e.key == "M")
            window.open("https://myanimelist.net", "_self")
        else if(e.key == "C")
            window.open("https://4chan.org", "_self")
        else if(e.key == "A")
            window.open("https://anilist.co", "_self")
        else if(e.key == "G")
            window.open("https://goodreads.com", "_self")
        else if(e.key == "L")
            window.open("https://letterboxd.com", "_self")
        else if(e.key == "W")
            window.open("https://web.whatsapp.com", "_self")
        else if(e.key == "Y")
            window.open("https://youtube.com", "_self")
        else if(e.key == "K")
            window.open("https://wikipedia.org", "_self")
    }
})
