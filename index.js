const {json} = require('micro')
const urlencoded = require('urlencoded-body-parser')

module.exports = async (req) => {
  switch (req.headers['content-type']){
    case 'application/json':
      return await json(req)
    case 'application/x-www-form-urlencoded':
      return await urlencoded(req)
    default:
      throw new Error(`Can't parse ${req.headers['content-type']}`)
  }
}
