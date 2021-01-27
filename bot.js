const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message =>{
  if(message.content === prefix + 'server'){
    var yaman = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name}`)
.setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, size: 2048 }))
.setTimestamp()
.setColor("RED")
.setTitle(`SERVER INFO معلومات السيرفر`)
.setDescription(`**
Server Name : \`${message.guild.name}\`

Server ID : \`${message.guild.id}\`

Members : \`${message.guild.memberCount}\`

Server Owner : \`${message.guild.owner}\`
**`)
    message.channel.send(yaman)
  }
})

 client.on('message', message =>{
    
    if(message.content.startsWith(prefix + 'avatar')){
        let args = message.content.substring(prefix.length).split(" ");
        
        const user = message.mentions.users.first()
        if (!user && !args[1]) {
           
           const uavatar = message.author.avatarURL({ size: 4096, dynamic: true })
           const embed3 = new Discord.MessageEmbed()
               .setTitle(`${message.member.user.username} avatar`)
               .setDescription(`[Avatar URL of **${message.member.user.username}**](${uavatar})`)
               .setColor('RANDOM')
               .setImage(uavatar)
           message.channel.send(embed3)
       } 
      


       if (args[1] === 'server') {
        
        const savatar = message.guild.iconURL({ size: 4096, dynamic: true })
        const embed2 = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} avatar`)
            .setDescription(`[Avatar URL of **${message.guild.name}**](${savatar})`)
            .setColor('RANDOM')
            .setImage(savatar)
        message.channel.send(embed2)
       
       }
       
               
               
       
               if (user) {
                   const avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
       
       
                   const embed = new Discord.MessageEmbed()
                       .setTitle(`${user.username} avatar`)
                       .setDescription(`[Avatar URL of **${user.username}**](${avatar})`)
                       .setColor('RANDOM')
                       .setImage(avatar)
                   message.channel.send(embed)
               }
       }
  })
  
  client.on('message', badboy => {
  if(badboy.content.startsWith("زق")){
    if (badboy.author.bot || !badboy.guild) return

 

    const muterole = badboy.guild.roles.cache.find(r => r.name === "Muted");
  
   badboy.member.roles.add(muterole)
   badboy.delete()
     const log = badboy.guild.channels.cache.find(channel => channel.name === "log");// اسم الروم هنا
    var embed = new Discord.MessageEmbed()
.setDescription(`
تم اسكات ${badboy.author.username}
بسبب السب
`)
log.send(embed)
  }
})

client.on('message', message => {
  if (message.guild) return undefined;
  var roomid = "";
  var secound = 5; //عدد الثواني المحددة
  var room = client.channels.cache.get(roomid);
  if (!room) return undefined;
  var emb = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setThumbnail(message.author.avatarURL())
  .setFooter(`From ${message.author.tag}`)
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`**Message from ${message.author} in dm**\n\`\`\`apache\nMessage:\n${message.content}\`\`\``)
  .setFooter(`${message.author.tag}`)
  .setThumbnail(message.author.displayAvatarURL())
  .setTimestamp();
  room.send(emb);
});//『CR』亗〆Ť I G E R〆亗#0245

client.on('message', badboy => {
if(badboy.content.startsWith(prefix + "kick")){
const kicks = badboy.content.split(" ").slice(2).join(" ")
const kicklog = badboy.guild.channels.cache.find(channel => channel.name === "log");// اسم الروم هنا
if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

   if(!badboy.guild.me.hasPermission('KICK_MEMBERS')) return badboy.reply('البوت لا يمتلك صلاحية للطرد')
            if(!badboy.member.hasPermission('KICK_MEMBERS'))return badboy.reply('انت ما في عندك صلاحية للطرد')

const user = badboy.mentions.users.first();
if (user.id == badboy.author.id)
        return badboy.channel.send("وتف؟؟")

if(!user) return badboy.channel.send("منشن الشخص")
if(!kicks) return badboy.channel.send("اكتب السبب")
      badboy.guild.member(user).kick(kicks, user).then(() => {
badboy.channel.send(`:white_check_mark: Kicked.`)
 })
const embed = new Discord.MessageEmbed()
.setTitle("NEW kick")
.addField("اسم الشخص", `${user}`)
.addField("ايدي الشخص", `${user.id}`)
.addField("السبب", `${kicks}`)
.addField("تم طرده بواسطة", `${badboy.author.username}`)
kicklog.send(embed)
}
})

client.on('message', badboy => {
if(badboy.content.startsWith(prefix + "ban")){
  if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

const bans = badboy.content.split(" ").slice(2).join(" ")
const banlog = badboy.guild.channels.cache.find(channel => channel.name === "log");// اسم الروم هنا
   if(!badboy.guild.me.hasPermission('BAN_MEMBERS')) return badboy.reply('البوت لا يمتتلك صلاحيات للتبنيد')
            if(!badboy.member.hasPermission('BAN_MEMBERS'))return badboy.reply('انت لا تمتلك صلاحيات للتبنيد')

const user = badboy.mentions.users.first();
if (user.id == badboy.author.id)
        return badboy.channel.send("وتف؟؟")

if(!user) return badboy.channel.send("منشن الشخص")
if(!bans) return badboy.channel.send("اكتب السبب")
 badboy.guild.member(user).ban(bans, user);      
const embed = new Discord.MessageEmbed()
.setTitle("NEW Banned")
.addField("اسم الشخص", `${user}`)
.addField("ايدي الشخص", `${user.id}`)
.addField("السبب", `${bans}`)
.addField("تم تبنيده بواسطة", `${badboy.author.username}`)
banlog.send(embed)
}
})

client.on('message', message => { 

//OT bad boy 

if(message.content.startsWith(prefix + "server")){ 

    if (message.author.bot || !message.guild) return message.reply("this command for server only") 

 

//OT bad boy 

var EMBED = new Discord.MessageEmbed() 

.setTitle("server info") 

.addField("server name", `${message.guild.name}`) 

.addField("server id", `${message.guild.id}`) 

.addField("server owner", `${message.guild.owner}`) 

.addField("members", `${message.guild.memberCount}`) 

.addField("Server roles", `${message.guild.roles.cache.size}`) 
 .addField("channel", `${message.guild.channels.cache.filter(r => r.type === "text").size} Text
      ${message.guild.channels.cache.filter(r => r.type === "voice").size} Voice`)

.addField("server region", `${message.guild.region}`) 

.addField("Verification Level", `${message.guild.verificationLevel}`) 

.addField("created in", `${message.guild.createdAt.toLocaleString()}`) 

.addField("Boost", `${message.guild.premiumSubscriptionCount}`) 

 
.setThumbnail(`${message.guild.iconURL({dynamic : true})}`)

.setAuthor(`${message.guild.name}`)
.setFooter(`request by ${message.author.username}`)
.setColor("BLUE") 
message.channel.send(EMBED) 

} 

}) 


 
