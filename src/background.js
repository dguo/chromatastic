const fontColorContrast = require("font-color-contrast");
const hsvToRgb = require("hsv-rgb");

function* getColor() {
    for (let h = 0; h < 360; h = h < 359 ? h + 1 : 0) {
        const color = hsvToRgb(h, 50, 70);
        yield color;
    }
}

const colorGenerator = getColor();

function updateTheme() {
    const color = colorGenerator.next().value;
    const theme = {
        colors: {
            frame: color,
            tab_background_text: fontColorContrast(color)
        }
    };

    browser.theme.update(theme);
}

setInterval(updateTheme, 500);
