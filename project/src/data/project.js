import chunkfile from "../assets/chunkfile_hero.png";
import britishauc from "../assets/britishauc_hero.png";
import moviefinder from "../assets/moviefinder_hero.png";
import coonected from "../assets/coonected_hero.png";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import python from "../assets/python.svg";
import django from "../assets/django.svg";
import git from "../assets/git.svg";
import figma from "../assets/figma.svg";
import react from "../assets/react.svg";
import vite from "../assets/vite.svg";
import scss from "../assets/scss.svg";
import nodejs from "../assets/nodejs.svg";
import csharp from "../assets/csharp.svg";
import dotnetcore from "../assets/dotnetcore.svg";

export default [
  {
    id: 1,
    project_name: "Movie Finder",
    project_description: `Movie Finder is a web application that allows users to search for movies, access detailed information, and watch trailers. \n \n Built with React, .NET Core, and OMDB's Rest API, it offers an engaging user interface. Real-time updates ensure users have access to the latest information, including release dates and ratings.`,
    technology: [react, dotnetcore, html, css, scss, javascript, csharp, vite, git, figma],
    display1: "display1",
    display2: "display2",
    live_link: "https://tersoomoviefinderproject.netlify.app/",
    figma_link:
      "https://github.com/tersoo-ahire/Movie-Search-App",
    project_image: moviefinder,
  },
  {
    id: 2,
    project_name: "British AUC",
    project_description: `Corporate website built using React and Nodejs for British American University Consulting. This site is fully responsive across all screens.`,
    technology: [react, html, css, scss, javascript, nodejs, vite, git, figma],
    display1: "display2",
    display2: "display1",
    live_link: "https://www.britishauc.com/",
    figma_link:
      "https://www.figma.com/file/0X2dvIeQisVcYjP51z5Fbv/Website?type=design&node-id=0%3A1&mode=design&t=Y3PqZHK9cLXZn65r-1",
    project_image: britishauc,
  },
  {
    id: 3,
    project_name: "Coonected (Coming Soon)",
    project_description: `Coonected is a social networking platform designed to foster meaningful connections. \n \n It utilizes React for its responsive frontend, providing users with an intuitive interface. On the backend, Python and Django Rest APIs power its robust infrastructure, enabling secure data management, real-time messaging, and personalized matching.`,
    technology: [react, html, css, scss, javascript, python, django, vite, git, figma],
    display1: "display1",
    display2: "display2",
    live_link: "/",
    figma_link:
      "/",
    project_image: coonected,
  },
  {
    id: 4,
    project_name: "ChunkFile",
    project_description: `ChunkFile is a service that allows individuals to upload large CSV or JSON files and split the dataset into multiple files.
        \n The platform utilizes Python and Django for the backend authentication, ensuring secure access for users. SQLite is used as the database, allowing efficient storage and retrieval of data.`,
    technology: [html, css, javascript, python, django, git, figma],
    display1: "display2",
    display2: "display2",
    live_link: "https://chunkfile.pythonanywhere.com/",
    figma_link:
      "https://www.figma.com/file/sm2Io642yiuO5fjg2cmXhT/ChunkFile?type=design&node-id=2305%3A11431&t=SIfzxLrAZD01uoS3-1",
    project_image: chunkfile,
  },
];
