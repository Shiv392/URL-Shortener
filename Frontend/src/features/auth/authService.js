export const SignUpService = ({ name, email, password }) => {

    return fetch('http://localhost:8855/signup',
        {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                name: name, email: email, password: password
            })
        }
    )
        .then(res => res.json()).then(data => console.log('signpu response--------->', data))
        .catch(err => {
            console.log('error------->', err);
        })
}

export const LoginService = ({ email, password }) => {

}