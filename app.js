const Eris = require("eris");
const keepAlive = require('./server');
const pager = "```"

var bot = new Eris.CommandClient("dog", {}, {
    description: "Reverse Gudako",
    owner: "sin",
    prefix: "$"
});

bot.on("ready", () => {
    console.log("I am up and running");
    
    bot.editStatus("online", {
        name:"Chaldea sadSong",
        type: 1,
        url: "https://www.twitch.tv/arteezy" // 0 = playing | 1 = streaming (Twitch only) | 2 = listening | 3 = watching
    });
});
bot.registerCommandAlias("mafuyu", "mafu"); // Alias ganti neng eris client


var echoCommand = bot.registerCommand("gu", (msg, args) => { // Make an echo command
    if(args.length === 0) { // trigger nek kosong
        return "Invalid input";
    }
    dog = String(args).replace(/,/g, "+") // filteran string
    babi = String(args).replace(/,/g, " ")
    var text = bot.createMessage(msg.channel.id, {
        embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
          author: {
            name: msg.author.username,
            icon_url: msg.author.avatarURL
          },
          footer: { // Footer text
            icon_url: bot.user.avatarURL,
            text: "Reverse Gudako, invoked by " + msg.author.username,
             },
          thumbnail: {
              url: bot.user.avatarURL
          },
            fields: [
                {
                  name: `Your args/query: \n${pager}${babi}${pager}\n`,
                  value: `
                --------
                  StackOverflow [#stuck](https://stackoverflow.com/search?q=${dog})
                  StackExchange [#unix](https://unix.stackexchange.com/search?q=${dog})
                  Quora [#query](https://www.quora.com/search?q=${dog})
                  Reddit [#search](https://www.reddit.com/search/?q=${dog})
                  GitHub [#issues](https://github.com/search?q=${dog}&type=Issues)
                  CodeProject [#query](https://www.codeproject.com/search.aspx?q=${dog})
                  `
                },
                {
                  name: "🌎SearchEngine",
                  value: `
                  Google [#search?](https://www.google.com/search?q=${dog})
                  `
                }
                
              ]
        }
    });+ args.join(" "); // Make a string of the text after the command label
    return text; // Return the generated string
});


var echoCommand = bot.registerCommand("illu", (msg, args) => { 
    if(args.length === 0) { // trigger nek kosong
        return "Invalid input";
    }
    dog = String(args).replace(/,/g, "+") // filteran string
    babi = String(args).replace(/,/g, " ")
    var text = bot.createMessage(msg.channel.id, {
        embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
          author: {
            name: msg.author.username,
            icon_url: msg.author.avatarURL
          },
          footer: { // Footer text
            icon_url: bot.user.avatarURL,
            text: "Reverse Gudako, invoked by " + msg.author.username,
             },
          thumbnail: {
              url: bot.user.avatarURL
          },
            fields: [
                {
                  name: `Illustrator Tracker,\ntrack yer fav illust to get latest artwork isn't always bad.\n\nQuery: *${dog}* \n${pager}0${pager}\n`,
                  value: `
                --------
                nhentai [#${babi}](https://nhentai.net/artist/${dog})
                Mal [#${babi}](https://myanimelist.net/people.php?q=${dog})
                Booru [#${babi}](https://danbooru.donmai.us/posts?tags=${dog})
                hitomi [#${babi}](https://hitomi.la/search.html?${dog})
                Twitter [#${babi}](https://www.twitter.com/${dog})


                  `
                },
                {
                    name: `${pager}1${pager}`,
                    value: `
                    hentai2Read [#${babi}](https://hentai2read.com/hentai-list/artist/${dog})
                    simply-hentai [#${babi}](https://www.simply-hentai.com/search?utf8=&query=${dog})
                    hsearcher [#${babi}](http://www.hmangasearcher.com/search?key=${dog})
                    e-hentai [#${babi}](https://e-hentai.org/tag/artist:${dog})
                    yandere [#${babi}](https://yande.re/wiki/show?title=${dog})
                    hcafe [#${babi}](https://hentai.cafe/artist/${dog})
                    eRolord[#${babi}](http://erolord.com/artist/${dog})
                    Pixiv [#${babi}](https://www.pixiv.net/search_user.php?s_mode=s_usr&nick=${dog})
                    `
                  },
                  {
                    name: `${pager}2${pager}`,
                    value: `
                    luscious [#${babi}](https://luscious.net/search/?q=${dog})
                    asmH [#${babi}](https://asmhentai.com/artists/name/${dog})
                    theHworld [#${babi}](https://thehentaiworld.com/tag/${dog})
                    hDesi [#${babi}](https://hentai.desi/tag/${dog})
                    Tsumino [#${babi}](https://www.tsumino.com/Books#?Artist=${dog})
                    rule34 [#${babi}](https://rule34hentai.net/user/${dog})
                    `
                  },
                  {
                    name: `${pager}3${pager}`,
                    value: `
                    Doujins [#${babi}](https://doujins.com/artists/${dog})
                    Pururin [#${babi}](https://pururin.io/tags/artist/${dog})
                    Hbrowse [#${babi}](https://www.hbrowse.com/browse/artist/${dog})
                    pervedeN [#${babi}](http://www.perveden.com/en/en-directory/?artist=${dog})
                    erofus [#${babi}](https://www.erofus.com/comics/hentai-and-manga-english/${dog})
                    hFox [#${babi}](https://hentaifox.com/artist/${dog})
                    `
                  }
                
              ]
        }
    });+ args.join(" "); // Make a string of the text after the command label
    return text; // Return the generated string
});

echoCommand.registerSubcommand("reverse", (msg, args) => { 
    if(args.length === 0) { 
        return "Invalid input";
    }
    var text = args.join(" "); 
    text = text.split("").reverse().join(""); // Reverse the string
    return text; // Return the generated string
}, {
    description: "Make the bot say something in reverse",
    fullDescription: "Reverse your code debug/stuck or fixing from each vendor.",
    usage: "<text>" // Alias ganti neng eris client ngisor dewe
});

echoCommand.registerSubcommandAlias("backwards", "reverse"); // Alias "!echo backwards" to "!echo reverse"

keepAlive();
bot.connect();