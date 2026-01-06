import { BaseService } from "../../shared/base.service.js";
import axios from "axios"

export class CollectionService extends BaseService {
    constructor() {
        super("collections");
    }

    getProducts(collectionId) {
        return axios.get(`${this.endpointPath()}/${collectionId}/products`);
    }
}