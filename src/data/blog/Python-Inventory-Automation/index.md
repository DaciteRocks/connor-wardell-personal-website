---
category: 'blog'
cover: './python.jpg'
title: 'Python Inventory Automation'
description: 'Automate Taking Inventory Process'
date: '2018-11-13'
tags: ['Python', 'Automation']
published: true
---





I recently got interested in automating simple computer tasks using python. 

![](./python.jpg)

**Why?**

The main reason for my interest was because at the ASU Bookstore every week we had to do inventory on the computers. This was a two set process where two employees would count the physical computers and then another employee would take that count and cross check it with the stores database. For every different item we would have to input the items SKU, wait 2-3 seconds for the system to load, and then write down the database count marking if there was any discrepancy with the physical count. For a few items this wouldn’t seem so bad but we had several hundred different items we would have to look up, which usually took an hour or two to complete. Because this was weekly this made the task even more burdensome. 

Since it was such a simple and repetitive task I figured it was perfect for automation. I wanted to get more experience programming in Python so I chose that as the language I would use. I didn’t have any sort of access to the database besides the simple user interface we were currently using so I couldn’t run database queries or anything like that. I could only simulate the way we were currently searching. After doing some research I found PyAutoGUI, a module that programmatically controls the mouse and keyboard. 

**Implementation**

Using this I was able to create a script that took a text document as input and over the course of 20 minutes would write the quantities of each item in another text document by controlling the mouse and keyboard. I put the database UI on one half of the screen and a blank text document on the other. The script would run a search of the database, wait until the quantity appeared, and then copy and pasted this quantity into the blank text document. 

It took several iterations before it became reliable. One issue was that originally I had the script click on certain parts of the UI using screen coordinates. This proved unreliable because of screen resolution or the database UI changes. The solution was to find where to click using photos of specific parts of the UI which was a feature of PyAutoGui. Because those parts didn’t change based on the screen resolution or slight changes in the UI it worked well. 

Another issue was the time it took for the database to return a quantity. It was highly variable, taking less than a second some days and up to 20 seconds other days. At first I just had it wait 15 seconds before going to copy the quantity. This for obvious reasons did not work very well. The solution involved detecting the change in the UI when a result was returned by using the same photo detection feature. 

**Feedback**

The script is now reliable and hasn’t broken since the last update. Both my coworkers and my boss were very happy with it and we use it weekly. In total it brought the time it takes an employee to do the second part of inventory from an hour and a half on average to less than 10 minutes of actual work. It is easy to change the list of SKUs that it searches because the SKUs are in a text document. 

**Conclusion**

Overall it was a very successful and useful project. It saves time and makes the entire process much more pleasant. I gained more experience in Python and now can easily automate simple tasks. In my opinion there should be some easier way to query the database that the employees can have access to. There might be but either my boss doesn’t know about it, it isn’t implemented into the database UI that we use, or it requires some higher authorization level that they don’t trust the employees with. More likely no one really cared because even though it was tedious and time consuming it worked. Regardless this project worked and worked well. 

