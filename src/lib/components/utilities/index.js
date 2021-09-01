import { colors } from "../theme";

export const addColor = (color) => {
  switch (color) {
    case "info":
      return colors.info;
    case "danger":
      return colors.danger;
    case "primary":
      return colors.primary;
    case "success":
      return colors.success;
    case "warning":
      return colors.warning;
    case "secondary":
      return colors.secondary;
    default:
      return null;
  }
};

export const addLightColor = (color) => {
  switch (color) {
    case "info":
      return colors.infoLight;
    case "danger":
      return colors.dangerLight;
    case "primary":
      return colors.primaryLight;
    case "success":
      return colors.successLight;
    case "warning":
      return colors.warningLight;
    case "secondary":
      return colors.secondaryLight;
    default:
      return null;
  }
};

export const addLighterColor = (color) => {
  switch (color) {
    case "info":
      return colors.infoLighter;
    case "danger":
      return colors.dangerLighter;
    case "primary":
      return colors.primaryLighter;
    case "success":
      return colors.successLighter;
    case "warning":
      return colors.warningLighter;
    case "secondary":
      return colors.secondaryLighter;
    default:
      return null;
  }
};

export const alignText = (alignment) => {
  switch (alignment) {
    case "center":
      return "center";
    case "left":
      return "left";
    case "right":
      return "right";
    case "justify":
      return "justify";
    default:
      return "left";
  }
};

export const aligmentLogic = (alignment) => {
  if (alignment === "end") {
    return "flex-end";
  } else if (alignment === "start") {
    return "flex-start";
  } else if (alignment === "center") {
    return "center";
  } else if (alignment === "around") {
    return "space-around";
  } else if (alignment === "evenly") {
    return "space-evenly";
  } else if (alignment === "between") {
    return "space-between";
  } else {
    return "flex-start";
  }
};
