declare module "font-color-contrast" {
    type ColorIntensity = number | string;

    function fontColorContrast(hex: string): string;
    function fontColorContrast(
        red: ColorIntensity,
        green: ColorIntensity,
        blue: ColorIntensity
    ): string;
    function fontColorContrast(
        redGreenBlue: [ColorIntensity, ColorIntensity, ColorIntensity]
    ): string;

    export = fontColorContrast;
}

declare module "hsv-rgb" {
    function hsvToRgb(
        hue: number,
        saturation: number,
        value: number
    ): [number, number, number];

    export = hsvToRgb;
}
