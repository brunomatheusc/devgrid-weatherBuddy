## DevGrid Test

Implementation of a weather application (Weather Buddy) using Node.js, TypeScript, Express and React

## 🔧 Technologies

This project uses the follows technologies:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redis](https://redis.io/)
- [Jest](https://jestjs.io/)
- [React](https://reactjs.org)
- [Styled Components](https://styled-components.com/)

## 🖥️ The Project
The main goal of this project was to develop an application that given city name, collects data from [Open Weather API](https://openweathermap.org/current)

For the server, I used [Node.js](https://nodejs.org/en/) along with [TypeScript](https://www.typescriptlang.org/) to built the routes and serve the application. Also, I use [Redis](https://redis.io/) for caching searched data for 5 minutes.

I developed the two specific endpoints described:
**/weather?max=<max_number>**
**/weather/<city_name>**

Both endpoints are processed by **WeatherController** that calls **WeatherService** to process and returning data. When the function **getWeatherByCityName** is called and processed data, then the returning data is cached by Redis during 5 minutes.

Frontend was developed using [React](https://reactjs.org) and [Styled Components](https://styled-components.com/).
I prefer create my own css if I have time for this.


## ▶️ How to execute

#### Cloning the project
```
git clone https://github.com/brunomatheusc/devgrid-weatherBuddy
cd devgrid-weatherBuddy
```

#### Running Backend
```
cd server
yarn
yarn dev
```

#### Running Frontend
```
cd frontend
yarn
yarn start
```

#### Docker
```
docker-compose up
```