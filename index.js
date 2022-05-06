// document.addEventListener('DOMContentLoaded', () => {
//     let text = document.querySelector('#text').textContent
//     console.log(`text: ${text}`)
//     return text = 'This is really cool!'
//     console.log(`text: ${text}`)
//     console.log('Text should have changed')
// })

document.addEventListener('DOMContentLoaded', () => {
    console.log(`text: ${document.querySelector('#text').textContent}`)
    document.querySelector('#text').textContent = 'This is really cool!'
    console.log(`text: ${document.querySelector('#text').textContent}`)
})