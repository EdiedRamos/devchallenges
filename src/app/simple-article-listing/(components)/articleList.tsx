import { Card, CardI } from "./card";

const DATA: CardI[] = [
  {
    id: "6d934257-f1ff-4c91-9b99-4a45ac8a0fd3",
    image: "/simple-article-listing/photo_1.png",
    first: "Unlocking the Power of Cloud Computing",
    second: "A Guide to Scalable Solutions",
    date: "November 12, 2024",
  },
  {
    id: "bb39d615-946c-461a-b004-7954b4d5b273",
    image: "/simple-article-listing/photo_3.png",
    first: "The Future of AI",
    second: "How Machine Learning is Revolutionizing Industries",
    date: "November 12, 2024",
  },
  {
    id: "539c9c35-7979-4bf4-84bb-1a367c6a5799",
    image: "/simple-article-listing/photo_2.png",
    first: "The Impact of 5G on Business",
    second: "How Faster Networks are Transforming the Way We Work",
    date: "November 12, 2024",
  },
];

export function ArticleList() {
  return (
    <div className="flex flex-col gap-[52px] items-center">
      {DATA.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
