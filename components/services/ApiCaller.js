import fetch from "node-fetch";
import https from "https";
const prod = process.env.NODE_ENV === 'production';

const BASE_API = 'https://localhost:51597';

const LOGIN_CHECK = '/users/login_check';
const MY_ADRESSES= '/commandes/my/adresses';


const httpsAgent = new https.Agent({
    rejectUnauthorized: prod,
});

export default class ApiCaller {


    static async getToken(username, password){
        return this.getJSON(LOGIN_CHECK, null,'POST', JSON.stringify({username: username, password: password}));
    }

    static async getMyAdresses(token){
        return this.getJSON(MY_ADRESSES, token);
    }

    static getRequestOptions(method = 'get', token = null) {
        const request = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            agent: httpsAgent
        }

        if(token){
            request.headers = {...request.headers, ...{Authorization: "Bearer " + token}}
        }

        return request
    }

    static async getJSON(
        endPoint,
        token = null,
        method = 'get',
        bodyElement = null
    ) {
        const requestOptions = this.getRequestOptions(method,token);

        if (bodyElement !== null) {
            requestOptions.body = bodyElement;
        }

        return new Promise(function (resolve, reject) {
            fetch(BASE_API+endPoint, requestOptions).then(
                (response) => {
                    response.json().then(
                        (json) => {
                            resolve({ status: response.status, json: json });
                        },

                        (rejectValue) => {
                            resolve({ status: response.status, json: rejectValue });
                        }
                    )
                },

                (rejectValue) => {
                    reject(rejectValue);
                }
            )
        })
    }


}
