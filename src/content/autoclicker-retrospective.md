---
ID:1
title: What I'd Do Differently If I Built My Autoclicker Software Again
date: 2026-07-09
slug: autoclicker-retrospective
description: Looking back at the decisions I made while building my autoclicker and the lessons it taught me about planning software.
image: /blogimages/1/thumbnail.png
Tech: Python,C#,WPF,Software Design
---

# What I'd Do Differently If I Built My Autoclicker Software Again

When I first started building my autoclicker, my goal was simple: "I've used alot of autoclickers in the past, I should make one to see how they work".

Like many side projects, though, it quickly grew beyond its original scope. Features were added, ideas evolved, and before long I was learning lessons that had very little to do with autoclicking—and everything to do with software engineering.

Looking back, there are a few things I'd do differently.

---

<br>

# Choosing the Right Technology

### The Original Plan

The project originally started life in **Python**.

At the beginning, Python was the obvious choice. It was easy to use, which allowed for fast prototyping, had many community-made libraries.

For projects I was only going to use a few times, such as a live OCR reader and input automation, it was the clear choice.

However, partway through development of my autoclicker, I realised that Python wasn't the best fit.

For the original prototypes, the UI was rendered using Tkinter because it was what I had always used in other projects. I then found that making Tkinter anything close to modern would be a huge pain.

I had looked into the available options, which led me to tkinter.ttk, a library which allowed for community made widget sets. However as this was a project I wanted to have on my portfolio, I wanted everything to be written by me as much as possible.

Another issue I had was that load times were taking a few seconds, which wasn't the end of the world, but if there was a better option, I'd see what I could do.

---

<br>

### The C# Transition

A friend suggested WPF to me as they had used it before and knew it would be more performant.

I had less experience with C# than i did with python, but it didnt seem to be an issue as alot of the GUI formatting was simple to understand after a few tutorials.
After redesigning the UI in WPF and learning how to use the Windows API's PInvoke's (which ended up taking longer than I'd care to admit), it ran much better.

Consistently snappy startups and much lower memory usage (down to 90kb from 60mb) solved most of the issues I had..

Except one:

<img src="/blogimages/1/defaultWPFUI.png" alt="an unstyled WPF UI" width="60%" height="50%" />

The Default Formatting still looked plain...

But this time I did research on what i could do to give it a more modern design.

I started working on the designs top to bottom, so the title bar was up first. From what I could find out, there were two ways to change it. I could either go use the simple customization level and change the bar colour, window name and icon, even with those changes it still felt plain. So i went with option B: Hide the entire bar and add an icon, title bar and window controls to the top of my UI.

Even though the Microsoft Documentation calls it the advanced option, it was a simple change. Adding buttons, text and an icon took maybe half an hour at most, and most of that was looking for the documentation on what i had to add to my backend to control the windows and let it be draggable, resizing wasnt nessecessary ad the program was designed to be one size.

From there, the rest was simple, i just had to create custom control template for the controls that i used so that i could have easily reusable buttons and areas that had my own custom styling, which saved on copying code to make each individual button. The only downside to this was that i manually had to create visual states and triggers for each control, so that when they were hovered over or clicked they actually did something instead of staying the same, but again this didn't take too long to add.

A small addition I learnt about near the end of designing my custom control templates was that you could have a Resource Dictionary, which was functionally a CSS Stylesheet which wouild work between all my controls. The UI was already done but just to keep the code clean, I created one and implemented it into the controls that were already made.

And with those changes we have....

<img src="/blogimages/1/finishedWPFUI.png" alt="Fully-styled WPF UI" width="60%" height="50%" />

A much sleeker and modern UI!

### Lesson Learned

> Before I start a project, instead of going with the comfortable choice, I need to do my research and find the best option.

---

<br>

# Planning Before Coding

<br>

This was probably my biggest mistake.

My development process looked something like this:

> "That feature would be useful... I'll just build it."

Then...

> "Actually... this feature would be nice too."

Repeat.

Without a clear roadmap, the project slowly became a collection of features rather than a well-designed application.

That led to problems like:

- Constant refactoring
- Features being difficult to integrate
- Code becoming harder to maintain
- Spending more time deciding _where_ code belonged than writing it

A little planning upfront would have saved hours later.

### If I rebuilt it today...

I'd begin with:

- A clearly-scoped Feature list
- Application architecture
- Folder structure
- UI mockups
- Data flow
- Future expansion plans

Only after that would I start writing code.

<br>

---

<br>

# Software Design Documentation Matters

<br>

One thing this project taught me is just how valuable **Software Design Documentation** really is.

Good documentation forces you to answer questions _before_ they become problems.

Things like:

- What does the application actually do?
- How do different components communicate?
- How will new features fit into the architecture?
- What happens six months from now when I revisit this project?

Instead of making design decisions on the fly, you already have a blueprint to work from.

That doesn't just make development easier.

It makes the entire project easier to understand.

---

<br>

# What this ended up leading into

<br>

This project has ended up becoming one of the reasons I'm now building **Structara**.

While working on my projects, I realised there wasn't an easy way to create and maintain software design documentation without using multiple disconnected tools.
There are already a large amount of tools to help with documentation of code, but they all happen after the fact and don't help with pre-production.

I wanted something that made planning software feel as natural as writing the code itself.

That's the goal behind Structara.

A place where developers can quickly document:

- Architecture
- Components
- Requirements
- Workflows
- Project documentation

before they dive into implementation.

If I'd had something like Structara when I started this project, I would have avoided many of the mistakes I made.

---

# Final Thoughts

<br>

I don't regret rebuilding the application in C#, it taught me a new skillset and let me see how different it is to develop between different langauges.

Those mistakes taught me lessons that have shaped how I approach every project since.

The biggest takeaway wasn't learning WPF or improving my architecture skills.

It was learning that **good software starts long before the first line of code is written.**

Planning, documentation, and thoughtful design aren't things you add later—they're what make successful projects possible in the first place.
