Sunburst
========

Sunburst is a weather app made out of React that uses the [Open Weather API][api].

I developed Sunburst as an [activity][curriculum] for the [ReactjsFundamentals Course][course].

[api]: http://openweathermap.org/api
[course]: courses.reactjsprogram.com/courses/reactjsfundamentals/
[curriculum]: https://github.com/ReactjsProgram/react-fundamentals-curriculum

Installing and Running
----------------------

```
$ npm install
$ cp app/utils/open-weather-api-key.js.template app/utils/open-weather-api-key.js
$ nano app/utils/open-weather-api-key.js  # Fill with your key.
$ npm run start  # For development mode.
$ npm run production  # To generate app in '/dist' folder.
```
