const smartGarbage = function (trash, bins) {
  if (trash === 'recycling'){
    bins.recycling++;
  } else if (trash === 'waste'){
    return bins.waste++;
  } else if (trash === 'compost'){
    return bins.compost++;
  }
  return bins;
};

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
