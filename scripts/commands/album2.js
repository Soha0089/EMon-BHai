module.exports.config = {
	name: "album2",
	version: "1.0.3",
	permssion: 0,
	credits: "video",
   prefix: 'awto',
	description: "video album",
	category: "user",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("====「 𝐕𝐈𝐃𝐄𝐎 」====\n━━━━━━━━━━━━━\n₁.ₐₑₛₜₕₑₜᵢc\n₂.ₐₙᵢₘₑ\n₃.cₐₜ\n₄.cₒᵤₚₗₑ\n₅.fₗₒwₑᵣ\n₆.fᵤₙₙy\n₇.ₕₒᵣₙy\n₈.ᵢₛₗₐₘᵢc\n₉.ₗₒfᵢ\n₁₀.ₗyᵣᵢcₛ\n₁₁.ₛₐd\n₁₂.ₛᵢgₘₐ\n₁₃.ᵥᵢdₑₒ\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.url;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "✧˖° 𝐀𝐋𝐁𝐔𝐌 𝐕𝐈𝐃𝐄𝐎 °˖✧\n ",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "http://fi3.bot-hosting.net:20536/video/aesthetic";
        else if ("2" == a.body)
         var   h = "http://fi3.bot-hosting.net:20536/video/anime";
        else if ("3" == a.body)
         var   h = "http://fi3.bot-hosting.net:20536/video/cat";
        else if ("4" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/video/couple";
        else if ("5" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/video/flower";
        else if ("6" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/video/funny";
        else if ("7" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/video/horny";
        else if ("8" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/video/islamic";
        else if ("9" == a.body)
         var   h = "http://fi3.bot-hosting.net:20536/video/lofi";
        else if ("10" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/video/lyrics";
        else if ("12" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/video/sad";
        else if ("12" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/video/sigma";
        else if ("13" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/video/video";
        else if ("14" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/video/status";
        else if ("15" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/video/tik";
        return { p, h };
    }
};
		  
