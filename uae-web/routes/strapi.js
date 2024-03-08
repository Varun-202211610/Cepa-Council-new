const config = require('../config')
const axios = require('axios')


function getHome() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/home`).then(function (response) {
            resolve(response.data)
            console.log(response.data);
        }).catch(function (error) {
            resolve({ error })
        })
    })
}
function getCommon() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/common`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getHomeGrowths() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/home-growth-opportunities?_limit=6`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}


function getHomeEconomicCorp() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/areas-economic-corps`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}


function getServices() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/services`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

// function getLatestUpdates() {
//     return new Promise((resolve, reject) => {
//         axios.get(`${config.API_URL}/latest-updates?_limit=3`).then(function (response) {
//             resolve(response.data)
//         }).catch(function (error) {
//             resolve({ error })
//         })
//     })
// }

function getLatestUpdates() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/latest-updates?_sort=_id:desc`).then(function (response) {
            resolve(response.data)
            console.log(response.data);
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getUpcomingEvents() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/upcoming-events?_limit=3&_sort=_id:desc`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getBenefits() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/benefits`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getServices() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/our-services`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getInsights() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/insights`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}


function getMenu() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/menus?_sort=_id:asc`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getLoadPrediction() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/load-predictions`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getMinimizeDowntime() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/minimize-downtimes`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getAnalyticsDashboard() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/analytics-dashboards`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getContact() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/contact-us`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getAbout() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/about`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getLeaderships() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/leaderships`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getPrivacyPolicy() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/privacy-policy`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}


function getBuildingLifeCycleSlider() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/building-lifecycle-years`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getPressReleases() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/press-releases`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getMediaCoverages() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/media-coverages`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}


function getJediNews() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/jedi-news`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getMilestones() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/milestones?_sort=Year:asc`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getCaseStudies() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/case-studies`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getVideos() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/videos`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getJediViews() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/jedi-views`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getMediaCoverages() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/media-coverages`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getPressReleases() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/press-releases`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

function getJediNews() {
    return new Promise((resolve, reject) => {
        axios.get(`${config.API_URL}/jedi-news`).then(function (response) {
            resolve(response.data)
        }).catch(function (error) {
            resolve({ error })
        })
    })
}

module.exports = {
    getCommon,
    getMenu,
    getHome,
    getHomeGrowths,
    getServices,
    getLatestUpdates,
    getUpcomingEvents,
    getBenefits,
    getInsights,
    getLoadPrediction,
    getAnalyticsDashboard,
    getMinimizeDowntime,
    getContact,
    getAbout,
    getLeaderships,
    getPrivacyPolicy,
    getBuildingLifeCycleSlider,
    getPressReleases,
    getMediaCoverages,
    getJediNews,
    getMilestones,
    getCaseStudies,
    getVideos,
    getJediViews,
    getMediaCoverages,
    getPressReleases,
    getJediNews,
    getHomeEconomicCorp
}