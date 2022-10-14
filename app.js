document.addEventListener('click', dogViewer)

function dogViewer(){


  fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => {
  document.querySelector('img').src = data.message
  console.log(data.message)
})

.catch(err => {
  console.log(`Error ${err}`)
})

}


