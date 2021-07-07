import fetch from "node-fetch";
import https from "https";

const prod = process.env.NODE_ENV === 'production';

const BASE_API = prod ? 'https://api.ropi.be/' : 'https://php-fpm-ropi-api:8000/api';


const COMMERCES = '/commerces';
const PAGE = '/page_statiques/{slug}';
const MENU = '/menu';

const httpsAgent = new https.Agent({
    rejectUnauthorized: prod,
});

export default class ApiCaller {

    static async getCommerces() {
        return this.getJSON(COMMERCES);
    }

    static async getPage(slug){
        return this.getJSON(PAGE.replace("{slug}",slug));
    }

    static async getMenu(){
        return this.getJSON(MENU);
    }

    static getRequestOptions(method = 'get', token = null) {
        const request = {
            method: method,
            headers: {'Content-Type': 'application/ld+json'},
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
