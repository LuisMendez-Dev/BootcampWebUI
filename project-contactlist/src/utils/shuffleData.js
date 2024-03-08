const shuffleWithSlice = (data, minValue, maxValue) => {
  return data
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(minValue, maxValue);
};

const shuffleData = (data) => {
  return data
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export default shuffleWithSlice;
export { shuffleData };
