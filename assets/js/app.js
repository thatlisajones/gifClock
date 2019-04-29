document.getElementById('date').innerText=moment().format('MMMM Do YYYY')
document.getElementById('time').innerText=moment().format('h:mm:ss a')

window.setInterval(getTime, 500);

function getTime() {
  document.getElementById('time').innerhtml=moment().format('h:mm:ss a')
}

gifAddition = (arr) =>{
  for (var i = 0; i < arr.length; i++) {
    console.log("moment test: ", moment(arr[i].import_datetime).format('MMMM Do YYYY'));

    let cardHolder = $("<div>").addClass("col s12 m4")
    let card =  $("<div>").addClass("card col-content")
    let cardImage =  $("<div>").addClass("card-image waves-effect waves-block waves-light")
    let image =  $("<img>").addClass("activator").attr("src", arr[i].images.fixed_height.url)
    let content = $("<div>").addClass("card-content")
    let title = $("<span>").addClass("card-title activator grey-html html-darken-4").html(arr[i].title)
    let moreIcon = $("<i>").addClass("material-icons right").html("more_vert")
    let reveal = $("<div>").addClass("card-reveal")
    let close = $("<span>").addClass("card-title grey-html html-darken-4").html(arr[i].title)
    let closeIcon = $("<i>").addClass("material-icons right").html("close")
    let info = $("<p>").addClass("revealText").text(`This gif is rated ${arr[i].rating} and was added to Giphy on ${moment(arr[i].import_datetime).format('MMMM Do YYYY')}`)

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

    $("#gifHolder").append(cardHolder)
  }
}

fetch('https://api.giphy.com/v1/gifs/trending?api_key=Oks2BSCHq8adUf0GBIeqg3AWBng0GkCZ&limit=3')
  .then(response => {
      return response.json();
  })
  .then(json => {
    gifAddition(json.data)
  })  .catch(err => console.log(err));
