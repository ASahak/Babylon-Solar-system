import * as BABYLON from "babylonjs";

export default class GlobalFunctions {
    constructor () {}
    Orbit (detail:number, radius:number) {
        const _detail  = detail;
        const _pieDiv  = 2/_detail;
        let _divArray  = [];
        const _radius  = radius;
        let _offset    = {x:0, y:0};
        for(var i = 0; i < _detail; i++){
            _divArray.push(Math.PI*(_pieDiv*i));
        }

        let _newPath= [];
        for(var i = 0; i < _divArray.length; i++){
            _newPath.push(new BABYLON.Vector3((_radius * Math.cos(_divArray[i]) + _offset.x), (0 + _offset.y), (_radius * Math.sin(_divArray[i]) + _offset.x)));
        }
        _newPath.push(_newPath[0]);

        return _newPath;
    }
}