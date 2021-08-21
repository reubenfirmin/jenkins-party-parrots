# jenkins-party-parrots

This theme for Jenkins will replace the default build icons with party parrots.  It requires the [Simple Theme Plugin](https://plugins.jenkins.io/simple-theme-plugin/).

To add the theme go to the "Manage Jenkins -> Configure System" page and under the "Theme elements" section add the following:<br/>
CSS URL:
```text
https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/src/jenkins-party-parrots-icons.css
```
JS URL:
```text
https://cdn.jsdelivr.net/gh/reubenfirmin/jenkins-party-parrots/src/jenkins-party-parrots-icons.js
```

If you are hosting the files on your own server then you will need to edit the JS file and point it at the CSS file you are hosting.
