---
title: 'Configuring Static IP(Linux)'
date: '2025-01-14'
tags: 
  - Internet
  - sys-admin
  - Linux
  - Network
---
## Intro

Most of the time your private ip is just set by your router based on what ip is currently available. This works fine most of the time but there are cases where you might want a specific ip that is static and never changes. 

You can set this either on your computer or on the router if you have access to it. This will be specific to linux and this will be different on windows.

Whether to set it up on your computer or router is best, I am not sure. I had some issues when I did it on my computer so I would recommend the router if you can. 

## Setting up static ip(via computer)

There are several different ways to do this since there are different software to control the network on linux. I will be using NetworkManager and nmcli.  Also I am using Debian.

First write   
**nmcli conn show**  
This will show you what network connections you currently have, find the one you want to change to static and remember the connection name. 

Then you write these two lines:  
**nmcli connection modify \<connName\> ipv4.addresses 192.168.1.105**  
**nmcli connection modify \<connName\> ipv4.method manual**  
Where connName is the name you saw earlier and 192.168.1.105 is an example of a ip address you could have. Make sure whatever ip you choose is available on your network.

## Setting up static ip(via router)

If you want to do it via the router you need to make sure you have a username and a password for your router. In  your browser go to your routers ip address which should be:  
**192.168.1.1**  
Here you should be prompted for a username and password then you will be logged in to the router.  
Here you should find an option for setting a static ip address, exactly where could depend on what router you have. 

## Extra Reading

[Reddit Post about static ip](https://www.reddit.com/r/HomeNetworking/comments/npgfqv/best_way_to_set_static_ip_at_computer_level_andor/)  
[nmcli static ip guide](https://www.tecmint.com/nmcli-configure-network-connection/)

