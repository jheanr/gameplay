<p align="center">
  <a href="#project">Project</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#running-the-project">Running the project</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=E51C44&labelColor=0A1033">

 <img src="https://img.shields.io/static/v1?label=NLW&message=06&color=E51C44&labelColor=0A1033" alt="NLW 06" />
</p>


![cover](.github/cover.png?style=flat)


## Project

This app helps you to connect and schedule matches with your friends using Discord API to authenticate and fetch the needed information. This project was developed during the [Next Level Week](https://nextlevelweek.com/) by [Rocketseat](https://rocketseat.com.br). 


## Technologies

* React Native
* Typescript
* Expo
* Context API
* Async Storage
* Vector Icons
* React Native Svg  
* Svg Transform
* Axios
* Gradient colors
* Discord API
* Expo Google Fonts
* React Navigation Stack
* React Native Gesture Handler
* Expo Authentication
* React Native Share
* Deep Link


## Running the project

Clone the project and access the folder.

```shell
$ git clone https://github.com/jheanr/gameplay.git && cd gameplay
```

Follow these steps:

```shell
# Install the dependencies
$ yarn

# Run Expo
$ expo start
```

You must create an app on Discord Developer Portal to get your credentials to authenticate. After that, edit the file `.env.example` and rename to `.env`.
 
 ```shell
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```

## Layout

You can access the layout [here](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83). 


## License

This project is under the MIT License. See the [LICENSE](LICENSE.md) file for details.
