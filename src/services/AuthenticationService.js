import BaseService from "./BaseService";


class AuthenticationService extends BaseService {

    constructor() {
        super("/auth");
    }

    async login(credentials) {
        console.log(`${this.endPoint}/authenticate`);
        const response = await
            this.api.post(`${this.endPoint}/authenticate`, credentials);
        return response.data;
    }

    async register(credentials) {
        const response = await
            this.api.post(`${this.endPoint}/register`, credentials);
        return response.data;
    }
}

export default AuthenticationService;