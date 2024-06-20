<div id="readme-top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">B2C eCommerce Website</h3>

<a href="https://craftsbyjules.org" target="_blank"><strong>Visit Online Store »</strong></a>

<a href="https://github.com/austin-cavanagh/b2c-ecommerce-website/issues/new?assignees=&labels=&projects=&template=bug-report-%F0%9F%90%9D.md&title=">Report Bug</a>
·
<a href="https://github.com/austin-cavanagh/b2c-ecommerce-website/issues/new?assignees=&labels=&projects=&template=feature-request-%F0%9F%9A%80.md&title=">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#highlights">Highlights</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- OVERVIEW -->

## Overview

<!-- ![Screenshot displaying an overview of the solar system](/assets/screenshots/about.png) -->

This eCommerce website was created for a home crafts business. Through building this site, I've deepened my understanding of authentication systems, integrated payments, and AWS for hosting and managing web applications.

### Highlights:

- **Secure Sign-In Options**: Choose between OAuth (Google or Facebook) and traditional email / password
- **Hosting with AWS**: Hosted on Amazon Web Services to enable scalability, security, and performance
- **Stripe and PayPal Checkout**: Secure and versatile payment options to adhere to customer preferences

<br>

I hope the site provides you with an welcoming and enjoyable shopping experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BUILT WITH -->

## Built With

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-214ce5?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4f45e4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-04364e?style=for-the-badge&logo=Prisma&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth-8125D9?style=for-the-badge&logo=nextdns&logoColor=white)
![Google OAuth](https://img.shields.io/badge/OAuth-E03526?style=for-the-badge&logo=google&logoColor=white)
![Facebook OAuth](https://img.shields.io/badge/OAuth-0666FE?style=for-the-badge&logo=facebook&logoColor=white)
![JWT](https://img.shields.io/badge/JST-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Cookies](https://img.shields.io/badge/Cookies-FF9900?style=for-the-badge&logo=cookiecutter&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-1e63ee?style=for-the-badge&logo=docker&logoColor=white)
![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS EC2](https://img.shields.io/badge/EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
![AWS ECR](https://img.shields.io/badge/ECR-FF9900?style=for-the-badge&logo=amazonecs&logoColor=white)
![AWS RDS](https://img.shields.io/badge/RDS-3E50D3?style=for-the-badge&logo=amazonrds&logoColor=white)
![AWS SES](https://img.shields.io/badge/SES-3E50D3?style=for-the-badge&logo=amazonsimpleemailservice&logoColor=white)
![AWS S3](https://img.shields.io/badge/S3-498A29?style=for-the-badge&logo=amazons3&logoColor=white)
![AWS Secrets Manager](https://img.shields.io/badge/Secrets_Manager-DC3133?style=for-the-badge&logo=awssecretsmanager&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This section provides instructions on how to get a local copy of the website up and running.

### Prerequisites

Before installing, make sure you have the following tools installed:

- **Node.js**: The runtime environment for executing JavaScript code server-side. You can download it from [Node.js official website](https://nodejs.org/en/download/).

- **npm (Node Package Manager)**: Comes with Node.js, but you can check if it's installed by running `npm -v` in your terminal. If you need to update npm, run:

  ```sh
  npm install npm@latest -g
  ```

### Installation

To get a local copy up and running follow these simple steps.

1. **Clone the repository**
   Begin by cloning the repository to your local machine:

   ```sh
   git clone https://github.com/austin-cavanagh/b2c-ecommerce-website.git
   ```

2. **Navigate to the project directory**
   Enter directory after cloning:

   ```sh
   cd b2c-ecommerce-website
   ```

3. **Install dependencies**
   Install the necessary packages using npm:

   ```sh
   npm install
   ```

4. **Start the development server**
   To start the Vite development server run:

   ```sh
   npm run dev
   ```

5. **Build for production**
   To build the project for production, use:

   ```sh
   npm run build
   ```

   After building, you can preview the production build locally by running:

   ```sh
   npm start
   ```

6. **Happy coding!**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ROADMAP -->

<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Austin Cavanagh - <a href="https://github.com/austin-cavanagh" target="_blank">GitHub</a> - <a href="https://www.linkedin.com/in/austincavanagh/" target="_blank">LinkedIn</a> - austin.cavanagh.cs@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE.txt](LICENSE.txt) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

Below are some resources I found useful when building this project.

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->
