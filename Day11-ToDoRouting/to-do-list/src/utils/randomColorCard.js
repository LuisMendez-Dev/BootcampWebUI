const randomColorCard = () => {
  const colors = [
    "#FF6F61",
    "#88B04B",
    "#F7CAAC",
    "#92A8D1",
    "#45B8AC",
    "#EFC050",
    "#DFCFBE",
    "#55B4B0",
    "#E15D44",
    "#F4A261",
    "#FA7F72",
    "#9BC53D",
    "#FDE49C",
    "#5BC0EB",
    "#F18F01",
    "#A2D729",
    "#FFBA49",
    "#3DCCC7",
    "#EE6C4D",
    "#61A5C2",
    "#97CC04",
    "#FF1654",
    "#247BA0",
    "#FFD166",
    "#06D6A0",
    "#EF476F",
    "#FFC43D",
    "#FF9F1C",
    "#06BCC1",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColorCard;
