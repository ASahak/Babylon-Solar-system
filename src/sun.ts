import * as BABYLON from 'babylonjs';

export default class Sun {
    public _sun:any     = null;
    public _scene:any   = null;
    constructor (_scene:any, _imgPath:string) {
        this._sun       = BABYLON.Mesh.CreateSphere("sphere", 100.0, 100.0, _scene, false,  BABYLON.Mesh.DEFAULTSIDE);
        this._scene     = _scene;
        const _fireMaterial = new BABYLON.StandardMaterial("redstar", this._scene);
        _fireMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        _fireMaterial.emissiveColor = new BABYLON.Color3(.7, .4, .4);
        this._sun.material = _fireMaterial;
        this._sun.material.diffuseTexture = new BABYLON.Texture(_imgPath, this._scene);
        this._sun.material.diffuseTexture.uScale = -1;
        this._sun.material.diffuseTexture.vScale = -1;
        this._sun.material.diffuseTexture.hasAlpha = false;
    }
}