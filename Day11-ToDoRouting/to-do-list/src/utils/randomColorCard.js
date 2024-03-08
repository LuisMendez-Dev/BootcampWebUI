import { COLORS } from "./constants";

const randomColorCard = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

export default randomColorCard;
