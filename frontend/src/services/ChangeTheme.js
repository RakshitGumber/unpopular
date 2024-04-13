export default (theme) => {
  for (let key in theme) {
    document.querySelector(":root").style.setProperty(key, theme[key]);
  }
};
