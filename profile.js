const colorButton = document.getElementById('color')
const placeButton = document.getElementById('place')
const ritualButton = document.getElementById('ritual')

const favColor = () => window.alert('my favorite color is black')
const favPlace = () => window.alert('my favorite place is greece')
const favRitual = () => window.alert('i love child sacrifice')

colorButton.addEventListener('click', favColor)
placeButton.addEventListener('click', favPlace)
ritualButton.addEventListener('click', favRitual)


