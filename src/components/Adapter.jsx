const API_URL = 'http://localhost:4000'

class Adapter {


    static isLoggedIn() {
        return !!localStorage.getItem('token')
    }

    // static isLoggedIn() {
    //       return fetch(`${API_URL}/sessions/`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": 'application/json',
    //             'Authorization': localStorage.getItem('token')
    //         },
    //     })
    // }

    // static getUser() {
    //     return fetch(`${API_URL}/sessions/`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": 'application/json',
    //             'Authorization': localStorage.getItem('token')
    //         },
    //     });
    // }

    static signUp(firstName, lastName, userName, password) {
        return fetch(`${API_URL}/users/`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify({firstName, lastName, userName, password })
        });
    }

    static logIn(userName, password) {
        return fetch(`${API_URL}/sessions/`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({userName, password })
            });
    }

    static getAllSkus() {
        return fetch(`${API_URL}/products/`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        })
    }


    static getSku(skuId) {
        return fetch(`${API_URL}/products/`+ skuId);
    }

    static editProduct(skuId, body) {
        return fetch(`${API_URL}/products/` + skuId, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({body})
            });
    }
    

    static addSkuToManageInv(skuId, body) {
        return fetch(`${API_URL}/products/` + skuId, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({body})
            });
    }

    // Handles both requesting a report and exporting a report 
    static requestReport(reportName) {
        return fetch(`${API_URL}/reports/` + reportName)
    }

    static getRecentReports() {
        return fetch(`${API_URL}/reports/`);
    }

    static getFees() {
        return fetch(`${API_URL}/fees/`)
    }

    
    
    static logout() {
        localStorage.removeItem('token');
    }
    
    static getJWT() {
        return localStorage.getItem('token');
    }

}
export default Adapter;
