const { SignUp } = require('../../models/authentication/SignUp');

const SignUpController = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const { success, message } = await SignUp({ name: name, email: email, password: password });
        if (!success) {
            return res.status(404).json({ success: false, message: message });
        }

        return res.status(201).json({ success: true, message: message });
    }
    catch (err) {
        console.log('errror---------->', err);
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
}

module.exports = { SignUpController };