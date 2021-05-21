exports.getIndex = async (req, res) => {
    res.send('Hello, index!!!');
};

exports.getUser = async (req, res) => {
    res.send('Merhaba, ben superuser!');
}
