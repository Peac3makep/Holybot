const commando = require('discord.js-commando');
const holybot = new commando.Client();
holybot.registry.registerGroup('random', 'Random');!
holybot.registry.registerCommandsIn(__dirname + "/commands");

holybot.login("NDUwNjE1NjAwMzAyMTI5MTUy.De88OQ.7n08MAGKj4QLdYBvpLbGx3CBvF0");
holybot.on('message', (message) => {
    if(message.content == "!войти" && a == 1) 
       message.reply("Вы зарегистрированы <:senpai:451773127446233088> ")});
       
       holybot.on('message', message => {
        var guild = message.guild;
        let role = message.guild.roles.find("name", "Участник Турнира");
        let member = message.member;
      
      if (message.content == '!войти' && a == 1) {
          member.addRole(role).catch(console.error);
        }});

        holybot.on('message', message => {
          var guild = message.guild;
          let role = message.guild.roles.find("name", "Лукинг Фор Матч");
          let member = message.member;
        
        if (message.content == '!лфмhah234') {
            member.addRole(role).catch(console.error);
            message.channel.send(" <@&451383409768660992> <:DUCCERS:450955643470479371> ");}})

            holybot.on('message', message => {
              var guild = message.guild;
              let role = message.guild.roles.find("name", "Лукинг Фор Матч");
              let member = message.member;
            
            if (message.content == '!анлфмhah234') {
                member.removeRole(role).catch(console.error);
                message.reply("Вы вышли из поиска матча <:crowdDuck:440145681731158028> ")}});
holybot.on('message', (message) => {
    if(message.content == "!старт" && message.member.roles.has(<@328586086991396866>)) {
       message.channel.send("!here Набор открыт");
    a=1;}
    if(message.content == "!стоп" && message.member.roles.has(<@328586086991396866>)) {
       message.channel.send("!here Набор закрыт");
    a=0;}
    
});





                

                
                
 



