---
title: 'Database: Import and Export'
date: '2020-01-02'
tags: 
  - database
  - sys-admin
---
## Intro

When you are working with a mysql/mariadb database you are either using the terminal or using the mysql workbench. If you are using the workbench then importing and exporting can be relatively easy, but if you are using the terminal it can be a bit tricky. I wanted to show you how I import and export my databases.

To import or export with the terminal you will need some privileges and therefore you should either do it as root or as a user that has most privileges. 

If you are on windows and you find that no mysql commands work, then you might need to set an environment variable, which you can do like this:  
**set path=c:\\wamp\\bin\\mysql\\mysql5.1.36\\bin**  
Make sure that the filepath is pointing to the bin directory of your mysql installation.

## Exporting

The command you will be using to export is called **mysqldump**. There are different options you can pass to it depending on what kind of export you want. The default export will include all the data but will not create a database so you need to have one ready. This could look like this:  
**mysqldump  \-u joel \-p \> dump.sql**  
This runs the command as the user joel and will then prompt you for a password for that user. Remember that the user must have enough privileges. 

You could either dump just the table structure or just the table data using either **\--no-data** or **\--no-create-info** respectively. 

You can also have the export create a database instead of using an already existing database:  
**mysqldump \-d \-u joel \-p \--databases my\_database \> dump.sql**  
where my\_database is the name you want it to have.

## Importing

Importing is a little bit simpler, just run this command in the directory where your dump file is:  
**mysql \-u joel \-p my\_database \< dump.sql**  
This will run is as the user joel and import it into the database my\_database. 

However keep in mind that things will change depending on how you did your export. If you exported just data and no table structure, then the tables structure should already be set up. Same if you exported to create a new database, then you don't need a database ready.

## Extra reading

[Import and Export with MySQL Workbench](https://dev.mysql.com/doc/workbench/en/wb-admin-export-import-management.html)  
[Dumping Table Definitions and Content Separately](https://dev.mysql.com/doc/refman/8.4/en/mysqldump-definition-data-dumps.html#:~:text=The%20%2D%2Dno%2Ddata%20option,file%20contains%20only%20table%20data).