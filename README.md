# Desafio Suntech

![Desafio 2Sow ](/src/assets/suntech.png)

## About The Project

The challenge was to build a system for home registration. After the user registers a new home, the system then adds the coordinates through the latitude and longitude, and adds them to a heat map using the Google Maps API. For the input validations I used YUP and for the Form I used the unform library. 

The first step I took when I started the development was to decide how many pages I would have. After figuring out I would need two pages I started thinking about how I could structure the components. I figured I would need a navbar to navigate between the two pages, so that was the first component I created. After finishing the navbar, I would need an input and a button component for my home registration page. For the registration page, I decided to go with a very simple form using only the following inputs: CEP, Number and Number of Residents. I decided not to add a latitude and logitude input because I figured nobody memorizes those numbers. Because I didn't create the latitude and longitude inputs, I had to get them via the Google API using the CEP to find the coordinates. 

After finishing my Registration page I moved on to my Home page which is where the heat map is. While searching for a package, I came across one called GoogleMapReact. After reading the documentation I figured out how to use it and decided to implement it on this project. My logic for the heat map was very simple. The instructions said that I had to consider the number of residents when making the map. So my calculation was (lat, lng) * residents. So basically, if I have 10 residents living in the same coordinates, I would have 10 of the same latitude and longitude coordinates for that specific address. 

Strong Points
- Clean Code;
- Styled Components;
- Typescript;
- UI Friendly;
- Consuming APIs using axios;
- Folder structure;
- Eslint;
- Custom Hooks;

Weak Points
- Automated Tests;


### Built With:

- [Typescript](https://www.typescriptlang.org/) - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [ReactJS](https://pt-br.reactjs.org/) - A JavaScript library for building user interfaces.
- [Styled Components](https://styled-components.com/) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.

<!-- GETTING STARTED -->

## Getting Started

<!-- PLACEHOLDER FOR PROJECT OVERVIEW -->

### Prerequisites

In order to run this project locally you will need to:

- Clone and install this repository - https://github.com/pedrovsiqueira/suntech.

### Installation

1. Clone the repo

```sh
git clone https://github.com/pedrovsiqueira/suntech
```

2. Install YARN packages

```sh
yarn
```

3. Get a Google Maps API Key

```sh
Create an account at https://console.cloud.google.com/apis/ and generate a 
new credential for the Maps API Key. Create a .env file on the root of this project
 using the .env-example and paste your API Key after the REACT_APP_GOOGLE_API_KEY=
````

4. Run the app

```sh
yarn start
```

5. Make sure the following ports are available:

```sh
PORTS: 5000 and 3000.
```

5. Access the application through the following link afer doing the steps 1 - 4.

```sh
http://localhost:3000/
```

<!-- CONTACT -->

## Contact

Pedro Siqueira - [email](mailto:pedro.v.siqueira@gmail.com) - [linkedin](https://www.linkedin.com/in/pedrovsiqueira/) - [portfolio](http://pedrosiqueira.com.br/)
