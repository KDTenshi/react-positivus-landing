import type { FC } from "react";

import style from "./Team.module.css";
import Button from "../../../shared/ui/Button/Button";

type TCard = {
  image: string;
  name: string;
  title: string;
  text: string;
};

const cards: TCard[] = [
  {
    image: "/worker_1.png",
    name: "John Smith",
    title: "CEO and Founder",
    text: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: "/worker_2.png",
    name: "Jane Doe",
    title: "Director of Operations",
    text: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    image: "/worker_3.png",
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    text: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    image: "/worker_4.png",
    name: "Emily Johnson",
    title: "PPC Manager",
    text: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    image: "/worker_5.png",
    name: "Brian Williams",
    title: "Social Media Specialist",
    text: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    image: "/worker_6.png",
    name: "Sarah Kim",
    title: "Content Creator",
    text: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

interface CardProps {
  card: TCard;
}

const Card: FC<CardProps> = ({ card }) => {
  return (
    <div className={style.Card}>
      <div className={style.Heading}>
        <div className={style.Image}>
          <img src={card.image} alt={card.name} />
        </div>
        <div className={style.Info}>
          <h4 className={style.Name}>{card.name}</h4>
          <p className={style.Title}>{card.title}</p>
        </div>
        <a href="/" className={style.Link}>
          <img src="/linked_in_icon.svg" alt="Linked In Icon" />
        </a>
      </div>
      <p className={style.Text}>{card.text}</p>
    </div>
  );
};

const Team: FC = () => {
  return (
    <div className={style.Team}>
      <div className={style.Cards}>
        {cards.map((card) => (
          <Card card={card} key={card.name} />
        ))}
      </div>
      <div className={style.Container}>
        <Button text="See all team" />
      </div>
    </div>
  );
};

export default Team;
