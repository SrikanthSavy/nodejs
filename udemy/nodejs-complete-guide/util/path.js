//Helper class to add direct project directory , while loadin html
const path = require('path')

  // Will fgive you the root of project directory
  module.exports=path.dirname(process.mainModule.filename) // Deprecateddddddddd
//module.exports= path.dirname(require.main.path)