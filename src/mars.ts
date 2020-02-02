import * as BABYLON from 'babylonjs';
import * as Types from '../interfaces/index';
import {  GlobalScale } from '../constants/index';
import GlobalFunctions from '../helpers/functions';
class Mars {
    public _planet: any        = null;
    constructor (
        _scene:any,
        _parent:any,
        _imgPath:string,
        _data:Types.NestedTypes
    ) {
        this._planet                                  = BABYLON.Mesh.CreateSphere("planet", 0, _data.sunDiameter < 5 ? _data.sunDiameter as number * 10 : _data.sunDiameter as number * 2, _scene);
        this._planet.parent                           = _parent;
        const _planetMaterial                         = new BABYLON.StandardMaterial("planetSurface", _scene);
        this._planet.material                         = _planetMaterial;
        this._planet.material.diffuseTexture          = new BABYLON.Texture(_imgPath, _scene);
        this._planet.material.diffuseTexture.uScale   = -1;
        this._planet.material.diffuseTexture.vScale   = -1;
        this._planet.material.diffuseTexture.hasAlpha = false;
        BABYLON.MeshBuilder.CreateLines("lines", {points:
                    new GlobalFunctions().Orbit(_data.orbit.detail as number, _data.distanceFromSun as number), dashNb:GlobalScale},
            _scene);
    }
}

export default Mars;