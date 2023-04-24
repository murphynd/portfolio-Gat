import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Natalie Muprhy - Software Developer', // e.g: 'Name | Developer'
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
  img: 'dude.png',
  paragraphOne:
    'Welcome to my portfolio website! I am a software engineer based in Portland, Oregon. I started my journey in tech by attending Epicodus a bootcamp based in PDX, where I learned the fundamentals of full-stack development, DevOps methodologies, and team collaboration.',
  paragraphTwo:
    'Since then, I have worked my way up from an intern at iGrafx to a software engineer, where I honed my skills in JavaScript and Java development. As an active member of Women in Tech PDX and Out in Tech PDX, I am passionate about promoting diversity and inclusion in the industry. I am currently looking for work and am excited to join a team that values collaboration, mentorship, and a disciplined approach to development',
  paragraphThree:
    "In my spare time, I love skiing and indulging in Portland's coffee culture. As a mentor to students at Epicodus and new developers at iGrafx, I have learned the importance of collaboration and teamwork, which are the keys to successful projects. Thank you for taking the time to visit my portfolio website, and I look forward to connecting with you! Check out my resume or CodeCamp profile to see what I have been working on.",
  resume: 'https://murphynd.github.io/resume/',
  codeCamp: 'https://www.freecodecamp.org/Murphynd', // if no resume, the button will not show up
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
      name: 'twitter',
      url: 'https://twitter.com/Nat_Codes_Stuff',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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
