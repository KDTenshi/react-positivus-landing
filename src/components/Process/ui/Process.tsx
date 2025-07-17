import { useState, type FC } from "react";

import style from "./Process.module.css";
import Icon from "../../../shared/ui/Icon/Icon";

type TCard = {
  title: string;
  text: string;
};

const cards: TCard[] = [
  {
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Implementation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Monitoring and Optimization",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Reporting and Communication",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Continual Improvement",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

interface CardProps {
  card: TCard;
  index: number;
}

const Card: FC<CardProps> = ({ card, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardClassName = isOpen ? [style.Card, style.Open].join(" ") : style.Card;

  return (
    <div className={cardClassName}>
      <div className={style.Body}>
        <div className={style.Heading}>
          <p className={style.Number}>0{index}</p>
          <p className={style.Title}>{card.title}</p>
        </div>
        <button className={style.Button} onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen && <Icon type={"minus"} />}
          {!isOpen && <Icon type={"plus"} />}
        </button>
      </div>
      {isOpen && <p className={style.Text}>{card.text}</p>}
    </div>
  );
};

const Process: FC = () => {
  return (
    <div className={style.Process}>
      {cards.map((card, index) => (
        <Card card={card} index={index + 1} key={card.title} />
      ))}
    </div>
  );
};

export default Process;
