// From https://gist.github.com/luciopaiva/01bda0d4311ccaecea0478ad2fd03108
function readCssVar(varName) {
  varName = varName.startsWith("--") ? varName : "--" + varName;
  // To ensure Gatsby build passes https://www.gatsbyjs.org/docs/debugging-html-builds/
  if (typeof window !== `undefined`) {
    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(varName);
  } else {
    return "";
  }
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
