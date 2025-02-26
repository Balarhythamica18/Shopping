import p1_img from './p1.png';
import p2_img from './p2.png';
import p3_img from './p3.png';
import p4_img from './p4.png';
import p5_img from './p5.png';
import p6_img from './p6.png';
import p7_img from './p7.png';
import p8_img from './p8.png';
import p9_img from './p9.png';
import p10_img from './p10.png';
import p11_img from './p11.png';
import p12_img from './p12.png';
import p13_img from './p13.png';
import p14_img from './p14.png';
import p15_img from './p15.png';
import p16_img from './p16.png';
import p17_img from './p17.png';
import p18_img from './p18.png';
import p19_img from './popular_1.png';
import p20_img from './popular_2.png';
import p21_img from './popular_3.png';
import p22_img from './popular_4.png';
import new23_img from './new_1.png';
import new24_img from './new_2.png';
import new25_img from './new_3.png';
import new26_img from './new_4.png';
import new27_img from  './new_5.png';
import new28_img from './new_6.png';

const allProducts = [
    {
        id: 1,
        name: "Chocolate Raspberry Pastry",
        category: "Cakes",
        image:p1_img,
        new_price: 85,
        old_price: 120   },
    {
        id: 2,
        name: "Red Velvet Creamy Pastry",
        category: "Cakes",
        image:p2_img,
        new_price: 120,
        old_price: 180,
    },
    {
        id: 3,
        name: "BlueBerry pastry",
        category: "Cakes",
        image:p3_img,
        new_price: 132,
        old_price: 190,
    },
    {
        id: 4,
        name: "RainBow Cake",
        category: "Cakes",
        image:p4_img,
        new_price: 465,
        old_price: 550,
    },
    {
        id: 5,
        name: "RainBow Sprinkle Pastry",
        category: "Cakes",
        image:p5_img,
        new_price: 110,
        old_price: 120,
    },
   
    {
        id: 6,
        name: "Apple Juice",
        category: "Juice",
        image:p6_img,
        new_price: 119,
        old_price: 139,
    },
    {
        id: 7,
        name: "Orange Juice",
        category: "Juice",
        image:p7_img,
        new_price: 25,
        old_price: 45,
    },
    {
        id: 8,
        name: "WaterMelon Juice",
        category: "Juice",
        image:p8_img,
        new_price: 72,
        old_price: 80,
    },
    {
        id: 9,
        name: "Kiwi Juice",
        category: "Juice",
        image:p9_img,
        new_price: 67,
        old_price: 98,
    },
    {
        id: 10,
        name: "Strawberry Mint Mojito",
        category: "Juice",
        image:p10_img,
        new_price: 85,
        old_price: 120,
    },
    {
        id: 11,
        name: "Samosa",
        category: "Snacks",
        image:p11_img,
        new_price: 25,
        old_price: 40,
    },
    {
        id: 12,
        name: "Pani Puri",
        category: "Snacks",
        image:p12_img,
        new_price: 60,
        old_price: 90,
    },
    {
        id: 13,
        name: "Sandwich",
        category: "Snacks",
        image:p13_img,
        new_price: 85,
        old_price: 90,
    },
    {
        id: 14,
        name: "French Fries",
        category: "Snacks",
        image:p14_img,
        new_price: 85,
        old_price: 120,
    },
    {
        id: 15,
        name: "Burger",
        category: "Snacks",
        image:p15_img,
        new_price: 90,
        old_price: 130,
    },
    {
        id: 16,
        name: "KitKat Gem Cake",
        category: "Cakes",
        image:p16_img,
        new_price: 950,
        old_price: 1200,
    },
    {
        id: 17,
        name: "Brown Honey Cake",
        category: "Cakes",
        image:p17_img,
        new_price: 1000,
        old_price: 1250,
    },
    {
        id: 18,
        name: "Mixed Donuts",
        category: "Cakes",
        image:p18_img,
        new_price: 35,
        old_price: 40,
    },
    {
        id: 19,
        name: 'Choco Lava Cup Cake',
        category: "Cakes",
        image: p19_img,
        new_price: 15,
        old_price:30,
      },
      {
        id: 20,
        name: 'Chocolate Pastry Cake',
        category: "Cakes",
        image: p20_img,
        new_price: 50,
        old_price: 80,
      },
      {
        id: 21,
        name: 'Fully Loaded Oreo Cake',
        category: "Cakes",
        image: p21_img,
        new_price: 550,
        old_price: 800,
      },
      {
        id: 22,
        name: 'Raspberries Pastry Cake',
        category: "Cakes",
        image: p22_img,
        new_price: 75,
        old_price: 80,
      },
      {
        id: 23,
        name: 'Pink Sprinkle Donut',
        category: "Cakes",
        image: new23_img,
        new_price: 70,
        old_price: 90,
      },
      {
        id: 24,
        name: 'Sev Puri',
        category: "Snacks",
        image: new24_img,
        new_price: 45,
        old_price: 60,
      },
      {
        id: 25,
        name: 'Strawberry Milkshakes',
        category: "Juice",
        image: new25_img,
        new_price: 80,
        old_price: 90,
      },
      {
        id: 26,
        name: 'Lemon with Mint Mojito',
        category: "Juice",
        image: new26_img,
        new_price: 50,
        old_price: 80,
      },
      {
        
        id: 27,
        name: 'Non-Veg Loaded Pizza',
        category: "Snacks",
        image: new27_img,
        new_price: 120,
        old_price: 140,
      },
      {
      
      id: 28,
      name: 'Chocolate Strawberry Browine',
      category: "Cakes",
      image: new28_img,
      new_price: 75,
      old_price: 90,
    },
    
];

export default allProducts;
