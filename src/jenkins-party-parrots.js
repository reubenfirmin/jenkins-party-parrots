function updateBuildIcons() {
  icon("icon-blue", "clean-build.png", "Clean Build");
  icon("icon-red", "broken-build.png", "Broken Build");
  icon("icon-nobuilt", "no-build.png", "No Build History");
  icon("icon-aborted", "incomplete-build.png", "Incomplete Build");
  icon("icon-blue-anime", "partyparrot.gif", "Build In Progress (Prev Clean)");
  icon("icon-red-anime", "broken-building.gif", "Build In Progress (Prev Broken)");
  
  // remove the rings. somehow we're not getting all of them
  for (let i = 0; i < 5; i++) {
    for (const svgElement of document.getElementsByClassName("build-status-icon__outer")) { 
        svgElement.remove();
    }
  };
  setTimeout(() => {
    for (const svgElement of document.getElementsByClassName("build-status-icon__outer")) { 
        svgElement.remove();
    }
  }, 500);
  
}

fun icon(origClassName, newIcon, description) {
    for (const svgElement of document.getElementsByClassName(origClassName)) {
      const newIcon = document.createElement('img');
      newIcon.src = "https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/" + newIcon;
      newIcon.classList.add("parrot-build-icon");
      newIcon.alt = description;
      svgElement.parentNode.replaceChild(newIcon, svgElement);
    }
}

window.addEventListener('load', updateBuildIcons, false);
