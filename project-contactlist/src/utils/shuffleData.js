const shuffleWithSlice = (data, minValue, maxValue) => {
  return data
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .slice(minValue, maxValue);
};

export default shuffleWithSlice;
