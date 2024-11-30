# BMI Calculator

This is a simple **BMI (Body Mass Index) Calculator** built using **HTML**, **CSS**, and **JavaScript**. The project is designed as a practice project for **DOM manipulation**.

## Features
- User-friendly interface for entering height and weight.
- Real-time BMI calculation and result display.
- Color-coded feedback based on BMI range (e.g., underweight, normal, overweight, obese).
- Responsive design for different devices.

## Technologies Used
- **HTML**: For the structure of the application.
- **CSS**: For styling and layout.
- **JavaScript**: For the BMI calculation and dynamic DOM updates.

## How It Works
1. The user inputs their **height** (in meters or inches) and **weight** (in kilograms or pounds).
2. On clicking the "Calculate BMI" button:
   - The BMI is calculated using the formula:
     \[
     BMI = \frac{\text{weight (kg)}}{\text{height (m)}^2}
     \]
   - For height in inches and weight in pounds, appropriate conversions are applied.
3. The result is displayed with a corresponding message indicating the BMI category:
   - Underweight: BMI < 18.5
   - Normal weight: 18.5 ≤ BMI < 24.9
   - Overweight: 25 ≤ BMI < 29.9
   - Obese: BMI ≥ 30

## How to Run the Project
1. Clone this repository or download the files.
2. Open `index.html` in any modern web browser.
3. Input your height and weight and click "Calculate BMI" to see the result.

## What I Learned
- DOM manipulation techniques for dynamic content updates.
- Handling user inputs and events with JavaScript.
- Styling forms and feedback messages using CSS.
- Applying basic math formulas in JavaScript.

## Future Enhancements
- Add a reset button to clear inputs and results.
- Allow users to toggle between metric and imperial units.
- Display a chart or graph based on the BMI ranges.
- Save user history or results using browser storage (e.g., localStorage).

### Author
**Anand Kumar**

### License
This project is licensed under the MIT License.
