import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, b as renderComponent, d as createAstro, u as unescapeHTML, F as Fragment, i as renderHead, e as renderSlot } from './astro/server_BTumX5rO.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DLnKqpoV.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                         */


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/home/nick/Documents/my-website/node_modules/astro-icon/components/Icon.astro", void 0);

const identity = {
  name: "Nick Hermann",
  logo: "/profile.webp",
  email: "kontakt@nickhrm.de"
};
const navBarLinks = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "About",
    url: "/about"
  },
  {
    title: "Projects",
    url: "/projects"
  },
  {
    title: "Blog",
    url: "/blog"
  }
];
const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/nickhrm",
    icon: "mdi:github",
    external: true
  },
  {
    title: "Mail",
    url: "mailto:kontakt@nickhrm.de",
    icon: "mdi:email"
  }
];
const homePageContent = {
  seo: {
    title: "Nick Hermann",
    description: "Full time student from Germany who loves building cool things using code.",
    image: identity.logo
  },
  role: "Student & Software Developer",
  description: "I'm Nick Hermann, a full time student from Germany who also loves building cool things using code.",
  socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects"
    },
    {
      title: "About Me",
      url: "/about"
    }
  ]
};
const aboutPageContent = {
  seo: {
    title: "About | Nick Hermann",
    description: "Full time student from Germany who loves building cool things using code.",
    image: identity.logo
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Nick Hermann, a full time student from Germany who also loves building cool things using code.`,
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture"
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture"
    }
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`,
    // Markdown is supported
    items: [
      {
        title: "Software Engineer and Product Developer",
        company: {
          name: "Flutter, NextJS, PHP, NodeJS, Figma",
          image: "/Pixel-Logo.png",
          url: "https://pixel-it-systems.de"
        },
        date: "2021 - Present"
      }
    ]
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    // Markdown is supported
    links: socialLinks
  }
};
const projectsPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo
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
  ]
};
const blogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo
  },
  subtitle: "Thoughts, stories and ideas."
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { seo } = Astro2.props;
  return renderTemplate` <html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${seo.title}</title><meta name="description"${addAttribute(seo.description, "content")}><meta property="og:title"${addAttribute(seo.title, "content")}><meta property="og:description"${addAttribute(seo.description, "content")}><meta property="og:image"${addAttribute(seo.image, "content")}>${renderHead()}</head> <body> <header> <div class="px-6 py-6 max-w-2xl mx-auto flex items-center justify-between"> <a href="/"> ${renderComponent($$result, "Image", $$Image, { "src": identity.logo, "alt": "Logo", "width": 50, "height": 50, "class": "w-[50px] h-[50px] object-cover" })} </a> <nav class="ml-auto mr-6 sm:m-0"> <ul class="hidden sm:flex sm:items-center sm:gap-2"> ${navBarLinks.map((link) => renderTemplate`<li> <a class="group px-4 py-2 rounded-lg hover:bg-gray-bg opacity-60 hover:opacity-100 transition-all"${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : "_self", "target")}> ${link.title} </a> </li>`)} </ul> <div class="relative sm:hidden"> <button id="link-menu-button" class="relative font-medium opacity-60 p-4">Menu <span id="open-indicator">+</span></button> <div id="link-menu" class="absolute p-2 right-0 bg-gray-bg rounded-lg w-44 transition-opacity ease-in-out duration-300 opacity-0 z-40"> <ul> ${navBarLinks.map((link) => renderTemplate`<li> <a class="block pl-4 py-3"${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : "_self", "target")}> ${link.title} </a> </li>`)} </ul> </div> </div> </nav> <div> <a${addAttribute(`mailto:${identity.email}`, "href")} class="block p-2 opacity-60 hover:opacity-100 transition-opacity" aria-label="Email"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:email", "width": 20, "height": 20 })} </a> </div> </div> </header> <main class="mb-32"> ${renderSlot($$result, $$slots["default"])} </main> <footer></footer> </body></html>`;
}, "/home/nick/Documents/my-website/src/layouts/Layout.astro", void 0);

export { $$Icon as $, aboutPageContent as a, $$Layout as b, blogPageContent as c, homePageContent as h, identity as i, projectsPageContent as p };