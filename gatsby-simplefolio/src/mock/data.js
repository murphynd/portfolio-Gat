import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Natalie Muprhy - Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Natalie Murphy',
  subtitle: 'I am a Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'shore.jpg',
  paragraphOne:
  'I am finishing a three-month DevOps internship with iGrafx where I have gained a foundation and a disciplined approach to development, testing, documentation, and code structure in a team environment. Here I was able to further my skills in full-stack development using javascript and java.',
  paragraphTwo:
    'While I am new to this industry, I am proactive with research on subjects that I do not understand. I value mentorship, as I have been a mentor to students in the lower cohort at Epicodus. The community has been what keeps me excited about programming. In my opinion, collaboration leads to more successful projects. Working with my colleagues has been a highlight during my time at Epicodus.',
  paragraphThree:
    'In other news, if you love coffee and skiing I think we will have a great time working together. ',
  resume: 'https://murphynd.github.io/resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Artery.png',
    title: 'Artry',
    info: 'Technology used: React.js, Vercel',
    info2: 'A project that will become an app for documenting art process I am currenty working on with a fabulous team of queer women and non-binary people. I am playing a DevOp role in this team',
    url: 'https://github.com/karvari/journal'
    // if no repo, the button will not show up
  },{
    id: nanoid(),
    img: 'measuretwice.png',
    title: 'Measure Twice',
    info: 'Technology used: Gatsby.js, React.js, email.js, Vercel',
    info2: 'A business site I built for my friend to host a portfolio of his work and to intake emails he needs to get intouch with clients.',
    url: 'https://measuretwicepdx.com/'
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
    url: 'https://github.com/murphynd/ParksLookUp',
    repo: '', // if no repo, the button will not show up
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
  email: 'Hello@natpdx.com',
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
