const browserObject = require('./browser');
const scraperController = require('./pageController');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
let goibibo = 'https://www.goibibo.com/hotels/hotels-in-ahmedabad-ct/';
let makemytrip = 'https://www.makemytrip.com/hotels/ahmedabad-hotels.html';
let bookngdotcom = 'https://www.booking.com/city/in/ahmedabad.en-gb.html';
let tripadvisor = 'https://www.tripadvisor.in/Hotels-g660181-Rajkot_Rajkot_District_Gujarat-Hotels.html';//'https://www.tripadvisor.in/Hotels-g303878-Bhuj_Kutch_District_Gujarat-Hotels.html';//'https://www.tripadvisor.in/Hotels-g297612-Surat_Surat_District_Gujarat-Hotels.html';//'https://www.tripadvisor.in/Hotels-g297608-Ahmedabad_Ahmedabad_District_Gujarat-Hotels.html';
let trivago = 'https://www.trivago.in/?aDateRange%5Barr%5D=2022-02-22&aDateRange%5Bdep%5D=2022-02-23&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=85528%2F200&hasList=1&hasMap=1&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=20000&address=&addressGeoCode=&offset=0&ra=&overlayMode=';
let google = 'https://www.google.com/travel/hotels/Ahmedabad?g2lb=4596364%2C4685401%2C4258168%2C4605863%2C4401769%2C4624411%2C4306835%2C2503771%2C2502548%2C4317915%2C4647135%2C4419364%2C4597339%2C4371335%2C2503781%2C4270442%2C4640247%2C4641139%2C4649665%2C4677860%2C4284970%2C4270859%2C4291517&hl=en-IN&gl=in&ssta=1&ap=aAE&q=hotels%20in%20ahmedabad&rp=EO6OiJXLlcPDXhCZ7YjyvKTR7moQvOHk0cyZnqd1EJ3Gs4j4yrHPlAE4AUAASAKiARJBaG1lZGFiYWQsIEd1amFyYXQ&ictx=1&sa=X&ved=0CAAQ5JsGahcKEwi4nNicv_f1AhUAAAAAHQAAAAAQAg&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaNgoYEhQ6EkFobWVkYWJhZCwgR3VqYXJhdBoAEhoSFAoHCOYPEAIYDBIHCOYPEAIYDRgBMgIQACoLCgcoAToDSU5SGgA';
let agoda = 'https://www.agoda.com/en-gb/search?city=6613';
//1= goibibo, 2 = makemytripe, 3 = bookngdotcom, 4 = tripadvisor, 5 = trivago, 6 = google , 7 = agoda 
let website_url;
let paramkey = 4;
switch (paramkey) {
    case 1:
        website_url = goibibo;
        break;
    case 2:
        website_url = makemytrip;
        break;
    case 3:
        website_url = bookngdotcom;
        break;
    case 4:
        website_url = tripadvisor;
        break;
    case 5:
        website_url = trivago;
        break;
    case 6:
        website_url = google;
        break;
    case 7:
        website_url = agoda;
        break;
}
scraperController(browserInstance, website_url, paramkey)