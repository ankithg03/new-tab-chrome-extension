# Chrome Extension New Tab Wallpaper

This repo contains a chrome extension which you can use to display random walpapers with qoutes and animations as soon as you open a new tab.

In order to use this extension, run- 
- `git clone`
- Open Chrome > Settins > More tools > Extensions OR open `chrome://extensions/` in chrome
- In the Extensions page, tick Developer mode on the top righ corner.
- Click `Load unpacked-extension`.
- Choose the cloned repo and you are Done!

Whenevr you open a new tab a beautiful random wallpaper to would show up everytime with a special qoute of the day.

Add your image path and additional data in the display.js config
```
const data = {
    "name": "Ankith G",
    "backgroundImage": "assets/images/1.png",
    "discountImage": "assets/images/naruto.jpeg",
    "profileImage": "/src/assets/images/me.jpg",
    "headerLinks": [
        {
            "title": "Home",
            "link": "#",
            "active": true,
        },
        {
            "title": "Namely",
            "link": "https://corra.namely.com/",
        },
        {
            "title": "Google",
            "link": "https://google.com/",
        },
        {
            "title": "Drive",
            "link": "https://drive.google.com/",
        }
        // Add more header links as needed
    ],
    "destinations": [
        {
            "address": "363 Bloomfield Avenue, 3rd Floor, Suite C Montclair, NJ, 07042",
            "distance": "42.8m"
        },
        {
            "address": "340 Madison Ave, 3rd floor suite a, New York, NY 10173",
            "distance": "42.8m"
        }
        // Add more destinations as needed
    ]
}
```

![image info](https://github.com/ankithg03/new-tab-chrome-extension/blob/main/src/Screenshot%202024-03-15%20at%2012.12.44%20AM.png?raw=true) # new-tab-chrome-extension
