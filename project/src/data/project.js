import chunkfile from "../assets/chunkfile_hero.png";
import asadag from "../assets/asadag_hero.png";
import portfolio from "../assets/portfolio_hero.png";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import python from "../assets/python.svg";
import django from "../assets/django.svg";
import git from "../assets/git.svg";
import figma from "../assets/figma.svg";
import bootstrap from "../assets/bootstrap.svg";
import react from "../assets/react.svg";
import vite from "../assets/vite.svg";

export default [
    {
        id: 1,
        project_name: "ChunkFile",
        project_description: 
        `ChunkFile is a service that allows individuals to upload large CSV or JSON files and split the dataset into multiple files.
        \n The platform utilizes Python and Django for the backend authentication, ensuring secure access for users. SQLite is used as the database, allowing efficient storage and retrieval of data.`,
        technology: [html, css, javascript, python, django, git, figma],
        display1: "display1",
        display2: "display2",
        live_link: "https://chunkfile.pythonanywhere.com/",
        figma_link: "https://www.figma.com/file/sm2Io642yiuO5fjg2cmXhT/ChunkFile?type=design&node-id=2305%3A11431&t=SIfzxLrAZD01uoS3-1",
        project_image: chunkfile,
    },
    {
        id: 2,
        project_name: "Africa Students Association in Russia Website",
        project_description: 
        `Corporate website built using Bootstrap for the African Students Association in Russia. This site is fully responsive across all screens.`,
        technology: [html, css, javascript, bootstrap, git, figma],
        display1: "display2",
        display2: "display1",
        live_link: "https://www.asadag.com",
        figma_link: "https://www.figma.com/file/zJRW79owSAlznMtUg4IogV/My-Projects?type=design&node-id=526-1318",
        project_image: asadag,
    },
    {
        id: 3,
        project_name: "Portfolio Site",
        project_description: 
        `My portfolio site is a showcase of my work and skills as a web developer and designer. It features a collection of projects that highlight my expertise in various technologies and design tools. 
        \n The site itself is built using the React library for dynamic interactivity. In the contact form, I integrated Axios for handling API requests and EmailJS for streamlined message delivery.`,
        technology: [react, html, css, javascript, vite, git, figma],
        display1: "display2",
        display2: "display2",
        live_link: "/",
        figma_link: "https://www.figma.com/file/zJRW79owSAlznMtUg4IogV/My-Projects?type=design&node-id=355%3A355&t=544sPtexefvBX6nC-1",
        project_image: portfolio,
    },
]