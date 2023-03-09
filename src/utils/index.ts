const MIN_NODE = -100;
const MAX_NODE = 100;
const COUNT = 12;

const MIN_RGB = 0;
const MAX_RGB = 255;

const getRandomNumberInRange = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min);
}

export const getRandomNodeValue = (): number => getRandomNumberInRange(MIN_NODE, MAX_NODE);

export const getRandomArray = (): number[] => {
    const set: Set<number> = new Set();

    while (set.size < COUNT) {
        set.add(getRandomNodeValue());
    }
    return Array.from(set);
}

const getRandomRgbNumber = () => getRandomNumberInRange(MIN_RGB, MAX_RGB);

export const getRandomRgbString = () => `${getRandomRgbNumber()}, ${getRandomRgbNumber()}, ${getRandomRgbNumber()}`