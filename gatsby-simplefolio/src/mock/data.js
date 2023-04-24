import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Natalie Murphy - Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Natalie Murphy',
  subtitle: 'I am a Software Developer who wants to work with you',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'myface.png',
  paragraphOne:
    "Hello, I'm a software developer based in Portland, Oregon, actively seeking new opportunities to utilize my skills and knowledge. As a software engineer at iGrafx, I've gained valuable experience and expertise in JavaScript and Java development. My tech journey started with attending Epicodus boot camp, where I learned the ins and outs of full-stack development, DevOps methodologies, and effective teamwork.",
  paragraphTwo:
    "I advocate for diversity and inclusion in the industry and am a member of Women in Tech PDX and Out in Tech PDX. I'm passionate about collaborating with like-minded professionals in a disciplined and mentoring environment. Thank you for visiting my portfolio website, and I look forward to hearing from you.",
  paragraphThree: '',
  resume: 'https://murphynd.github.io/resume/',
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nataliedoraismurphy/',
    },
    {
      id: nanoid(),
      name: 'free-code-camp',
      url: 'https://www.freecodecamp.org/Murphynd',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/murphynd',
    },
  ],
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'NYTAPPpic.png',
    title: 'NYT MERN stack app',
    info:
      'Technology used: NYTimes API, MongoDB document database, Express(.js), Node.js web framework, React(.js) a client-side JavaScript framework, Node(.js)the premier JavaScript web server',
    info2:
      'Goal of this project is to spend time on React Hooks and it has expanded to work with the full MERN stack. ',
    repo: 'https://github.com/murphynd/MERN-NYTapp',
    url: '',
    // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Artery.png',
    title: 'Artry',
    info: 'Technology used: React.js, Vercel',
    info2:
      'A project that will become an app for documenting art process I am currenty working on with a fabulous team of queer women and non-binary people. I am playing a DevOp role in this team',
    repo: 'https://github.com/karvari/journal',
    url: '',
    // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'measuretwice.png',
    title: 'Measure Twice',
    info: 'Technology used: Gatsby.js, React.js, email.js, Vercel',
    info2:
      'A business site I built for my friend to host a portfolio of his work and to intake emails he needs to get intouch with clients.',
    url: 'https://measuretwicepdx.com/',
  },
  {
    id: nanoid(),
    img: 'thump.png',
    title: 'Thump',
    info: 'Technology used: Tone.js, React.js, Vercel',
    info2:
      'Epicodus Capstone Project - I created a 808 inspired Online Drum Machine! It can sequence 16 notes with 5 instruments. Built in React and powered by Tone.js.',
    url: 'https://thump-dlbpma8oe.vercel.app/',
    repo: 'https://github.com/murphynd/Capstone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'API.png',
    title: 'Parks Lookup API',
    info:
      'Technology used: C#, ASP.NET Core MVC, MySQL, Entity Framework Core 2.2.6, Swagger - NSwag 13.3.0, Postman',
    info2:
      'An API that functions as catalog for National & State Parks in the USA. It utilizes RESTful principles, Swagger and has integrated authentication via JWT Authentication to keep the API Read-Only for all users except administrators.',
    url: '',
    repo: 'https://github.com/murphynd/ParksLookUp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Auklo.png',
    title: 'Auklo',
    info:
      'Technology used: C#/Javascript, WebAudio, ASP.NET Core MVC, MySQL, Entity Framework Core 2.2.6,',
    info2:
      'Procedurally generated ambient music maker that has an infinite timeline of sound built using C#/Javascript/MySql. Using different filters and effects, You are able to create and save your own ambient music.',
    url: '', // rebuild in react with firebase
    repo: 'https://github.com/murphynd/AudioProject', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Drop me a line',
  btn: 'Email',
  email: 'nataliemuprhy500@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nataliedoraismurphy/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/murphynd',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
