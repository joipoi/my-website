---
title: 'Using the Slack API'
date: '2020-01-02'
tags: 
  - api
  - programming
---
## Intro

I was doing a project with my raspberry pi and I wanted some way for it to alert me when something happened. I could have it send me a mail or a notification but I ended up having it send me a slack message. This was achieved easily by using the slack api.

For this to work you need a slack account and a Slack workspace. Then this will let you create a bot that sends a message to this slack workspace when you want it to.

## Intro

I found a [tutorial](https://api.slack.com/tutorials/tracks/posting-messages-with-curl) that is good and straightforward. You could just follow this and do well but here is a quick summary.

* Go to the link  
* Click Create App  
* Sign into slack if you are not already and pick a workspace  
* Follow the step to create an app and generate a token.  

test if your token works by using curl(here you should use your own token) **curl \-d "token=xoxb-not-a-real-token-this-will-not-work" https://slack.com/api/auth.test**  


 Send a curl request: **curl \-d "text=Hi I am a bot that can post messages to any public channel." \-d "channel=C123456" \-H "Authorization: Bearer xoxb-not-a-real-token-this-will-not-work" \-X POST https://slack.com/api/chat.postMessage**

On the last point you should change the channel to be the channel you want the message to be in. And again remember to use the token you generated and not "**xoxb-not-a-real-token-this-will-not-work".**

## Extra Reading

[What is Curl](https://www.freecodecamp.org/news/how-to-start-using-curl-and-why-a-hands-on-introduction-ea1c913caaaa/)

