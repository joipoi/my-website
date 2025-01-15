---
title: 'Apace basics'
date: '2025-01-13'
tags: 
  - linux
  - sys-admin
  - apache
---

# Apache

Apache is the most commonly used web-server available and is easy to use for experts and beginners. It is commonly used on linux computers but works on any operating system.

To get started using Apache you will need to download it and start it. There are many things you can configure but the defaults will work fine to get started.

If you want to download for windows there are several options that should all guide you through it and make it easy which you can look up. I will write the rest of this guide for linux because that is what I used.

## Download

Installing apache on a linux machine should be easy, simply use your OS package manager. However a tricky thing is that for some OS's it is called apache2 and others it is called httpd. For Debian/Ubuntu it would look like this:  
**sudo apt install apache2**

## File Locations

Here are some important directories that you need to know when you start configuring your web-server.

* **/etc/apache2/apache2. conf(httpd.conf) \-** This is where you will be doing the main configuration for your web-server.  
* **/var/www/html \-** This is by default where your web-server files will be, when you install apache you will find just one file here called index.html.  
* **/etc/apache2(httpd)** \- Other than the main configuration file you can also find other files in this directory. For example: sites-enabled, mod-enabled which have other configurations.  
* **/var/log/apache2(httpd) \-** Log file for apache

## Configurations

If you are gonna start configuring apache it is good practice to make a backup of the httpd.conf file so you can revert back if you mess something up. 

### Change default server root file

By default when users go to your web-server apache will load the file called index.html. You can change this to some other file, either if you want the html file to have a different name or if you want a php file instead. You do this by adding a line in the main configuration file(apache2.conf), which might look like this:  
**DirectoryIndex  intro.html index.html**  
In this example we are telling the server to first look for a file called intro.html and if it can't find it, use index.html instead. You can have more files in this list and it will look for all of them in order.

### Change default server root directory

By default your server files will be in the directory /var/www/ this can be changed. This is not done in the main conf file and instead in the directory /etc/apache2/sites-available. 

Each file in that directory represents one site on your web server. By default there is only one called 000-default.conf, in that file you simply change the line: DocumentRoot /var/www/html to whatever you want your directory to be.

### Environment Variables

You can have add environment variables to your web server which you can use in code that you write later. For example you could store the username and password of your database like this. You configure this in the main auth file, like this:  
**SetEnv DB\_USER "joel"**  
Here DB\_USER is the variable name and joel is the value. You can lookup how you use environment variables in your programming language.

## Modules

By default you don't get everything available in apache but you can turn on modules when you want to use them. There are many modules and most of them you will probably never use, but some of them can be useful. Here are some examples:

* **mod\_ssl** \- A module for SSL/HTTPS stuff  
* **mod\_status** \- A module that gives you extra information about your web server  
* **mod\_auth** \- A module for locking some files behind authentication.  
* **mod\_headers** \- A module for handling HTTP Headers.

## Terminal commands

There are some terminal commands that are good to know:

* a2ensite  \<siteName\> \- turns on a specific site  
* a2dissite \<siteName\> \- turns off a specific site  
* a2enmod \<modName\> \- turns on a specific module  
* a2dismod \<modName\> \- turns off a specific module  
* systemctl restart apache2 \- restarts apache(for debian based os)  
* systemctl stop apache2 \- stops apache(for debian based os)  
* systemctl start apache2 \- starts apache(for debian based os)

## Extra Reading

[Windows download options](https://httpd.apache.org/docs/current/platform/windows.html#down)  
[Apache file locations](https://www.phusionpassenger.com/library/install/apache/working_with_the_apache_config_file.html)  
[Apache Module List](https://httpd.apache.org/docs/2.4/mod/)