export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "Sailhost",
      description:
        "Sailhost is a platform for hosting and managing your own websites.",
    },
    theme: {
      color: "slate",
      radius: 0.5,
      customizable: false,
    },
    header: {
      showTitle: false,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo.svg",
      },
      nav: [],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/sail-host/cloud",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "Copyright © 2024",
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/sail-host/cloud",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/sail-host/cloud",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/sail-host/cloud/issues",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
