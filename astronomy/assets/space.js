let url = "https://api.nasa.gov/planetary/apod?api_key=LV0pRNtVJUZenYowYykA7wGky7R2MfU5A1QoQ8vJ"
fetchAPI()


function getHD() {
    window.open(data1.hdurl, '_blank')
}

function getView() {
    const dayView = document.querySelector('input').value
    url = `https://api.nasa.gov/planetary/apod?api_key=LV0pRNtVJUZenYowYykA7wGky7R2MfU5A1QoQ8vJ&date=${dayView}`
    fetchAPI()
}

function getRandom() {
    url = "https://api.nasa.gov/planetary/apod?api_key=LV0pRNtVJUZenYowYykA7wGky7R2MfU5A1QoQ8vJ&count=1"

    fetch(url)
        .then(res => res.json())
        .then(data => {
            data = data[0]
            if (data.media_type === 'video') {
                document.querySelector('iframe').src = data.url
                document.getElementById('vod').style.display = 'block'
                document.querySelector('img').style.display = 'none'
            } else {
                document.querySelector('img').src = data.url
                document.querySelector('iframe').style.display = 'none'
                document.querySelector('img').style.display = 'block'
            }
            document.querySelector('#title').innerText = data.title
            
            document.querySelector('#description').innerText = data.explanation

            return data1 = data  
        })
}

function fetchAPI() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.media_type === 'video') {
                document.querySelector('iframe').src = data.url
                document.getElementById('vod').style.display = 'block'
                document.querySelector('img').style.display = 'none'
            } else {
                document.querySelector('img').src = data.url
                document.querySelector('iframe').style.display = 'none'
                document.querySelector('img').style.display = 'block'
            }
            document.querySelector('#title').innerText = data.title
            
            document.querySelector('#description').innerText = data.explanation
            return data1 = data            
        })
        
    }