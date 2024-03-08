const express = require("express");
const router = express.Router();
const config = require("../config");
const strapi = require("./strapi");

// WEB MIDDLEWARE
router.use((req, res, next) => {
  req.CUSTOM_VAR = "TEST";
  next();
});

router.get("/", async (req, res) => {
  let menu = await strapi.getMenu();
  let row = await strapi.getHome();
  let homeGrowth = await strapi.getHomeGrowths();
  let homeEconomicCorp = await strapi.getHomeEconomicCorp();
  let latestUpdates = await strapi.getLatestUpdates();
  let upcomingEvents = await strapi.getUpcomingEvents();
  let common = await strapi.getCommon();
console.log("abc");
  res.render("pages/home", {
    activePage: "Home",
    API_URL: config.API_URL,
    data: row,
    homeGrowth,
    homeEconomicCorp,
    latestUpdates,
    upcomingEvents,
    menu,
    common,
    isHomePage: true,
    layout: "main_layout.hbs",
  });
});

router.get("/about", async (req, res) => {
  let menu = await strapi.getMenu();
  let row = await strapi.getAbout();
  let common = await strapi.getCommon();
  res.render("pages/about", {
    activePage: "About Us",
    API_URL: config.API_URL,
    data: row,
    menu,
    common,
    layout: "main_layout.hbs",
  });
});

router.get('/test', async (req, res) => {
    // let menu = await strapi.getMenu();
    let upcomingEvents = await strapi.getUpcomingEvents();
    res.json(upcomingEvents);
    return false;
})

router.get("/technology", async (req, res) => {
  let menu = await strapi.getMenu();
  let row = await strapi.getTechnology();
  let benefits = await strapi.getBenefits();
  let buildingLifeCycleSlider = await strapi.getBuildingLifeCycleSlider();

  res.render("pages/technology", {
    API_URL: config.API_URL,
    data: row,
    benefits,
    menu,
    buildingLifeCycleSlider,
    layout: "main_layout.hbs",
  });
});

router.get("/services", async (req, res) => {
  let menu = await strapi.getMenu();
  let row = await strapi.getServices();
  let LoadPrediction = await strapi.getLoadPrediction();
  let AnalyticsDashboard = await strapi.getAnalyticsDashboard();
  let MinimizeDowntime = await strapi.getMinimizeDowntime();
  res.render("pages/services", {
    API_URL: config.API_URL,
    data: row,
    menu,
    LoadPrediction,
    AnalyticsDashboard,
    MinimizeDowntime,
    layout: "main_layout.hbs",
  });
});

router.get("/insights/:mode", async (req, res) => {
  let menu = await strapi.getMenu();
  let row = await strapi.getInsights();
  let { mode } = req.params;

  let data = [];
  let apiMode = "";
  if (mode == "CaseStudy") {
    let response = await strapi.getCaseStudies();
    data = response;
    apiMode = "case-studies";
  } else if (mode == "Video") {
    let response = await strapi.getVideos();
    data = response;
    apiMode = "videos";
  } else if (mode == "JediViews") {
    let response = await strapi.getJediViews();
    data = response;
    apiMode = "jedi-views";
  }

  res.render("pages/insights", {
    API_URL: config.API_URL,
    data: row,
    menu,
    ROWS: data,
    mode,
    apiMode,
    layout: "main_layout.hbs",
  });
});

router.get("/press/:mode", async (req, res) => {
  let menu = await strapi.getMenu();
  let row = await strapi.getInsights();
  let { mode } = req.params;

  let data = [];
  let apiMode = mode;
  if (mode == "media-coverages") {
    let response = await strapi.getMediaCoverages();
    data = response;
  } else if (mode == "press-releases") {
    let response = await strapi.getPressReleases();
    data = response;
  } else if (mode == "jedi-news") {
    let response = await strapi.getJediNews();
    data = response;
  }
  res.render("pages/press", {
    API_URL: config.API_URL,
    data: row,
    menu,
    ROWS: data,
    mode,
    apiMode,
    layout: "main_layout.hbs",
  });
});

router.get("/contact", async (req, res) => {
  let menu = await strapi.getMenu();
  let row = await strapi.getContact();

  res.render("pages/contact", {
    API_URL: config.API_URL,
    data: row,
    menu,
    layout: "main_layout.hbs",
  });
});

router.get("/privacy-policy", async (req, res) => {
  let menu = await strapi.getMenu();
  let row = await strapi.getPrivacyPolicy();

  res.render("pages/privacy", {
    API_URL: config.API_URL,
    data: row,
    menu,
    layout: "main_layout.hbs",
  });
});

module.exports = router;
