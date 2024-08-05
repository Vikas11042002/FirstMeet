// Set Change Interval
const MINUTE = 10;

// Define Theme Data
const THEME = [
    { 
        imageUrl: './images/cover-image-1.jpg', 
        imageOverlay: 'linear-gradient(45deg, rgba(20, 11, 27, 0.8), rgba(51, 3, 48, 0.8))', 
        colorPrimary: 'rgb(232, 202, 250)', 
        colorSecondary: 'rgb(158, 142, 167)' 
    },
    { 
        imageUrl: './images/cover-image-2.jpg', 
        imageOverlay: 'linear-gradient(135deg, rgba(27, 11, 21, 0.8), rgba(3, 14, 51, 0.8))', 
        colorPrimary: 'rgb(250, 202, 222)', 
        colorSecondary: 'rgb(167, 142, 161)' 
    },
    { 
        imageUrl: './images/cover-image-3.jpg', 
        imageOverlay: 'linear-gradient(225deg, rgba(27, 21, 11, 0.8), rgba(6, 3, 51, 0.8))', 
        colorPrimary: 'rgb(250, 221, 202)', 
        colorSecondary: 'rgb(167, 152, 142)' 
    },
    { 
        imageUrl: './images/cover-image-4.jpg', 
        imageOverlay: 'linear-gradient(315deg, rgba(27, 11, 11, 0.8), rgba(3, 20, 51, 0.8))', 
        colorPrimary: 'rgb(202, 211, 250)', 
        colorSecondary: 'rgb(142, 154, 167)' 
    },
    { 
        imageUrl: './images/cover-image-5.jpg', 
        imageOverlay: 'linear-gradient(45deg, rgba(49, 18, 18, 0.8), rgba(2, 31, 7, 0.8))', 
        colorPrimary: 'rgb(211, 230, 204)', 
        colorSecondary: 'rgb(151, 158, 151)' 
    },
];

// Image Caching
THEME.forEach((elem) => new Image().src = elem.imageUrl);

// Start Iterating
let i = 1;

window.setInterval(() => {
    
    if (i == THEME.length) i = 0;

    document.body.style.backgroundImage = `${THEME[i].imageOverlay}, url(${THEME[i].imageUrl})`;
    document.documentElement.style.setProperty('--color-pop', THEME[i].colorPrimary);
    document.documentElement.style.setProperty('--color-pop-subtitle', THEME[i].colorSecondary);

    i++;

}, MINUTE * 60 * 1_000);
