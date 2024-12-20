export const books = [
  {
    id: 1,
    title: "Tough times build strong people  ",
    shortIntro:
      " Motivational, non fiction, growth, success, business, positive, life, inspirational, passion, success , ",
    price: 16.99,
    availability: true,
    src: "/images/book-1.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    shortIntro:
      "Atomic Habits offers a proven framework for improving—every day. ",
    price: 12.99,
    availability: false,
    src: "/images/book-2.jpg",
  },
  {
    id: 3,
    title: "Think & Grow Rich ",
    shortIntro:
      "This remarkable book by Dr. Joseph Murphy, one of the pioneering voices of affirmative-thinking. ",
    price: 18.99,
    availability: true,
    src: "/images/book-3.jpg",
  },
  {
    id: 4,
      title: " Never Enough: From Barista to Billionaire",
    shortIntro:
      "In Never Enough, Wilkinson pulls back the curtain on the lives of the ultra-rich, sharing insights into building a successful business that has been called a Berkshire Hathaway. ",
    price: 22.99,
    availability: true,
    src: "/images/book-4.jpg",
  },
  {
    id: 5,
    title: " Rich Dad Poor Dad ",
    shortIntro:
      "What the Rich Teach Their Kids about Money That the Poor and Middle Class Do Not! ",
    price: 25.5,
    availability: true,
    src: "/images/book-5.jpg",
  },
  {
    id: 6,
    title: "The Magic of Thinking Big ",
    shortIntro:
      "The Magic of Thinking Big gives you useful methods, not empty promises.  ",
    price: 18.5,
    availability: false,
    src: "/images/book-6.jpg",
  },
  {
    id: 7,
    title: " Calm your Mind",
    shortIntro:
      "A collection of most influential self help books includes the  bestsellers  English which have inspired readers for generations.  ",
    price: 48.99,
    availability: true,
    src: "/images/book-8.jpeg",
  },
  {
    id: 8,
    title: " Tools For Succes",
    shortIntro:
      "Discover Pinterest’s best ideas and inspiration for Success books. Get inspired and try out new things. ",
    price: 28.99,
    availability: true,
    src: "/images/book-9.jpg",
  },
  {
    id: 9,
    title: "The Art of Positive Thinking",
    shortIntro:
      "The perfect recipe for fulfillment, joy, peace, and expansion of awareness ",
    price: 21.99,
    availability: true,
    src: "/images/book-11.jpg",
  },
];

export interface Book {
  id: number;
  title: string;
  shortIntro: string;
  price: number;
  availability: boolean;
  src: string;
}
