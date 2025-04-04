# Binary Tree Search Backend API & Frontend React Application
This fullstack application allows users to input any list of numbers and be presented with a visualization of a binary search tree displayed in JSON format. 

# Features

- List of numbers separated by commas are accepted
- A binary search tree is created from input
- Trees are stored in a mySQL database
- Binary search tree is displayed in JSON format
- Users can access previously entered trees and their associated input

# Technologies Used

- Maven
- MySQL
- React
- Axios
- Java
- Springboot
- Jackson

# Getting Started 

To run this project locally, follow these simple steps: 

# 1. Clone The Repository:
```bash
git clone https://github.com/sarwoodford/binary-tree-app.git
```
# 2. Navigate to the Back End Directory
```bash
cd binary-search-tree
cd back-end
```
# 3. Install Maven Dependencies for Back End 
```bash
mvn clean install
```
# 4. Run Springboot
```bash
mvn spring-boot:run
```
# 5. Navigate to the Front End Directory
** in a new terminal **
```bash
cd front-end
```
# 6. Install Front End Dependencies 
```bash
npm install
```
# 7. Start the React Application
```bash
npm start
```
*The React Applicaion Should Now be Running on Port 3000*

## Example Input and Output: 

***input: 5, 3, 7, 2, 4, 6, 8***

***Output (simplified):***
```json
{
  "value": 5,
  "left": {
    "value": 3,
    "left": { "value": 2, "left": null, "right": null },
    "right": { "value": 4, "left": null, "right": null }
  },
  "right": {
    "value": 7,
    "left": { "value": 6, "left": null, "right": null },
    "right": { "value": 8, "left": null, "right": null }
  }
}
```

## Author 

***Sara Woodford***
Software Development Student 

[LinkedIn](https://www.linkedin.com/in/sara-woodford-96039b2a8/) | [GitHub](https://github.com/sarwoodford)




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

