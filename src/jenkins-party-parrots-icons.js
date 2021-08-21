function updateWeatherIcons() {
  for (const svgElement of document.getElementsByClassName("icon-blue")) { // clean build
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/src/jenkins-party-parrots-icons.css#clean-build";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-red")) { // broken build
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/src/jenkins-party-parrots-icons.css#broken-build";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-nobuilt")) { // build with no history
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots-icons/src/jenkins-party-parrots-icons.css#no-build";
    }
  }
  for (const svgElement of document.getElementsByClassName("icon-blue-anime")) { // build in progress
    for (const useElement of svgElement.getElementsByTagName("use")) {
      useElement.href.baseVal = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots-icons/src/jenkins-party-parrots-icons.css#build-in-progress";
    }
  }
}

window.addEventListener('load', updateWeatherIcons, false);
