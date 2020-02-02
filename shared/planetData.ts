import { SunDiameter, GlobalScale } from '../constants/index';
import * as Types from '../interfaces/index';


const PlanetsData:Types.PlanetTypes = {
    Mercury: {
        textureSrc: 'public/assets/Mercury.jpg',
        diameter: 4667.098,
        sunDiameter: 4667.098 * 100 / SunDiameter,
        distanceFromSun: ((57.91 * 10e6) - SunDiameter/2) * 100 / (SunDiameter/2) / GlobalScale,
        orbit: {
            detail : 64,
            semiMajorAxis : 57.91 * 10e5,
            eccentricity : 0.2056,
            aphelion : 69.82 * 10e5,
            perihelion: 46.00 * 10e5,
            inclination : 7.0, //degrees
            speedOrbit: 47.8,
            timeDurationRotation: 5065200
        }
    },
    Venus: {
        textureSrc: 'public/assets/Venus.jpg',
        diameter: 12231.01,
        sunDiameter: 12231.01 * 100 / SunDiameter,
        distanceFromSun: ((108.2 * 10e6) - SunDiameter/2) * 100 / (SunDiameter/2) / GlobalScale,
        orbit: {
            detail : 128,
            semiMajorAxis : 108.2 * 10e5,
            eccentricity : 0.0067,
            aphelion : 108.7917 * 10e5,
            perihelion: 107.3432 * 10e5,
            inclination : 3.4, //degrees
            speedOrbit: 35.02,
            timeDurationRotation: 20995200
        }
    },
    Earth: {
        textureSrc: 'public/assets/Earth.jpg',
        diameter: 12734.739,
        sunDiameter: 12734.739 * 100 / SunDiameter,
        distanceFromSun: ((149.6 * 10e6) - SunDiameter/2) * 100 / (SunDiameter/2) / GlobalScale,
        orbit: {
            detail : 240,
            semiMajorAxis : 149.6 * 10e5,
            eccentricity : 0.0016,
            aphelion : 151.9221 * 10e5,
            perihelion: 146.9331 * 10e5,
            inclination : 3.4, //degrees
            speedOrbit: 29.78,
            timeDurationRotation: 31536000
        }
    },
    Mars: {
        textureSrc: 'public/assets/Mars.png',
        diameter: 6759.245,
        sunDiameter: 6759.245 * 100 / SunDiameter,
        distanceFromSun: ((227.8 * 10e6) - SunDiameter/2) * 100 / (SunDiameter/2) / GlobalScale,
        orbit: {
            detail : 280,
            semiMajorAxis : 227.8 * 10e5,
            eccentricity : 0.0934,
            aphelion : 249.2 * 10e5,
            perihelion: 206.7 * 10e5,
            inclination : 1.8, //degrees
            speedOrbit: 24,
            timeDurationRotation: 59270400
        }
    },
    Jupiter: {
        textureSrc: 'public/assets/Jupiter.jpg',
        diameter: 139691.06,
        sunDiameter: 139691.06 * 100 / SunDiameter,
        distanceFromSun: ((778.57 * 10e6) - SunDiameter/2) * 100 / (SunDiameter/2) / GlobalScale,
        orbit: {
            detail : 440,
            semiMajorAxis : 778.57 * 10e5,
            eccentricity : 0.0489,
            aphelion : 815.4546 * 10e5,
            perihelion: 740.13731 * 10e5,
            inclination : 1.3, //degrees
            speedOrbit: 13.07,
            timeDurationRotation: 374284800
        }
    },
    Saturn: {
        textureSrc: 'public/assets/Saturn.jpg',
        diameter: 115068.1,
        sunDiameter: 115068.1 * 100 / SunDiameter,
        distanceFromSun: ((1433.53 * 10e6) - SunDiameter/2) * 100 / (SunDiameter/2) / GlobalScale,
        orbit: {
            detail : 540,
            semiMajorAxis : 1433.53 * 10e5,
            eccentricity : 0.0565,
            aphelion : 1506.35 * 10e5,
            perihelion: 1347.02 * 10e5,
            inclination : 2.48, //degrees
            speedOrbit: 9.68,
            timeDurationRotation: 929577600
        }
    },
    Uranus: {
        textureSrc: 'public/assets/Uranus.jpg',
        diameter: 47314.714,
        sunDiameter: 47314.714 * 100 / SunDiameter,
        distanceFromSun: ((2875.04 * 10e6) - SunDiameter/2) * 100 / (SunDiameter/2) / GlobalScale,
        orbit: {
            detail : 640,
            semiMajorAxis : 2875.04 * 10e5,
            eccentricity : 0.046,
            aphelion : 3004.645 * 10e5,
            perihelion: 2734.275 * 10e5,
            inclination : 0.773, //degrees
            speedOrbit: 6.8,
            timeDurationRotation: 2661033600
        }
    },
    Neptune: {
        textureSrc: 'public/assets/Neptune.jpg',
        diameter: 45061.632,
        sunDiameter: 45061.632 * 100 / SunDiameter,
        distanceFromSun: ((4500 * 10e6) - SunDiameter/2) * 100 / (SunDiameter/2) / GlobalScale,
        orbit: {
            detail : 740,
            semiMajorAxis : 4500 * 10e5,
            eccentricity : 0.009,
            aphelion : 4533.522 * 10e5,
            perihelion: 4457.883 * 10e5,
            inclination : 1.767, //degrees
            speedOrbit: 5.43,
            timeDurationRotation: 5200416000
        }
    }
};
export default PlanetsData;