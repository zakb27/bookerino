import { v4 as uuid } from 'uuid';
const author1 = 'Stephen King';
const author2 = 'Jeff Kinney';
const author3 = 'Stan Lee';
const author4 = 'George R. R. Martin';
const author5 = 'Tom Clancy';
const author6 = 'Jane Austen';


export const db = [
    {
        id: uuid(),
        name:'Pet Sematary',
        author:'Stephen King',
        genre:'Horror',
        price:600,
        img:'https://d29xot63vimef3.cloudfront.net/image/bestselling-movies-2006/2946-1.jpg',
    },
    {
        id: uuid(),
        name:'The Shining',
        author:'Stephen King',
        genre:'Horror',
        price:650,
        img:'https://d29xot63vimef3.cloudfront.net/image/bestselling-mystery-thriller-2008/346-2.jpg',
    },
    {
        id: uuid(),
        name:'Diary of a wimpy kid',
        author:'Jeff Kinney',
        genre:'Comedy',
        price:400,
        img:'https://d29xot63vimef3.cloudfront.net/image/bestsellers-2007/1711-1.jpg',
    },
    {
        id: uuid(),
        name:'Diary of a wimpy kid - Rodrick Rules',
        author:'Jeff Kinney',
        genre:'Comedy',
        price:400,
        img:'https://d29xot63vimef3.cloudfront.net/image/bestsellers-2008/105-7.jpg',
    },
    {
        id: uuid(),
        name:'Diary of a wimpy kid - The Last Straw',
        author:'Jeff Kinney',
        genre:'Comedy',
        price:450,
        img:'https://d29xot63vimef3.cloudfront.net/image/bestsellers-2008/22-5.jpg',
    },
    {
        id: uuid(),
        name:'Fantastic Four #505',
        author:'Stan Lee',
        genre:'Comics',
        price:500,
        img:'https://d29xot63vimef3.cloudfront.net/image/fantastic-four/505-1.jpg',
    },
    {
        id: uuid(),
        name:'Ultimate Spider-Man #78',
        author:'Stan Lee',
        genre:'Comics',
        price:550,
        img:'https://d29xot63vimef3.cloudfront.net/image/ultimate-spider-man/78-1.jpg',
    },
    {
        id: uuid(),
        name:'Daredevil #85',
        author:'Stan Lee',
        genre:'Comics',
        price:899,
        img:'https://d29xot63vimef3.cloudfront.net/image/daredevil/85-1.jpg',
    },
    {
        id: uuid(),
        name:'SSN',
        author:'Tom Clancy',
        genre:'Spy',
        price:300,
        img:'https://d29xot63vimef3.cloudfront.net/image/misc-games/3908-1.jpg',
    },
    {
        id: uuid(),
        name:'Covert Ops',
        author:'Tom Clancy',
        genre:'Spy',
        price:450,
        img:'https://d29xot63vimef3.cloudfront.net/image/misc-games/5103-1.jpg',
    },
    {
        id: uuid(),
        name:'Splinter Cell',
        author:'Tom Clancy',
        genre:'Spy',
        price:850,
        img:'https://d29xot63vimef3.cloudfront.net/image/misc-games/5863-1.jpg',
    },
    {
        id: uuid(),
        name:'Net Force 3',
        author:'Tom Clancy',
        genre:'Spy',
        price:450,
        img:'https://d29xot63vimef3.cloudfront.net/image/heyne-books/237-3.jpg',
    },
    {
        id: uuid(),
        name:'Ghost Recon',
        author:'Tom Clancy',
        genre:'Army',
        price:550,
        img:'https://d29xot63vimef3.cloudfront.net/image/misc-games/6670-1.jpg',
    },
    {
        id: uuid(),
        name:'A Game of Thrones',
        author:'George R.R Martin',
        genre:'Fantasy',
        price:980,
        img:'http://www.georgerrmartin.com/wp-content/uploads/2013/03/GOTMTI2.jpg',
    },
    {
        id: uuid(),
        name:'A Clash of Kings',
        author:'George R.R Martin',
        genre:'Fantasy',
        price:790,
        img:'http://www.georgerrmartin.com/wp-content/uploads/2012/08/clashofkings.jpg',
    },

    {
        id: uuid(),
        name:'A Storm of Swords',
        author:'George R.R Martin',
        genre:'Fantasy',
        price:845,
        img:'http://www.georgerrmartin.com/wp-content/uploads/2013/03/stormswordsMTI.jpg',
    },{
        id: uuid(),
        name:'A Feast for Crows',
        author:'George R.R Martin',
        genre:'Fantasy',
        price:880,
        img:'http://www.georgerrmartin.com/wp-content/uploads/2012/08/feastforcrows.jpg',
    },
    {
        id: uuid(),
        name:'A Dance with Dragons',
        author:'George R.R Martin',
        genre:'Fantasy',
        price:999,
        img:'http://georgerrmartin.com/gallery/art/dragons05.jpg',
    },

]