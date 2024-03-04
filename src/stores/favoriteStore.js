import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._favorite = [];

        makeAutoObservable(this);
    }

    setFavorite(favorite) {
        this._favorite = favorite;
    }

    get favorite() {
        return this._favorite;
    }
}