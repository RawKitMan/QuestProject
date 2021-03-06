const colorSchemes = {


  login: {
    light: "#fefdd7"
  },

  Warrior: {
    dark: "#393F26",
    light: "#818474",
    highlight: "#EDDDD4",
    splash: "#AD0101",
    neutral: "#fefdd7"
  },
  Mage: {
    dark: "blue",
    light: "yellow",
    highlight: "green",
    splash: "lightgreen"
  },
  Cleric: {
    dark: "gray",
    light: "red",
    highlight: "white",
    splash: "black"
  },
  Bard: {
    dark: "purple",
    light: "pink",
    highlight: "orange",
    splash: "magenta"
  }
};

const getTheme = themeName => {
  const { dark, light, highlight, splash } = colorSchemes[themeName];
  return {
    backgrdPic: {
      imgFile: "images/background.jpg"
    },
    Warrior: {
      dark: "#393F26",
      light: "#818474",
      highlight: "#EDDDD4",
      splash: "#AD0101"
    },
    Login: {
      light: "#fefdd7"
    },
    darkBg: {
      backgroundColor: dark
    },
    lightBg: {
      backgroundColor: light
    },
    // buttons: {
    //   backgroundColor: splash
    // },
    mainText: {
      color: dark
    },
    loginText: {
      color: light
    },
    lightText: {
      color: highlight
    },
    titleText: {
      color: splash,
      textShadow: `1px -1px 0 ${highlight}, 1px -1px 0 ${highlight}, -1px 1px 0 ${highlight}, 1px 1px 0 ${highlight}`
    }
  };
};

export default getTheme;
