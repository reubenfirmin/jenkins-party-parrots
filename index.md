# jenkins-party-parrots

This theme for Jenkins will replace the default build icons with party parrots (compatible with Jenkins installs that use SVG icons by default).  It requires the [Simple Theme Plugin](https://plugins.jenkins.io/simple-theme-plugin/).

To add the theme go to the "Manage Jenkins -> Configure System" page and under the "Theme elements" section add the following:<br/>

JS URL:
```text
https://reubenfirmin.github.io/jenkins-party-parrots/src/jenkins-party-parrots.js
```

CSS URL:
```text
https://reubenfirmin.github.io/jenkins-party-parrots/src/jenkins-party-parrots.css
```

----

| Status | Icon |
| ------ | ---- |
| Clean | ![img](https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/clean-build.png) | 
| Broken | ![img](https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/broken-build.png) | 
| Stopped | ![img](https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/no-build.png) | 
| Building, Previously Clean | ![img](https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/partyparrot.gif) | 
| Building, Previously Broken | ![img](https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/images/broken-building.gif) | 

