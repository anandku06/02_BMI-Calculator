const form = document.querySelector("form")
// this will give you empty value as whenever the page loads it'll take the empty input value
// const weight = parseInt(document.querySelector("#weight").value)

form.addEventListener("submit", (e) => {
    e.preventDefault() //  used to prevent the default action of the element

    const results = document.querySelector("#results")
    const height = parseInt(document.querySelector('#height').value) // parses or converts the string value
    // to get the value from the input field, target the field and .value returns the value from the form; in string

    const weight = parseInt(document.querySelector("#weight").value)

    if (height === " " || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"
    }
})

// isNaN(): Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).