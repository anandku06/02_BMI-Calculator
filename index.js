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
    else if (weight === " " || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    }
    else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        let message;
        if(BMI < 18.6){
            message = "You are UnderWeight!! Eat More"
        }
        else if(BMI < 24.9){
            message = "You are Normal!! Stay Healthy"
        }
        else{
            message = "You are OverWeight!! Eat Less Now"
        }

        results.innerHTML = `<span>${BMI}</span><p>${message}</p>`
    }
})

// isNaN(): Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
// .toFixed(): Returns a string representing a number in fixed-point notation.