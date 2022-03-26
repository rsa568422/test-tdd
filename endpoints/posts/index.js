module.exports = ({ axios }) => ({
    post: async (req, res) => {
        const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
        if (users.find(x => x.id === req.body.userId)) {
            const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body)
            return res.status(201).send(data)
        }
        res.sendStatus(400)
    }
})
