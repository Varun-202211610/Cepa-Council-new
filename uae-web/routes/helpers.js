var register = function (Handlebars) {
  var helpers = {
    getFirstMediaUrl: function (data) {
      if (data) {
        return data[0].url;
      } else {
        return null;
      }
    },
    dateHelper: function (date) {
      var outputDate = date.toISOString().substring(0, 10);
      return outputDate;
    },
    ifEquals: function (value, match) {
      if (value == match) {
        return true;
      } else {
        return false;
      }
    },
    dateHelper1: function (date) {
      return new Date(date).toISOString().substring(0, 10);
    },
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    // register helpers
    for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
    // just return helpers object if we can't register helpers here
    return helpers;
  }
};

module.exports.register = register;
module.exports.helpers = register(null);
