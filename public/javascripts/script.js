let button = document.querySelector("button")
let input   = document.querySelector("input")
button.addEventListener("click",function(){
    console.log(input.value)
})

function sendMessage() {
    const message = document.querySelector('input').value
    let template = `
    <div id = "from">
        ${message}
      </div>
    `
    document.querySelector('#from').innerHTML += template

    socket.emit('chacha', message)

  }

  document.querySelector('button').addEventListener('click', sendMessage)

  function putIncomingMessage(message) {
    let template = `
    <div id = "to">
        ${message}
      </div>
    `
    document.querySelector('#to').innerHTML += template
  }

  socket.on('chachi', msg => {
    putIncomingMessage(msg)
  })