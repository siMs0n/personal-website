// From https://gist.github.com/luciopaiva/01bda0d4311ccaecea0478ad2fd03108
function readCssVar(varName) {
  varName = varName.startsWith("--") ? varName : "--" + varName;
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(varName);
}

const variables = {
  mainBgColor: () => readCssVar("--main-bg-color"),
  primaryColor: () => readCssVar("--primary-color"),
  accentColor: () => readCssVar("--accent-color"),
  secondaryColor: () => readCssVar("--secondary-color"),
  textColor: () => readCssVar("--text-color"),
  textColorLight: () => readCssVar("--text-color-light"),
  cardBoxShadow: () => readCssVar("--card-box-shadow"),
  cardBorderRadius: () => readCssVar("--card-border-radius"),
};

export default variables;
