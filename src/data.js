import firstimg from '../src/img/first-img.png';
import secondimg from '../src/img/second-img.png';
import thirdimg from '../src/img/third-img.png';

const cards = [
  {
    id: 1,
    img: firstimg,
    rating:'5.0',
    reviewCount: 6,
    country:"USA",
    title:"Life Lessons with Katie Zaferes",
    price: 136,
    openSpots: 0,
  },
  {
    id: 2,
    img: secondimg,
    rating:'5.0',
    reviewCount: 30,
    country:"USA",
    title:"Learn wedding photography",
    price: 125,
    openSpots: 27,
  },
  {       
    id: 3,   
    img: thirdimg,
    rating:'4.8',
    reviewCount: 2,
    country:"USA",
    title:"Group Mountain Biking",
    price: 50,
    openSpots: 3,
  }
]

export default cards;