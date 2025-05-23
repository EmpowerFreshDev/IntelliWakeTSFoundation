/**
 * Options for generating HSL color shades.
 *
 * @typedef {Object} THSLShadesOptions
 * @property {number=} startHue - Starting hue value (0-360).
 * @property {number=} startSaturation - Starting saturation value (0-100).
 * @property {number=} endSaturation - Ending saturation value (0-100).
 * @property {number=} startLightness - Starting lightness value (0-100).
 * @property {number=} endLightness - Ending lightness value (0-100).
 */
export type THSLShadesOptions = {
    startHue?: number;
    startSaturation?: number;
    endSaturation?: number;
    startLightness?: number;
    endLightness?: number;
    randomize?: boolean;
};
/**
 * Generate an array of HSL color shades.
 *
 * @param {number} count - The number of shades to generate.
 * @param {number} endHue - The ending hue value for the color shades.
 * @param {Object} [options] - Additional options used to customize the color shades.
 * @param {number} [options.startHue=endHue] - The starting hue value for the color shades.
 * @param {number} [options.startSaturation=30] - The starting saturation value for the color shades.
 * @param {number} [options.endSaturation=80] - The ending saturation value for the color shades.
 * @param {number} [options.startLightness=30] - The starting lightness value for the color shades.
 * @param {number} [options.endLightness=60] - The ending lightness value for the color shades.
 *
 * @returns {string[]} An array of HSL color shades.
 */
export declare function hslShades(count: number, endHue: number, options?: THSLShadesOptions): string[];
/**
 * Options for generating a rainbow gradient using HSL color model.
 * @typedef {Object} THSLRainbowOptions
 * @property {number} [startHue=0] - Starting hue value (0-360).
 * @property {number} [endHue=360] - Ending hue value (0-360).
 * @property {number} [saturation=100] - Saturation value (0-100).
 * @property {number} [lightness=50] - Lightness value (0-100).
 * @property {boolean} [randomize=false] - If set to true, start and end hues will be randomized.
 */
export type THSLRainbowOptions = {
    startHue?: number;
    endHue?: number;
    saturation?: number;
    lightness?: number;
    randomize?: boolean;
};
export declare function hslRainbow(count: number, options?: THSLRainbowOptions): string[];
