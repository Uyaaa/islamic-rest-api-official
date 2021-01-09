const path = require('path')
const fs = require('fs').promises
const fileJson = path.join(__dirname, '..', '..', 'data', 'dataTahlil.json')

module.exports = async (_, res) => {
    const data = await fs.readFile(fileJson, 'utf-8')
    const islamic = JSON.parse(data)

    res.status(200).send(islamic)
}
