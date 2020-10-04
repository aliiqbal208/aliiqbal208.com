<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio ✨</h1>

  <p align="center">
    It is a personal portfolio template hosted with Netlify, built to showcase my recent projects. Site URL / Demo: 
    <a href="https://www.aliiqbal208.com">www.aliiqbal208.com</a>
    <br />
    <br />
    <a href="https://aliiqbal208.com">About Me</a>
    ·
    <a href="https://github.com/aliiqbal208/home/issues">Report Bug</a>
    ·
    <a href="https://github.com/aliiqbal208/home/issues">Request Feature</a>
  </p>
</p>

![GitHub contributors](https://img.shields.io/github/contributors/aliiqbal208/home?color=ffcc66&style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/aliiqbal208/home?color=ffcc66&style=for-the-badge)
[![GitHub forks](https://img.shields.io/github/forks/aliiqbal208/home?style=for-the-badge)](https://github.com/aliiqbal208/star_book/network)
[![GitHub issues](https://img.shields.io/github/issues/aliiqbal208/home?color=ffcc66&style=for-the-badge)](https://github.com/aliiqbal208/star_book/issues)
[![GitHub license](https://img.shields.io/github/license/aliiqbal208/home?style=for-the-badge)](https://github.com/aliiqbal208/home/blob/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/aliiqbal208?color=ffcc66&logo=twitter&logoColor=ffffff&style=for-the-badge)](https://twitter.com/aliiqbal208)

[![Site preview](/public/social-image.png)](https://aliiqbal208.github.io/)



## Table of Contents

- [Technology Stack 🛠️](#technology-stack-)
- [Structure ⚓](#structure-)
- [Sharing 💗](#sharing-)
- [Prerequisites 🍪](#prerequisites-)
- [Setup And Deployment 🔧](#setup-and-deployment-)

## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Material-UI](https://github.com/mui-org/material-ui)
| [Typist](https://github.com/jstejada/react-typist)
| [GithubCalendar](https://github.com/grubersjoe/react-github-calendar)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure ⚓

- Navigation bar (optional)
- Blog (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (using Instagram API) (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Footer
  - Acknowledgements (contributors)
  - Copyrights - open source
  - (quote: Dream big, Think big)

## Sharing 💗

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/configurations.json](./src/editable-stuff/configurations.json) and add resume. Mark star ⭐ if you like this project.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/configurations.json](./src/editable-stuff/configurations.json) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

6. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

7. To deploy website, I am using [Netlify](https://www.netlify.com/).

Facing issues? Feel free to contact at aliiqbal208@gmail.com.
