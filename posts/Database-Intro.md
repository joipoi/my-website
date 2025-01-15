---
title: 'Database Intro'
date: '2025-01-14'
tags: 
  - database
  - sys-admin
---

## What is a database

If you have some kind of project where you need to store data, you have a couple of options. You could store that data in normal files in a format like json or xml. The other option you have is storing your data in a database. 

I think when you are storing a small amount of simple data you don't have any need for a database. But if you scale up and have more data with more structure, a database becomes a must. I will be focusing on the type of database called a "relational database". There is another type of database but it is not as common.

## Which relational database to use

Even among relational databases there are a lot of options to choose from. However if you are new and want something simple the obvious answer is mysql. It is the most common and does the job well.

There is another database called mariadb which is very similar to mysql so much so that you could use that one and barely notice a difference if you are a beginner. Almost everything you learn about mysql will apply to mariadb too.

## Downloading your database

### Windows

For windows i recommend using mysql and not mariadb since it is a lot easier to download and start using. You can simply go to their website and download an installer which will guide you through it.

When you are using mysql you can decide if you want to just use the terminal to do everything or if you want a special program with a GUI that could make it easier if you are not used to using the terminal. If you want that you should also download the thing called mysql workbench. 

If you do get the workbench I think it should be pretty easy to understand and use. If you are using the terminal you can read below where i show some commands.

### Linux(Debian based)

With linux you could get mysql or mariadb and it will be basically the same. I will go with mariadb for this example. On a debian based OS you would write this:  
**sudo apt install mariadb-server**  
This should install and start everything, you can check it worked by writing:  
**sudo systemctl status mariadb**

## Terminal Commands

To start doing things with your database you write  
**mysql \-u root \-p**  
which will prompt you for your password and then you are in "database mode" where you can start writing other commands. Keep in mind you should end your commands with a semi-colon Here are some useful commands:

* **show databases;** \- shows all databases you have  
* **use \<database\>;** \- selects one database   
* **show tables;** \- Shows all the tables of the selected database  
* **describe \<table\>;** \- Shows the table structure of a table in the selected database.  
* **select \* from \<table\>;** \- shows all the data in a table  
* **exit;** \- exits the "database mode"

For any other commands you will be using SQL which I will not go into here but you can learn that on the internet.

## Extra Reading

[Install mariaDB linux guide](https://phoenixnap.com/kb/how-to-install-mariadb-ubuntu)  
[Windows mysql downloads](https://dev.mysql.com/downloads/)  
