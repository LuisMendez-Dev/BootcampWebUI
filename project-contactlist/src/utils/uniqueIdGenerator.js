const uniqueIdGenerator = () => {
  return Math.round(Math.random() * 100 * Math.random() * 100);
};

export default uniqueIdGenerator;
