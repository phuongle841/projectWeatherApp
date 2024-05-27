# still in configs smh

- wget -O webpack.common.js "LINK OF THE REPO"

- npm init -y
- npm install webpack webpack-cli --save-dev
- npm install --save-dev html-webpack-plugin
- npm install --save-dev style-loader css-loader
- mkdir src && cd src
- touch index.js index.html style.css
- cd .. && code .
- npm install --save-dev webpack-dev-server
- npm install --save-dev webpack-merge
  <!-- missing eslint (latest version) -->
  <!-- and replace the package.json with the one on this repo -->

# Webpack.config

<!-- download from the github link from  this repo-->

# run

- npm start

# prod

- npm run build

# requirement in this project

- Search for a specific location and
  - functions take a location and return the weather
- Toggle displaying the data in Fahrenheit or Celsius.
- You should change the look of the page based on the data, maybe by changing the color of the background
- add a ‘loading’ component
- handle error when fetch bad input

# done

- main page includes these information:
  - local time
  - temp c
  - temp f
  - condition -> text
  - wind_mph
  - wind_kph
  - humidity
  - cloud
- the day includes:
  - time
  - condition -> text

# Working policy

- use the document example of an response in WEATHER_API to find the fit part for the page
