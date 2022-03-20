'use strict';const COMMANDS={fb:{name:"Facebook",url:"https://facebook.com/",searchurl:"https://www.facebook.com/search/top/?q=",category:"Search"},mw:{name:"Messenger Web",url:"https://www.messenger.com/",category:"Social Media"},wa:{name:"WhatsApp Desktop App",url:"whatsapp://",category:"Social Media"},waw:{name:"WhatsApp Web",url:"https://web.whatsapp.com/",category:"Social Media"},gm:{name:"Gmail",url:"https://mail.google.com/mail/u/0",searchurl:"https://mail.google.com/mail/u/",category:"Mail"},gd:{name:"Google Drive",url:"https://drive.google.com/drive/u/0",searchurl:"https://drive.google.com/drive/u/",category:"File Storage"},yt:{name:"YouTube",url:"https://youtube.com/",searchurl:"https://www.youtube.com/results?search_query=",category:"Search"},gh:{name:"GitHub",url:"https://github.com/",searchurl:"https://www.github.com/search?q=",category:"Programming"},r:{name:"Reddit",url:"https://reddit.com/",searchurl:"https://www.reddit.com/search?q=",category:"Social Media"},l:{name:"Linkedin",url:"https://linkedin.com/",category:"Social Media"},ig:{name:"Instagram",url:"https://instagram.com/",searchurl:"https://instagram.com/",category:"Social Media"},tw:{name:"Twitter",url:"https://twitter.com/",searchurl:"https://twitter.com/search?q=",category:"Social Media"},g:{name:"Google",url:"https://google.com/",searchurl:"https://www.google.com/search?q=",category:"Search"},n:{name:"Netflix",url:"https://netflix.com/",searchurl:"https://www.netflix.com/search?q=",category:"Streaming"},pv:{name:"Amazon Prime Video",url:"https://www.amazon.co.uk/Amazon-Video/",searchurl:"https://www.amazon.co.uk/s?i=instant-video&ref=nb_sb_noss_2&k=",category:"Streaming"},wiki:{name:"Wikipedia",url:"https://en.wikipedia.org",searchurl:"https://en.wikipedia.org/wiki/",category:"Search"},kz:{name:"Kaizen",url:"http://kaizenep.com",category:"Medical"},nhs:{name:"NHS Portal",url:"https://portal.nhs.net",category:"Medical"},ol:{name:"Outlook",url:"https://outlook.office.com/mail/",category:"Mail"},db:{name:"Dribbble",url:"https://dribbble.com",searchurl:"https://dribbble.com/search/",category:"Design"},al:{name:"Anaesthetic Logbook",url:"https://forms.gle/sqQX8zA1te85BZ1H8",category:"Medical"},bl:{name:"jchui bunnylol",url:"https://jchui.github.io/bunnylol",category:"Search"},pw:{name:"Patchwork Health",url:"https://app.patchwork.health/shifts",category:"Medical"},DEFAULT:{name:"Default - Google Search",url:"https://google.com/",searchurl:"https://www.google.com/search?q=",category:"Search"}},viewHelpPage=function(){const a=Object.keys(COMMANDS).map(a=>{const b=COMMANDS[a];return{name:b.name,url:"<a href=\""+b.url+"\">"+b.url+"</a>",command:a,category:b.category}});$("#help-table").DataTable({data:a,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"},{data:"category",title:"Category"}],order:[[3,"asc"]],paging:!1})},redirect=async function(a){await window.location.replace(a)},bunnylol=async function(a){let b=[];if(a.startsWith("$")?(b=a.split(/[ $+]/g),b[0]="$",""===b[1]&&(b=["$"])):b=a.split(/[ +]/g),0<b.length){const c=b[0].endsWith(".")?b[0].substring(0,b[0].length-1).toLowerCase():b[0].toLowerCase();if(c in COMMANDS){const d=COMMANDS[c],e=new URL(d.url).protocol;if("https:"!==e&&"http:"!==e&&viewHelpPage(),d.searchurl&&1!==b.length){const b="$"===c?c.length:c.length+1;return await redirect(`${d.searchurl}${encodeURIComponent(a.substr(b))}`),!0}return await redirect(d.url),!0}}return!1},currCmd=new URL(window.location.href).searchParams.get("search")??"help";switch(currCmd){case"help":viewHelpPage();break;default:bunnylol(currCmd).then(a=>{!a&&COMMANDS.DEFAULT.searchurl&&redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`)}).catch(a=>{console.log(a)});}