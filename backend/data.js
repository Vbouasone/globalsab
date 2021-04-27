import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
          name: 'Bouasone',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'Sab',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],

    products: [
        {
            
            name: 'REVO',
            category: 'Car',
            image:'/images/car.jpeg',
            price: 98,
            countInStock: 10,
            brand: 'TOYOTA',
            rating: 4.5,
            numReviews: 10,
            description: ' High quality product',
        },
        {
            
            name: 'Shirt',
            category: 'Car',
            image:'/images/p1.jpg',
            price: 165,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 8,
            description: ' High quality product',
        },
        {
            
            name: 'Jeans',
            category: 'Car',
            image:'/images/p2.jpg',
            price: 125,
            countInStock: 8,
            brand: 'Adidas',
            rating: 5,
            numReviews: 20,
            description: ' High quality product',
        },
        {
            
            name: 'Muna',
            category: 'Pants',
            image:'/images/p3.jpg',
            price: 130,
            countInStock: 0,
            brand: 'Puma',
            rating: 3,
            numReviews: 10,
            description: 'High quality product',
        },
        {
            
            name: 'Jean2',
            category: 'Pants',
            image:'/images/p4.jpg',
            price: 134,
            countInStock: 10,
            brand: 'Adidas',
            rating: 1,
            numReviews: 10,
            description: ' High quality product',
        },
        {
            
            name: 'Shirt2',
            category: 'Shirt',
            image:'/images/p5.jpg',
            price: 110,
            countInStock: 6,
            brand: 'Puma',
            rating: 2,
            numReviews: 20,
            description: 'High quality product',
        },
    ],
};

export default data;