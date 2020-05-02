export const money = new Intl.NumberFormat('en-US')

export const formatShortNumber = (num) => {
  if (Math.abs(num) > 999999999) return Math.sign(num) * ((Math.abs(num) / 1000000000).toFixed(1)) + 'b';
  if (Math.abs(num) > 999999) return Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1)) + 'm';
  if (Math.abs(num) > 999) return Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k';
  return Math.sign(num) * Math.abs(num);
}

export const validateEmail = (email) => {
  const exp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return exp.test(String(email).toLowerCase());
};
