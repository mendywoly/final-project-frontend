const API_URL = 'http://localhost:4000'

class Adapter {

    static getTopProducts(range) {
        return fetch(`${API_URL}/topProducts`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({range}),
        })
    }

    static isLoggedIn() {
        return !!localStorage.getItem('token')
    }

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

    static getUser (id) {
        return fetch(`${API_URL}/users/` + id, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        })
    }

    static getCurrentUser () {
        return fetch(`${API_URL}/users/`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        })
    }

    static updateUser(body, id) {
        return fetch(`${API_URL}/users/` + id, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({body})
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
        return fetch(`${API_URL}/products/`+ skuId, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        })
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
    static requestReport(generatedReportId) {
        return fetch(`${API_URL}/getReport/`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                generatedReportId
            })
          })
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

    // All fees fetches go here.

    static getCurrentUserFeesPreview() {
        return fetch(`${API_URL}/fees/`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                'Authorization': localStorage.getItem('token')
            },
        })
    }

}
export default Adapter;
