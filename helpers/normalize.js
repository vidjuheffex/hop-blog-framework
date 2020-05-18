function normalize (title) {
  const normalizedTitle = title
        .replace(/[^\w\s]/gi, '')
        .toLowerCase();
  return  title ? `${normalizedTitle.replace(/ /g, '-')}` : '';
}

module.exports = normalize;
