---
title: 'Getting started with raspberry pi'
date: '2025-01-10'
tags: 
  - raspberry-pi
  - linux
  - sys-admin
---
## Contents

## What is a Raspberry Pi?

A raspberry pi is a small computer about the size of a phone that you can buy for cheap and use to learn about computing/networking/linux and more. There are many different models of Raspberry Pi, the main model series from 1-5 and special models zero and pico. A standard model costs somewhere around $50 dollars. 
 
The one I had was the Raspberry Pi 3 but that is kinda old and you can now get a Raspberry Pi 5\. Since I had Model 3 some of the information in this article might be incorrect or outdated.

## Operating System

A Raspberry Pi has its own Operating System called Raspberry Pi OS (previously called Raspbian). It is very similar to the Debian OS so the things you learn with your Pi should also teach you about Debian.

When you buy a Raspberry Pi it will come with an operating system already installed but if you want to update to a newer version or use a different operating system you can do that.

You can download a program called Raspberry Pi Imager which lets you install the OS on a usb drive which you can then connect to your PI, more on that later.

## Getting started with your Raspberry Pi

So let's say you have bought your Pi and you want to get started using it, what is the first thing you need to do? Well the first thing is to connect it to power, when i bought mine it came with a cable to connect to a power outlet. If you don't have one, you should find one to purchase. After that you have two options on how to proceed.

### Connect with keyboard, mouse, and monitor

The Raspberry Pi has several usb ports which you can use to connect keyboard and mouse easily. Connecting to the monitor can be a bit trickier. There is only a hdmi port in the Pi so you will need a cable that goes from your monitor to HDMI. 

If you have that you can go on and connect everything and if the power is on you should see something on the monitor. Then you can use the mouse and keyboard to start using your Pi.

### Connect with SSH

Most of the time when you are working with a Raspberry Pi you don't want to be forced to connect a bunch of things to it everytime. You can instead control if from your main computer, this is done with SSH. 

If you don't know what SSH is you can read the guide i linked below or look it up on google. It is just a way to connect 2 computers that is used a lot when working with linux computers. 

To use SSH your computer needs to be connected to the internet. If you have an ethernet cable this becomes easy, if you want to connect to wifi it can be trickier. You could just connect a keyboard, mouse and monitor once to set up the wifi and then use SSH after. There is also an option to set this up if you are using Raspberry Pi Imager to install an OS. 

If you are connected to the internet and the power is on you should now be able to connect with SSH from your main computer.

## Storage

For storage a Raspberry Pi uses a Micro SD Card. This will store the operating system and all of your files and programs. If you want to move some files into this card for example an operating system you will need some way to move data from a usb drive to a Micro SD card. You can buy an adapter for this which you will need if you plan to use the Raspberry Pi Imager.

## Extra Reading

[Raspberry Pi models](https://www.raspberrypi.com/products/)  
[Raspberry Pi OS](https://www.raspberrypi.com/software/)  
[Guide to SSH](https://opensource.com/article/20/9/ssh)  
[Another raspberry pi getting started guide](https://www.raspberrypi.com/documentation/computers/getting-started.html)