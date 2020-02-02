import * as BABYLON from 'babylonjs';
import { GlobalScale } from '../constants/index';
import Sun from './sun';

// ImageUrls of Planets
import objectsURLs from '../constants/index';

// Planets Constructors
import Mercury from './mercury';
import Venus from './venus';
import Earth from './earth';
import Mars from './mars';
import Jupiter from './jupiter';
import Saturn from './saturn';
import Uranus from './uranus';
import Neptune from './neptune';

import PlanetsData from '../shared/planetData';

class Init {

    // init params
    protected _canvas:HTMLElement   = null;
    protected _scene:any            = null;
    public _engine:any              = null;
    protected _nb:number            = 10000;    		// nb of triangles
    protected _fact:number          = 2000; 			// cube size
    protected  _alphaMercury:number = Math.PI;
    protected  _alphaVenus:number   = Math.PI;
    protected  _alphaEarth:number   = Math.PI;
    protected  _alphaMars:number    = Math.PI;
    protected  _alphaJupiter:number = Math.PI;
    protected  _alphaSaturn:number  = Math.PI;
    protected  _alphaUranus:number  = Math.PI;
    protected  _alphaNeptune:number = Math.PI;
    public Sun:any                  = null;
    public Mercury:any              = null;
    public Venus:any                = null;
    public Earth:any                = null;
    public Mars:any                 = null;
    public Jupiter:any              = null;
    public Saturn:any               = null;
    public Uranus:any               = null;
    public Neptune:any              = null;

    constructor () {
        this._canvas    = document.getElementById('solar-system');
        // Load the 3D engine
        this._engine    = new BABYLON.Engine(this._canvas, true);
    }
    // CreateScene function that creates and return the scene
    CreateScene () {
        this._scene = new BABYLON.Scene(this._engine);
        this._scene.clearColor = new BABYLON.Color3(0.020, 0.043, 0.075);
        const _camera:any = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, -0), this._scene);
        _camera.setPosition(new BABYLON.Vector3(0, 150, -(GlobalScale)));
        _camera.attachControl(this._canvas, true);

        const _pl:any = new BABYLON.PointLight("pl", new BABYLON.Vector3(0, 0, 0), this._scene);
        _pl.diffuse = new BABYLON.Color3(1, 1, 1);
        _pl.intensity = 1.0;

        const _sphere = BABYLON.MeshBuilder.CreateSphere("s", {segments: 6, diameter: 1}, this._scene);

        // run Sun Constructor
        this.Sun = new Sun(this._scene, objectsURLs.Sun);
        // Planet's constructor'
        this.Mercury = new Mercury(this._scene, this.Sun._sun, PlanetsData.Mercury.textureSrc as string, PlanetsData.Mercury);
        this.Venus = new Venus(this._scene, this.Sun._sun, PlanetsData.Mercury.textureSrc as string, PlanetsData.Venus);
        this.Earth = new Earth(this._scene, this.Sun._sun, PlanetsData.Earth.textureSrc as string, PlanetsData.Earth);
        this.Mars = new Mars(this._scene, this.Sun._sun, PlanetsData.Mars.textureSrc as string, PlanetsData.Mars);
        this.Jupiter = new Jupiter(this._scene, this.Sun._sun, PlanetsData.Jupiter.textureSrc as string, PlanetsData.Jupiter);
        this.Saturn = new Saturn(this._scene, this.Sun._sun, PlanetsData.Saturn.textureSrc as string, PlanetsData.Saturn);
        this.Uranus = new Uranus(this._scene, this.Sun._sun, PlanetsData.Uranus.textureSrc as string, PlanetsData.Uranus);
        this.Neptune = new Neptune(this._scene, this.Sun._sun, PlanetsData.Neptune.textureSrc as string, PlanetsData.Neptune);

        const SPS = new BABYLON.SolidParticleSystem('SPS', this._scene, {updatable: false});
        SPS.addShape(_sphere, this._nb, {positionFunction: this.myPositionFunction.bind(this)});
        const _mesh = SPS.buildMesh();
        console.log(PlanetsData)

        this._scene.registerBeforeRender(() => {
            _pl.position = _camera.position;

            // Mercury
            this.Mercury._planet.position = new BABYLON.Vector3(
                Number(PlanetsData.Mercury.distanceFromSun) * Math.sin(this._alphaMercury),
                this.Mercury._planet.parent.position.y,
                Number(PlanetsData.Mercury.distanceFromSun) * Math.cos(this._alphaMercury));
            this.Mercury._planet.rotation.y += .03;

            this._alphaMercury += (PlanetsData.Mercury.orbit.speedOrbit as number / (2 * Math.PI * Number(PlanetsData.Mercury.distanceFromSun)));

            // Venus
            this.Venus._planet.position = new BABYLON.Vector3(
                Number(PlanetsData.Venus.distanceFromSun) * Math.sin(this._alphaVenus),
                this.Venus._planet.parent.position.y,
                Number(PlanetsData.Venus.distanceFromSun) * Math.cos(this._alphaVenus));
            this.Venus._planet.rotation.y += .03;

            this._alphaVenus += (PlanetsData.Venus.orbit.speedOrbit as number / (2 * Math.PI * Number(PlanetsData.Venus.distanceFromSun)));

            // Earth
            this.Earth._planet.position = new BABYLON.Vector3(
                Number(PlanetsData.Earth.distanceFromSun) * Math.sin(this._alphaEarth),
                this.Earth._planet.parent.position.y,
                Number(PlanetsData.Earth.distanceFromSun) * Math.cos(this._alphaEarth));
            this.Earth._planet.rotation.y += .03;

            this._alphaEarth += (PlanetsData.Earth.orbit.speedOrbit as number / (2 * Math.PI * Number(PlanetsData.Earth.distanceFromSun)));

            // Mars
            this.Mars._planet.position = new BABYLON.Vector3(
                Number(PlanetsData.Mars.distanceFromSun) * Math.sin(this._alphaMars),
                this.Mars._planet.parent.position.y,
                Number(PlanetsData.Mars.distanceFromSun) * Math.cos(this._alphaMars));
            this.Mars._planet.rotation.y += .03;

            this._alphaMars += (PlanetsData.Mars.orbit.speedOrbit as number / (2 * Math.PI * Number(PlanetsData.Mars.distanceFromSun)));

            // Jupiter
            this.Jupiter._planet.position = new BABYLON.Vector3(
                Number(PlanetsData.Jupiter.distanceFromSun) * Math.sin(this._alphaJupiter),
                this.Jupiter._planet.parent.position.y,
                Number(PlanetsData.Jupiter.distanceFromSun) * Math.cos(this._alphaJupiter));
            this.Jupiter._planet.rotation.y += .03;

            this._alphaJupiter += (PlanetsData.Jupiter.orbit.speedOrbit as number / (2 * Math.PI * Number(PlanetsData.Jupiter.distanceFromSun)));

            // Saturn
            this.Saturn._planet.position = new BABYLON.Vector3(
                Number(PlanetsData.Saturn.distanceFromSun) * Math.sin(this._alphaSaturn),
                this.Saturn._planet.parent.position.y,
                Number(PlanetsData.Saturn.distanceFromSun) * Math.cos(this._alphaSaturn));
            this.Saturn._planet.rotation.y += .03;

            this._alphaSaturn += (PlanetsData.Saturn.orbit.speedOrbit as number / (2 * Math.PI * Number(PlanetsData.Saturn.distanceFromSun)));

            // Uranus
            this.Uranus._planet.position = new BABYLON.Vector3(
                Number(PlanetsData.Uranus.distanceFromSun) * Math.sin(this._alphaUranus),
                this.Uranus._planet.parent.position.y,
                Number(PlanetsData.Uranus.distanceFromSun) * Math.cos(this._alphaUranus));
            this.Uranus._planet.rotation.y += .03;

            this._alphaUranus += (PlanetsData.Uranus.orbit.speedOrbit as number / (2 * Math.PI * Number(PlanetsData.Uranus.distanceFromSun)));

            // Neptune
            this.Neptune._planet.position = new BABYLON.Vector3(
                Number(PlanetsData.Neptune.distanceFromSun) * Math.sin(this._alphaNeptune),
                this.Neptune._planet.parent.position.y,
                Number(PlanetsData.Neptune.distanceFromSun) * Math.cos(this._alphaNeptune));
            this.Neptune._planet.rotation.y += .03;

            this._alphaNeptune += (PlanetsData.Neptune.orbit.speedOrbit as number / (2 * Math.PI * Number(PlanetsData.Neptune.distanceFromSun)));

        });

        return this._scene;

    }
    // custom position function for SPS creation
    myPositionFunction  (particle:any, i:number, s:any) {
        particle.position.x = 500 + (Math.random() * (this._fact * this.posOrNeg()));
        particle.position.y = 500 + (Math.random() * (this._fact * this.posOrNeg()));
        particle.position.z = 500 + (Math.random() * (this._fact * this.posOrNeg()));

        particle.color = new BABYLON.Color4(1, 1, 1, 1.0);
    };

    posOrNeg () {
        return Math.random() < 0.5 ? -1 : 1;
    }
}
const _init = new Init();
const scene = _init.CreateScene();
_init._engine.runRenderLoop(function(){
    scene.render();
});
window.addEventListener('resize', function(){
    _init._engine.resize();
});