# CyberpunkRPG
Site containing information for the finished Cyberpunk 2020 RPG. 

Designed by myself and coded from scratch. 

Also a perfect way to learn React for the first time, Create-React-App, front-end patterns, state management and more. I tried to make it minimal without too many extra libraries, extra npm packages or CSS helpers like bootstrap and SASS. 

This project is quite old and was done before hooks was a thing and with minimal React knowledge.

It is hosted here: https://sondre.gg/CyberpunkRPG/ (and on GitHub Pages).

## Credentials

Terminal access (not available in production): 

Username is **admin**.

Password is **Choomba**.

## Personal lessions:
I've learned quite a lot during this project about React and how it works, far better knowledge about CSS Grid, CSS modules and more than I can even list here. 

However there are a few things I'd do different if I was to create this from scratch:

### **Use hooks.**

React Hooks was unfortunately not out by the time this project was started and was released during development. There's a lot of class boilerplate due to not using hooks.

### **Mobile first**

Do mobile first development instead of desktop first as this would help immensely with placement.

### **Use react-router from the beginning.**

I added it near the end of the development process and due to that a lot of strange boilerplate code had to be created to "fix" paths so the buttons were properly active and so on.

### **Images should not have been duplicated.**

To correctly place the mobile version and the desktop version of each picture I added two img tags per component. Mobile first would help with this.

### **The text should have been loaded when the picture was done loading and not the other way around**

I found that GH pages was extremely slow compared to the development environment. Thus images loaded far later than the text, and fixing this was unfortunately really tricky to do without some insane refactoring. If Suspense was properly out, it would be easier.

### **Reusable CSS**

This project is reusing some CSS all around, but there's still way too much duplicated CSS sections. 

### **Sketch before developing**

A lot of the development process on this was just trying and failing on the design. I'm clearly a developer, not a designer, but sketching out the site in XD or some other program would help immensely with getting a consistent site.

### **Commit more often**

The classic fault of creating giant commits instead of smaller ones. 

Otherwise I'm happy with how the project turned out. The development time used on this was probably somewhere between 100-150 hours.

