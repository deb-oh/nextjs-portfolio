const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  colors: {
    accent: "#93d7f4",
    gray: "#929292",
    darkGray: "#555",
  },
  fontSizes: {
    title: "4rem",
    subTitle: "2rem",
    normal: "1.6rem",
    description: "1.4rem",
  },
  device,
};

export default theme;
