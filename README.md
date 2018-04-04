# Chromatastic [![Build Status](https://travis-ci.org/dguo/chromatastic.svg?branch=master)](https://travis-ci.org/dguo/chromatastic)
A [dynamic Firefox
theme](https://developer.mozilla.org/en-US/Add-ons/Themes/Theme_concepts#Dynamic_themes)
that continuously cycles through colors. Available in [Firefox
Add-ons](https://addons.mozilla.org/en-US/firefox/addon/chromatastic/).

## Demo
This GIF shows the speed of the color transitions, which occur slowly and smoothly
rather than jumping from color to color.
![video](https://i.imgur.com/qRwh1WU.gif)

## Screenshots
![red](https://i.imgur.com/ePaCPdR.png)
![purple](https://i.imgur.com/spZLFrq.png)
![blue](https://i.imgur.com/lFPKI9e.png)
![green](https://i.imgur.com/mKMHnbf.png)
![yellow](https://i.imgur.com/CZXVsP5.png)

## Installation
This extension requires Firefox 60 and above. Install it from the
[Add-ons](https://addons.mozilla.org/en-US/firefox/addon/chromatastic/) page.

## Build Instructions
I use the Node version specified in `.nvmrc`. Run `$ yarn install && yarn run
build:release`. This should generate the final JavaScript files and place
them in `extension/js`.

To generate a ZIP file for uploading to [Add-ons](https://addons.mozilla.org/),
run `$ yarn run release`.

If you have Python 3 and Docker, you can also run `$ ./dev` for a development

## Other Themes
* [Color Tailor](https://addons.mozilla.org/en-US/firefox/addon/color-tailor/): changes the theme to the current website's "primary" color
* [Containers Theme](https://addons.mozilla.org/en-US/firefox/addon/containers-theme/): changes the theme color to match the active [container tab](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)
* [Picture Paint](https://addons.mozilla.org/en-US/firefox/addon/picture-paint/): changes the theme to match the color palette of the current National Geographic Photo of the Day
* [Quantum Lights](https://addons.mozilla.org/en-US/firefox/addon/quantum-lights-dynamic/): Firefox Quantum palette-inspired theme that changes based on the time of day
* [Gradientus](https://addons.mozilla.org/en-US/firefox/addon/gradientus/): also changes colors based on the time of day

## License
[MIT](https://github.com/dguo/chromatastic/blob/master/LICENSE)
