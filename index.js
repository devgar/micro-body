const {json} = require('micro')
const {parse} = require('content-type')
const urlencoded = require('urlencoded-body-parser')

module.exports = async (req) => {
  if (!req.headers['content-type']) return {}
  switch (parse(req).type){
    case 'application/json':
      return await json(req)
    case 'application/x-www-form-urlencoded':
      return await urlencoded(req)
    default:
      throw new Error(`Can't parse ${req.headers['content-type']}`)
  }
}
