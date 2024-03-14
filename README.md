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

![image info](https://lh3.googleusercontent.com/drive-viewer/AKGpihabjU1YpJ80jrfy0rdzsidq8mwNAqMqCxPoKZIZzT9zOn8PGZvk8ajGgs8miQugNoA4KZ4z5QZMNPJTj7JhybRV_-pHOA=w3584-h1846) # new-tab-chrome-extension
