import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Nick Hermann",
  logo: "/profile.webp",
  email: "kontakt@nickhrm.de",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/nickhrm",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:kontakt@nickhrm.de",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Nick Hermann",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description:
    "I'm Nick Hermann, a full time student from Germany who also loves building cool things using code.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Nick Hermann",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Nick Hermann, a full time student from Germany who also loves building cool things using code.`,
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Engineer and Product Developer",
        company: {
          name: "Flutter, NextJS, PHP, NodeJS, Figma",
          image: "/Pixel-Logo.png",
          url: "https://pixel-it-systems.de",
        },
        date: "2021 - Present",
      },
     
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    // {
    //   title: "Project 1",
    //   description: "Project 1 Description",
    //   image: "/demo-2.jpg",
    //   year: "2024",
    //   url: "https://github.com/TimWitzdam",
    // },
    // {
    //   title: "Project 1",
    //   description: "Project 1 Description",
    //   image: "/demo-2.jpg",
    //   year: "2024",
    //   url: "https://github.com/TimWitzdam",
    // },
    // {
    //   title: "Project 1",
    //   description: "Project 1 Description",
    //   image: "/demo-2.jpg",
    //   year: "2024",
    //   url: "https://github.com/TimWitzdam",
    // },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
