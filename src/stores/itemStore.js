import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._items = [];

        this._page = 1
        this._totalCount = 0
        this._limit = 3


        makeAutoObservable(this);
    }


    setItems(items) {
        this._items = items;
    }


    setPages(pages) {
        this._page = pages
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimit(limit) {
        this._limit =limit
    }

    get items() {
        return this._items;
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}