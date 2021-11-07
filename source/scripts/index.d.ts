declare module "hsv-rgb" {
    function hsvToRgb(
        hue: number,
        saturation: number,
        value: number
    ): [number, number, number];

    export = hsvToRgb;
}
