# Chromatastic [![Build Status](https://travis-ci.org/dguo/chromatastic.svg?branch=master)](https://travis-ci.org/dguo/chromatastic)
A [dyanmic Firefox
theme](https://developer.mozilla.org/en-US/Add-ons/Themes/Theme_concepts#Dynamic_themes)
that continuously cycles through colors.

## Requirements
* Firefox 60 and above

## Build Instructions
I use the Node version specified in `.nvmrc`. Run `$ yarn install && yarn run
build:release`. This should generate the final JavaScript files and place
them in `extension/js`.

To generate a ZIP file for uploading to [Add-ons](https://addons.mozilla.org/),
run `$ yarn run release`.

If you have Python 3 and Docker, you can also run `$ ./dev` for a development

## Other Themes
* [Containers Theme](https://addons.mozilla.org/en-US/firefox/addon/containers-theme/): changes the theme color to match the active [container tab](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)
* [Quantum Lights](https://addons.mozilla.org/en-US/firefox/addon/quantum-lights-dynamic/): Firefox Quantum palette-inspired theme that changes based on the time of day
* [Gradientus](https://addons.mozilla.org/en-US/firefox/addon/gradientus/): also changes colors based on the time of day

## License
[MIT](https://github.com/dguo/chromatastic/blob/master/LICENSE)
