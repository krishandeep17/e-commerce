import img1 from "./products/apple-watch-series-9-aluminum.png";
import img2 from "./products/apple-tv-4k-wifi.png";
import img3 from "./products/11-inch-ipad-pro-512gb-space-gray.png";
import img4 from "./products/apple-pencil-1st-generation.png";
import img5 from "./products/apple-iphone-15-pro-1tb-blue-titanium.png";
import img6 from "./products/apple-iphone-15-pro-max-256gb-natural-titanium.png";
import img7 from "./products/13-inch-macbook-air-256gb-space-gray.png";
import img8 from "./products/14-inch-macbook-pro-12-core-1tb-space-black.png";
import img9 from "./products/airpods-pro-2nd-generation.png";
import img10 from "./products/15-inch-macbook-air-2tb-midnight.png";
import img11 from "./products/airpods-max.png";
import img12 from "./products/apple-ipad-air-256gb-purple.png";
import img13 from "./products/apple-iphone-14-128gb-blue.png";
import img14 from "./products/apple-watch-ultra-2.png";
import img15 from "./products/silver-lamicall-adjustable-laptop-riser.png";

export const products = [
  {
    _id: "1",
    name: "Apple Watch Series 9 Solo Loop (Aluminum) - Midnight",
    image: img1,
    description:
      "Introducing the Apple Watch Series 9 Solo Loop in Midnight Aluminum. Elevate your fitness and style with seamless design, advanced health features, and the convenience of the Solo Loop band.",
    category: "watches",
    price: 499,
    countInStock: 10,
    rating: 3.6,
    numReviews: 10,
    createdAt: "2024-06-01T17:59:39+05:30",
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Excellent product, highly recommend!",
        createdAt: "2024-06-09T12:00:00Z",
      },
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Very good quality but a bit pricey.",
        createdAt: "2024-06-10T15:30:00Z",
      },
      {
        user: "Sam Wilson",
        rating: 3,
        comment: "Average experience, expected more features.",
        createdAt: "2024-06-11T09:45:00Z",
      },
      {
        user: "Anna Lee",
        rating: 5,
        comment: "Absolutely love it! Great value for money.",
        createdAt: "2024-06-12T18:20:00Z",
      },
      {
        user: "Mark Taylor",
        rating: 2,
        comment: "Not satisfied with the performance.",
        createdAt: "2024-06-13T08:10:00Z",
      },
      {
        user: "Lucy Brown",
        rating: 4,
        comment: "Good product but delivery was delayed.",
        createdAt: "2024-06-13T21:05:00Z",
      },
      {
        user: "Peter Johnson",
        rating: 5,
        comment: "Exceeded my expectations in every way!",
        createdAt: "2024-06-14T11:30:00Z",
      },
      {
        user: "Emily Davis",
        rating: 3,
        comment: "Decent, but there are better options available.",
        createdAt: "2024-06-14T14:00:00Z",
      },
      {
        user: "Michael Scott",
        rating: 1,
        comment: "Very disappointed, would not buy again.",
        createdAt: "2024-06-14T16:25:00Z",
      },
      {
        user: "Rachel Green",
        rating: 4,
        comment: "Good quality but slightly overpriced.",
        createdAt: "2024-06-14T19:10:00Z",
      },
    ],
  },
  {
    _id: "2",
    name: "Apple TV 4K Wi-Fi",
    image: img2,
    description:
      "Experience stunning visuals and immersive audio with the Apple TV 4K. Stream your favorite shows and movies with ultra-fast Wi-Fi connectivity.",
    category: "tv-home",
    price: 179,
    countInStock: 15,
    rating: 4.8,
    numReviews: 22,
    createdAt: "2024-11-02T10:16:23+05:30",
  },
  {
    _id: "3",
    name: "11-inch iPad Pro (512 GB) - Space Gray",
    image: img3,
    description:
      "Power and portability come together in the 11-inch iPad Pro. With 512 GB of storage, this Space Gray device is perfect for creative professionals and multitaskers.",
    category: "tablets",
    price: 1199,
    countInStock: 8,
    rating: 4.6,
    numReviews: 30,
    createdAt: "2024-09-09T01:54:23+05:30",
  },
  {
    _id: "4",
    name: "Apple Pencil (1st Generation)",
    image: img4,
    description:
      "The Apple Pencil (1st Generation) is the perfect tool for drawing, sketching, and note-taking on your iPad. Precision and versatility in one sleek package.",
    category: "accessories",
    price: 99,
    countInStock: 20,
    rating: 4.4,
    numReviews: 45,
    createdAt: "2024-07-27T16:15:10+05:30",
  },
  {
    _id: "5",
    name: "Apple iPhone 15 Pro (1TB) - Blue Titanium",
    image: img5,
    description:
      "Dive into luxury with the Apple iPhone 15 Pro in Blue Titanium. Unleash powerful performance, stunning visuals, and abundant storage with 1 TB, redefining excellence in smartphone technology.",
    category: "phones",
    price: 1499,
    countInStock: 5,
    rating: 4.7,
    numReviews: 18,
    createdAt: "2024-07-20T04:40:36+05:30",
  },
  {
    _id: "6",
    name: "Apple iPhone 15 Pro Max (256 GB) - Natural Titanium",
    image: img6,
    description:
      "Discover the pinnacle of smartphone innovation with the Apple iPhone 15 Pro Max. The Natural Titanium finish and 256 GB of storage deliver unmatched style and performance.",
    category: "phones",
    price: 1299,
    countInStock: 7,
    rating: 4.9,
    numReviews: 25,
    createdAt: "2024-07-05T11:18:06+05:30",
  },
  {
    _id: "7",
    name: "13-inch MacBook Air (256 GB) - Space Gray",
    image: img7,
    description:
      "The 13-inch MacBook Air in Space Gray combines performance and portability. With 256 GB of storage, it's perfect for students and professionals on the go.",
    category: "laptops",
    price: 999,
    countInStock: 12,
    rating: 4.3,
    numReviews: 40,
    createdAt: "2024-06-17T18:01:44+05:30",
  },
  {
    _id: "8",
    name: "14-inch MacBook Pro 12 core (1TB) - Space Black",
    image: img8,
    description:
      "Power through your work with the 14-inch MacBook Pro. Featuring a 12-core processor and 1 TB of storage in a sleek Space Black design.",
    category: "laptops",
    price: 2499,
    countInStock: 4,
    rating: 4.8,
    numReviews: 15,
    createdAt: "2024-06-02T12:33:08+05:30",
  },
  {
    _id: "9",
    name: "AirPods Pro (2nd Generation)",
    image: img9,
    description:
      "Immerse yourself in rich, high-fidelity sound with the AirPods Pro (2nd Generation). Enjoy active noise cancellation and a customizable fit for all-day comfort.",
    category: "accessories",
    price: 249,
    countInStock: 25,
    rating: 4.7,
    numReviews: 55,
    createdAt: "2024-04-22T15:51:13+05:30",
  },
  {
    _id: "10",
    name: "15-inch MacBook Air (2 TB) - Midnight",
    image: img10,
    description:
      "Experience peak performance with the 15-inch MacBook Air featuring the revolutionary Apple M2 chip, stunning 15.3-inch Liquid Retina display, and versatile MagSafe 3 charging. Elevate productivity with Touch ID and more.",
    category: "laptops",
    price: 2099,
    countInStock: 6,
    rating: 4.5,
    numReviews: 12,
    createdAt: "2024-04-10T17:08:54+05:30",
  },
  {
    _id: "11",
    name: "AirPods Max",
    image: img11,
    description:
      "Experience unparalleled sound quality with AirPods Max. These over-ear headphones combine high-fidelity audio with Active Noise Cancellation for an immersive listening experience.",
    category: "accessories",
    price: 549,
    countInStock: 10,
    rating: 4.6,
    numReviews: 35,
    createdAt: "2024-04-04T06:33:10+05:30",
  },
  {
    _id: "12",
    name: "Apple iPad Air (256 GB) - Purple",
    image: img12,
    description:
      "Meet the versatile Apple iPad Air in stunning Purple. With 256 GB of storage and a powerful A14 Bionic chip, it's perfect for work, play, and everything in between.",
    category: "tablets",
    price: 749,
    countInStock: 10,
    rating: 4.4,
    numReviews: 20,
    createdAt: "2024-03-10T17:59:35+05:30",
  },
  {
    _id: "13",
    name: "Apple iPhone 14 (128 GB) - Blue",
    image: img13,
    description:
      "Explore the Apple iPhone 14 in Blue. Featuring 128 GB of storage and a stunning display, this phone combines style and functionality seamlessly.",
    category: "phones",
    price: 799,
    countInStock: 9,
    rating: 4.5,
    numReviews: 28,
    createdAt: "2024-02-22T13:55:47+05:30",
  },
  {
    _id: "14",
    name: "Apple Watch Ultra 2",
    image: img14,
    description:
      "Take your adventures to new heights with the Apple Watch Ultra 2. This rugged and durable smartwatch is built to withstand the elements while keeping you connected and healthy.",
    category: "watches",
    price: 899,
    countInStock: 8,
    rating: 4.9,
    numReviews: 18,
    createdAt: "2024-01-16T18:51:08+05:30",
  },
  {
    _id: "15",
    name: "Silver Lamicall Adjustable Laptop Riser",
    image: img15,
    description:
      "Elevate your laptop experience with the Silver Lamicall Adjustable Laptop Riser. Ergonomic and adjustable, it's perfect for enhancing your productivity and comfort.",
    category: "accessories",
    price: 39,
    countInStock: 15,
    rating: 4.6,
    numReviews: 25,
    createdAt: "2024-01-09T00:03:31+05:30",
  },
];
