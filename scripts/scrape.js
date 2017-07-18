// scrape script
// =============

// Require request and cheerio, making our scrapes possible
var request = require("request");
var cheerio = require("cheerio");

// This function will scrape the NYTimes website (cb is our callback)
var scrape = function(cb) {

  // Use the request package to take in the body of the page's html
  request("https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-state/virginia-scholarships/", function(err, res, body) {
    // body is the actual HTML on the page. Load this into cheerio

    // Saving this to $ creates a virtual HTML page we can minipulate and
    // traverse with the same methods we'd use in jQuery
    var $ = cheerio.load(body);

    // Make an empty array to save our article info
    var scholarships = [];

    // Now, find and loop through each element that has the "theme-summary" class
    // (i.e, the section holding the articles)
    console.log($(".innertube"));
  console.log($(".innertube")["0"]);
    // After our loop is complete, send back the array of articles to the callback function
   
  });
};
scrape(); 
// Export the function, so other files in our backend can use it
module.exports = scrape;
