
function ssnSlice(ssn = 123456789) {
  const chars = String(ssn).trim();
  const areaNumber = chars.slice(0, 3);
  const groupNumber = chars.slice(3, 5);
  const serialNumber = chars.slice(5);
  return `${areaNumber}-${groupNumber}-${serialNumber}`;
}

function ssnRegex(ssn = 123456789) {
  return String(ssn).trim().replace(/^(\d{3})\s?\-?\s?(\d{2})\s?\-?\s?(\d{4})$/, '$1-$2-$3');
}

// console.log(ssnSlice(), ssnRegex(), ssnSlice() === ssnRegex())

module.exports = { first: ssnSlice, second: ssnRegex }
