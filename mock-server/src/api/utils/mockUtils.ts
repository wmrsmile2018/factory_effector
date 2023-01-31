export const getRandomItem = <T>(items: T[]): T => {
    const randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
};

export const getRandomValueFromObject = <T>(map: T): T[keyof T] => {
    const values = Object.values(map);
    const randomIndex = Math.floor(Math.random() * values.length);

    return values[randomIndex];
};
