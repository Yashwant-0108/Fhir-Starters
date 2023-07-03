export default {
  title: "Adocs",
  description: "An awesome docs template built by me",

  themeConfig: {
    logo: "/assets/images/Fire-Starters-logo.png",
    siteTitle: "",
    // Navbar Link
    nav: [
      // { text: "About", link: "/about" },
      // { text: "Contact", link: "/contact" },
      // { text: "Guide", link: "/guide" },
      // { text: "Configs", link: "/configs" },
      { text: "UI Components", link: "/ui-components/ui-components" },
      // {
      //   // Dropdown Menu
      //   text: "Changelog",
      //   items: [
      //     { text: "v0.0.1", link: "/item-1" },
      //     { text: "v0.0.2", link: "/item-2" },
      //     { text: "v0.0.3", link: "/item-3" },
      //   ],
      // },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "github.com/evavic44" },
      // { icon: "twitter", link: "https://twitter.com/victorekea" },
      // { icon: "discord", link: "..." },
      // {
      //   icon: {
      //     svg: '<svg role="img" width="26.01" height="32" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>',
      //   },
      //   link: "https://google.com",
      // },
    ],
    
    // Sidebar
    sidebar: [
      {
        text: "Overview",
        collapsed: false,
        items: [
          { text: "Intro", link: "/ui-components/overview/overview" },
          { text: "Base Components", link: "/ui-components/overview/base" },
          { text: "Card", link: "/ui-components/overview/card" },
          { text: "Banner", link: "/ui-components/overview/banner" },
          { text: "Table", link: "/ui-components/overview/table" },
        ],
      },
      {
        text: "Patient",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/patient/patient-card" },
          { text: "Banner", link: "ui-components/patient/patient-banner" },
          { text: "Table", link: "ui-components/patient/patient-table" },
        ],
      },
      {
        text: "Practitioner",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/practitioner/practitioner-card" },
          { text: "Banner", link: "ui-components/practitioner/practitioner-banner" },
          { text: "Table", link: "ui-components/practitioner/practitioner-table" },
        ],
      },
      {
        text: "Immunization",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/immunization/immunization-card" },
          { text: "Banner", link: "ui-components/immunization/immunization-banner" },
          { text: "Table", link: "ui-components/immunization/immunization-table" },
        ],
      },
      {
        text: "Medication Request",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/medication-request/medication-request-card" },
          { text: "Banner", link: "ui-components/medication-request/medication-request-banner" },
          { text: "Table", link: "ui-components/medication-request/medication-request-table" },
        ],
      },
      {
        text: "Allergy Intolerance",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/allergy-intolerance/allergy-intolerance-card" },
          { text: "Banner", link: "ui-components/allergy-intolerance/allergy-intolerance-banner" },
          { text: "Table", link: "ui-components/allergy-intolerance/allergy-intolerance-table" },
        ],
      },
      {
        text: "Observation",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/observation/observation-card" },
          { text: "Banner", link: "ui-components/observation/observation-banner" },
          { text: "Table", link: "ui-components/observation/observation-table" },
        ],
      },
      {
        text: "Condition",
        collapsed: true,
        items: [
          { text: "Card", link: "ui-components/condition/condition-card" },
          { text: "Banner", link: "ui-components/condition/condition-banner" },
          { text: "Table", link: "ui-components/condition/condition-table" },
        ],
      },
    ],
    footer: {
      message: '<footer><div class="container"> <div class="row"> <div class="col-sm-12"> <div class="footer-inner"> <div class="left content"> <a class="logo" href="/"> <img src="assets/images/Fire-Starters-logo.png" alt="" /> </a> <div class="social-list"> <a href="javascript:void(0)"> <h2> <i class="fa fa-facebook-official text-gray-dark" aria-hidden="true" ></i> </h2> </a> <a href="javascript:void(0)"> <h2> <i class="fa fa-twitter text-gray-dark" aria-hidden="true" ></i> </h2> </a> <a href="javascript:void(0)"> <h2> <i class="fa fa-linkedin text-gray-dark" aria-hidden="true" ></i> </h2> </a> </div> </div> <div class="middle content"> <h2 class="mb-3 text-primary">Reach Out to Us</h2> <p class="mb-2 text-dark fw-semibold"> validitron@unimelb.edu.au </p> <p class="text-dark fw-semibold">Phone: 13 MELB (13 6352)</p> </div> <div class="right content"> <h2 class="mb-3 text-primary">Address</h2> <p class="mb-2 text-dark fw-semibold"> Parkville VIC 3010, Australia </p> </div> </div> </div> </div> </div> </footer>',
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
