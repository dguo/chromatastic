import fontColorContrast from "font-color-contrast";
import hsvToRgb from "hsv-rgb";

import {DEFAULT_INTERVAL_IN_MS, STORAGE_KEY_FOR_INTERVAL} from "./constants";

async function updateTheme() {
    const {hue: storedHue} = await browser.storage.local.get("hue");
    let hue = 0;
    if (typeof storedHue === "number") {
        // hsvToRgb returns NaN if hue is 360
        hue = storedHue < 359 ? storedHue + 1 : 0;
    }

    await browser.storage.local.set({hue});

    const color = hsvToRgb(hue, 50, 70);
    const theme = {
        colors: {
            frame: color,
            tab_background_text: fontColorContrast(color)
        }
    };

    browser.theme.update(theme);
}

browser.alarms.onAlarm.addListener(() => {
    updateTheme();
});

(async () => {
    let interval = DEFAULT_INTERVAL_IN_MS;
    try {
        const {STORAGE_KEY_FOR_INTERVAL: storedInterval} =
            await browser.storage.sync.get(STORAGE_KEY_FOR_INTERVAL);
        if (storedInterval) {
            interval = storedInterval;
        }
    } catch {
        // We can just use the default instead of erroring out.
    }

    browser.alarms.create({
        periodInMinutes: interval / 60_000
    });
})();

browser.storage.sync.onChanged.addListener(async (changes) => {
    if (changes.interval) {
        await browser.alarms.clear();

        browser.alarms.create({
            periodInMinutes:
                (changes.interval.newValue ?? DEFAULT_INTERVAL_IN_MS) / 60_000
        });
    }
});
