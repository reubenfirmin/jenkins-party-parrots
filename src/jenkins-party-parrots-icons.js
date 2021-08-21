function updateBuildIcons() {
  for (const svgElement of document.getElementsByClassName("icon-blue")) { // clean build
    const newIcon = document.createElement('img');
    newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/blue.png";
    svgElement.parentNode.replaceChild(newIcon, svgElement);
  }
  for (const svgElement of document.getElementsByClassName("icon-red")) { // broken build
    const newIcon = document.createElement('img');
    newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/red.png";
    svgElement.parentNode.replaceChild(newIcon, svgElement);
  }
  for (const svgElement of document.getElementsByClassName("icon-nobuilt")) { // build with no history
    const newIcon = document.createElement('img');
    newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/nobuilt.png";
    svgElement.parentNode.replaceChild(newIcon, svgElement);
  }
  for (const svgElement of document.getElementsByClassName("icon-blue-anime")) { // build in progress
    const newIcon = document.createElement('img');
    newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/blue-anime.gif";
    svgElement.parentNode.replaceChild(newIcon, svgElement);
  }
}

window.addEventListener('load', updateBuildIcons, false);
