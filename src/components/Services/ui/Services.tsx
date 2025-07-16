import type { FC } from "react";

import style from "./Services.module.css";
import Link from "../../../shared/ui/Link/Link";
import Heading from "../../../shared/ui/Heading/Heading";

type TServiceColor = "grey" | "green" | "black";

type TService = {
  title: string;
  subtitle: string;
  image: string;
  color: TServiceColor;
};

const servicesCards: TService[] = [
  { title: "Search engine", subtitle: "optimization", image: "/optimization.png", color: "grey" },
  { title: "Pay-per-click", subtitle: "advertising", image: "/advertising.png", color: "green" },
  { title: "Social media", subtitle: "Marketing", image: "/media.png", color: "black" },
  { title: "Email", subtitle: "Marketing", image: "/email.png", color: "grey" },
  { title: "Content", subtitle: "Creation", image: "/content.png", color: "green" },
  { title: "Analytics and", subtitle: "Tracking", image: "/analytics.png", color: "black" },
];

interface ServiceProps {
  service: TService;
}

const colorStyles: { [key in TServiceColor]: string } = {
  grey: style.Grey,
  green: style.Green,
  black: style.Black,
};

const Service: FC<ServiceProps> = ({ service }) => {
  const headingColor = service.color === "grey" ? "green" : "white";
  const linkColor = service.color === "black" ? "white" : "black";
  const linkType = service.color === "black" ? "alt" : "normal";

  return (
    <div className={colorStyles[service.color]}>
      <div className={style.Info}>
        <div className={style.Heading}>
          <Heading text={[service.title, service.subtitle]} level={"third"} color={headingColor} />
        </div>
        <Link text="Learn more" color={linkColor} type={linkType} />
      </div>
      <div className={style.Image}>
        <img src={service.image} alt={`${service.title} ${service.subtitle}`} />
      </div>
    </div>
  );
};

const Services: FC = () => {
  return (
    <div className={style.Services}>
      {servicesCards.map((card) => (
        <Service service={card} key={card.title} />
      ))}
    </div>
  );
};

export default Services;
