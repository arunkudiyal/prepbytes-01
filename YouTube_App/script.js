document.querySelector('#serach_btn').addEventListener('click', () => {
    const serachInput = document.querySelector('#input_serach').value
    const api_key = `AIzaSyADZmlHsGpP0Nbm8CJf5wO-7AIbgmY1mBo`

    // URL -> baseUrl/serviveName?queryParam1=valueOfQueryParam&queryParam2=value2&qP3=valu3&......
    const url = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&part=snippet&q=${serachInput}&maxResults=50`

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const results = JSON.parse(xhr.responseText)
            console.log(results)
            output = ``

            results.items.forEach( item => {
                output += `
                    <div style="width: 23%; margin: 10px;">
                        <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank"> <img style="width: 100%" src="${item.snippet.thumbnails.high.url}" /> </a> <hr />
                        <p> <b> ${item.snippet.description} </b> </p>
                        <p style="color: gray;"> ${item.snippet.channelTitle} </p>
                    </div>
                `
            } )

            document.querySelector('#main-content').innerHTML = output
        }
    }

    xhr.send()
})