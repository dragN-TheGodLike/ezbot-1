const r = require("rethinkdb");
let connection = null;

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
})

module.exports = {
  // no other solution came to mind to be able to use functions in every
  // file without re-declaring them in each file
  
  db: require("quick.db"),
  Discord: require("discord.js"),
  get bot() {
    return new this.Discord.Client();
  },
  brawlStarsJS: require('brawlstars.js'),
  get brawlStars() {
    return new this.brawlStarsJS.Client(process.env.BRAWL_TOKEN)
  },
  connection: connection;

}
