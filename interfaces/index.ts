export interface PlanetsUrls {
    [key: string]: string
}

// Planet's types
export interface OrbitTypes {
    detail : Number,
    semiMajorAxis : Number,
    eccentricity : Number,
    aphelion : Number,
    perihelion: Number,
    inclination : Number,
    speedOrbit: Number,
    timeDurationRotation: Number
}
export interface NestedTypes {
    textureSrc: String,
    diameter: Number,
    sunDiameter: Number,
    distanceFromSun: Number,
    orbit: OrbitTypes
}
export interface PlanetTypes {
    [key: string] : NestedTypes
}