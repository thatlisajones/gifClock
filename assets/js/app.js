document.getElementById(date).innerhtml=moment().format('MMMM Do YYYY')
document.getElementById(time).innerhtml=moment().format('h:mm:ss a')

window.setInterval(getTime, 500);

function getTime() {
  document.getElementById('time').innerhtml=moment().format('h:mm:ss a')
}

gifAddition = (arr) =>{
  for (const i = 0; i < arr.length; i++) {
    console.log("moment test: ", moment(arr[i].import_datetime).format('MMMM Do YYYY'));

    const cardHolder = $("div").addclass("col s12 m4")
    const card =  $("div").addclass("card col-content")
    const cardImage =  $("div").addclass("card-image waves-effect waves-block waves-light")
    const image =  $("img").addclass("activator").attr("src", arr[i].images.fixed_height.url)
    const content = $("div").addclass("card-content")
    const title = $("span").addclass("card-title activator grey-html html-darken-4").html(arr[i].title)
    const moreIcon = $("i").addclass("material-icons right").html("more_vert")
    const reveal = $("div").addclass("card-reveal")
    const close = $("span").addclass("card-title grey-html html-darken-4").html(arr[i].title)
    const closeIcon = $("i").addclass("material-icons right").html("close")
    const info = $("p").addclass("revealhtml").html(`This gif is rated ${arr[i].rating} and was added to Giphy on ${moment(arr[i].import_datetime).format('MMMM Do YYYY')}`)

    cardImage.append(image)
    card.append(cardImage)
    title.append(moreIcon)
    content.append(title)
    card.append(content)
    close.append(closeIcon)
    reveal.append(close)
    reveal.append(info)
    card.append(reveal)
    cardHolder.append(card)

    $("gifHolder").append(cardHolder)
  }
}

fetch('https://api.giphy.com/v1/gifs/trending?api_key=Oks2BSCHq8adUf0GBIeqg3AWBng0GkCZ&limit=5')
  .then(response => {
      return response.json;
  })
  .then(json => {
    gifAddition(json.data)
  })  .catch(err => console.log(err));
