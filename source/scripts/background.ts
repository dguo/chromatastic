import fontColorContrast from "font-color-contrast";
import hsvToRgb from "hsv-rgb";

import {DEFAULT_INTERVAL_IN_MS} from "./constants";

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

let intervalId: number;

(async () => {
    let interval;
    try {
        const settings = await browser.storage.sync.get("interval");
        interval = settings.interval;
    } catch {
        // We should still set the interval instead of erroring out.
    }

    intervalId = window.setInterval(
        updateTheme,
        interval ?? DEFAULT_INTERVAL_IN_MS
    );
})();

browser.storage.onChanged.addListener((changes) => {
    window.clearInterval(intervalId);

    intervalId = window.setInterval(
        updateTheme,
        changes.interval.newValue ?? DEFAULT_INTERVAL_IN_MS
    );
});
