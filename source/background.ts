import fontColorContrast from "font-color-contrast";
import hsvToRgb from "hsv-rgb";

function* getColor() {
    for (let hue = 0; hue < 360; hue = hue < 359 ? hue + 1 : 0) {
        const color = hsvToRgb(hue, 50, 70);
        yield color;
    }
}

const colorGenerator = getColor();

function updateTheme() {
    const color = colorGenerator.next().value as [number, number, number];
    const theme = {
        colors: {
            frame: color,
            tab_background_text: fontColorContrast(color)
        }
    };

    browser.theme.update(theme);
}

setInterval(updateTheme, 500);
