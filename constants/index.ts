import * as Types from '../interfaces/index';

const PlanetsName:Array<string> = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];
const objectsURLs:Types.PlanetsUrls = {
    Sun: 'public/assets/Sun.jpg'
};
PlanetsName.map(name => {
    Object.defineProperty(objectsURLs, name, {
        value: 'public/assets/' + name + '.jpg',
        enumerable: true,
        writable: false,
        configurable: true
    })
});
export default objectsURLs;
export let SunDiameter:number = 1392000;
export let GlobalScale:number = 1500;
export const AU:number        = 149597871;
export const AUK:number        = 0.983;