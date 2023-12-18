const langs =  require("langs")
const franc = require("franc")
const figlet = require("figlet");
const colors = require("colors");

// console.log(langs.all());

const languageCode = franc("Tänään on keskiviikko!");
const language = langs.where("3", languageCode);


if (languageCode === 'und') {
    console.log("Sorry not found language code");
}

figlet(language.name, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(`Our best guess is: ${data.green}`);
  });