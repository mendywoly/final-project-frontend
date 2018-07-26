class Adapter {

    // static getUser() {
    //     return fetch(`http://localhost:4000/users/`, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": 'application/json'
    //     },
    //     body: JSON.stringify({firstName, lastName, userName, password })
    //     });
    // }

    static signUp(firstName, lastName, userName, password) {
        return fetch(`http://localhost:4000/users/`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({firstName, lastName, userName, password })
        });
    }

    static logIn(userName, password) {
        return fetch(`http://localhost:4000/sessions/`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({userName, password })
            });
    }

    static getAllSkus() {
        return fetch(`http://localhost:4000/products/`);
    }


    static getSku(skuId) {
        return fetch(`http://localhost:4000/products/`+ skuId);
    }

    static editProduct(skuId, body) {
        return fetch(`http://localhost:4000/products/` + skuId, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({body})
            });
    }
    

    static addSkuToManageInv(skuId, body) {
        return fetch(`http://localhost:4000/products/` + skuId, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({body})
            });
    }

    // Handles both requesting a report and exporting a report 
    static requestReport(reportName) {
        return fetch(`http://localhost:4000/reports/` + reportName)
    }

    static getRecentReports() {
        return fetch(`http://localhost:4000/reports/`);
    }

    static getFees() {
        return fetch(`http://localhost:4000/fees/`)
    }

    static isLoggedIn() {
        return !!localStorage.getItem('token')
    }
    
    static logout() {
        localStorage.removeItem('token');
    }
    
    static getJWT() {
        return localStorage.getItem('token');
    }

}
export default Adapter;
