<p align="center">
  <a href="https://wpm-test.vercel.app">
    <img alt="typing test screenshot" src="https://github.com/mariangle/typing-test-ts/assets/124585244/5b397f98-7a00-4e89-bddf-a4905f6b4c21">
    <h1 align="center">Typing Test</h1>
  </a>
</p>

<p align="center">
  An intuitive application for testing your typing speed and improving your word-per-minute (WPM).
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#license"><strong>License</strong></a>
</p>
<p align="center">
  <a href="https://www.linkedin.com/in/maria-nguyen-le">
    <img src="https://img.shields.io/badge/-MariaLe-blue?style=plastic-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/maria-nguyen-le/" alt="License" />
  </a>
</p>
<br/>

<!-- ABOUT THE PROJECT -->

## Introduction

The primary purpose of this project was gaining more familiarity with TypeScript through the development of a simplified application, while also experimenting with new features.

Here are some of the key features:

- **Leaderboard:** Showcases the top 10 results achieved.
- **Sign in with Google or GitHub:** Convenient and secure authentication.
- **Dark Mode and Light Mode:** Choose the visual theme that suits your preference and environment.

## Tech stack

- [Next.js](https://nextjs.org/) - framework
- [TypeScript](https://www.typescriptlang.org/) - language
- [Tailwind](https://tailwindcss.comm) - CSS
- [MongoDB](https://mongodb.com) - database
- [NextAuth.js](https://next-auth.js.org/) - auth
- [Vercel](https://vercel.com) - hosting

<!-- GETTING STARTED -->

## Installation

To get a local copy up and running, follow these steps.

1. Clone the repository:

   ```sh
   git clone https://github.com/mariangle/typing-test-ts.git
   ```

2. Configure your environment variables in a .env file. Include the following variables:

   ```sh
   DATABASE_URL=
   GITHUB_ID=
   GITHUB_SECRET=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   NEXTAUTH_SECRET=
   ```

3. Install the required npm packages:

   ```sh
   npm install
   ```
  
4. Set up the database:

   ```sh
   npx prisma db push
   ```


5. Start the development server:

   ```sh
   npm run dev
   ```

## License

<details>
  <summary><b>MIT License</b></summary>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</details
