const ellipsis = (desc) => {
  let result = desc;

  if (desc.length > 100) {
    result = desc.slice(0, 100) + '...';
  }

  return result;
};

export default ellipsis;
