function updateBuildIcons() {
  for (const svgElement of document.getElementsByClassName("icon-blue")) { // clean build
    const newIcon = document.createElement('img');
    newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/blue.png";
    newIcon.classList.add("parrot-build-icon");
    svgElement.parentNode.replaceChild(newIcon, svgElement);
  }
  for (const svgElement of document.getElementsByClassName("icon-red")) { // broken build
    const newIcon = document.createElement('img');
    newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/red.png";
    newIcon.classList.add("parrot-build-icon");
    svgElement.parentNode.replaceChild(newIcon, svgElement);
  }
  for (const svgElement of document.getElementsByClassName("icon-nobuilt")) { // build with no history
    const newIcon = document.createElement('img');
    newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/nobuilt.png";
    newIcon.classList.add("parrot-build-icon");
    svgElement.parentNode.replaceChild(newIcon, svgElement);
  }
  for (const svgElement of document.getElementsByClassName("icon-blue-anime")) { // build in progress
    const newIcon = document.createElement('img');
    newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/partyparrot.gif";
    newIcon.classList.add("parrot-build-icon");
    svgElement.parentNode.replaceChild(newIcon, svgElement);
  }
  setTimeout(function() { // remove the rings. they seem to be rendered after the fact, hence the timeout
    for (const svgElement of document.getElementsByClassName("build-status-icon__outer")) { 
      svgElement.remove();
    }
  }, 300);
  
}

window.addEventListener('load', updateBuildIcons, false);
