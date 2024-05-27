/// <reference types= "cypress" />

describe('api testing test suite', function () {
    it('GET API req test case', function () {
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            cy.log(JSON.stringify(response.body));
            console.log(JSON.stringify(response.body));
            cy.log(response.body.data[0].first_name);
            cy.log(response.body.data[0].email);
            expect(response.status).to.eql(200);
            expect(response.body.data[1].first_name).to.eql("Lindsay");

            const responseLength = response.body.data.length;

            cy.log(responseLength);
            cy.wait(1000);
            for (let i = 0; i < responseLength; i++) {
                cy.log(JSON.stringify(response.body.data[i]));
            }

        })
    })

    // xit is used to not to run the particular test case
    xit('xit test case', function () {

    })

    it('POST API req test case', function () {
        // cy.request('POST', 'https://reqres.in/api/users', {
        //     "id": 1,
        //     "email": "george.bluth@reqres.in",
        //     "first_name": "George",
        //     "last_name": "Bluth",
        //     "avatar": "https://reqres.in/img/faces/1-image.jpg"
        //     }).then(function(res){
        //         expect(res.status).to.eql(201);
        //     });

        // Another way to do the same above
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: JSON.stringify({
                "name": "morpheus",
                "job": "leader"
            }),
            headers: { 'content-type': 'application/json' }
        }).then(res => {
            cy.log(JSON.stringify(res.body))
            expect(res.status).to.eq(201);
        })

        // Another way using fixtures to grab data to do the same above
        cy.fixture('users.json').then(function (data) {

            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: `{
                    "name": "${data[0].name}",
                    "job": "leader"
                }`,
                headers: { 'content-type': 'application/json' }
            }).then(res => {
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.eq(201);
            })
        })

    })

    it('PUT API request test case', function () {
        cy.fixture('users.json').then(function (data) {

            cy.request({
                method: 'PUT',
                url: 'https://reqres.in/api/users/2',
                body: `{
                    "name": "${data[0].name}",
                    "job": "SDET"
                }`,
                headers: { 'content-type': 'application/json' }
            }).then(res => {
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.eq(200);
            })
        })
    })

    it('DELETE API request test case', function () {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
        }).then(res => {
            cy.log(JSON.stringify(res.body))
            expect(res.status).to.eq(204);
        })
    })

    it('Authentication token test case', function () {
        cy.request({
            url: 'https://dummyjson.com/auth/login',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 30, // optional, defaults to 60
            })
        }).then(res => {
            cy.log(JSON.stringify(res.body.token))
            expect(res.status).to.eq(200);
        });


        /* providing token in bearer */
        cy.request({
            url:'https://dummyjson.com/auth/me', 
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MTY1NDYwOTQsImV4cCI6MTcxNjU0Nzg5NH0.CZIEulieB3o0EUIXbWgXmleDhzN79kPjNNak1plxY30',
            },
        }).then(res => {
            expect(res.status).to.eq(200);
        });
    })
})