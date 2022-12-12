import {makeAutoObservable} from "mobx";

class SharedService {

    constructor() {
        makeAutoObservable(this)
    }

    results = []


}

const sharedService=new SharedService()

export default sharedService
