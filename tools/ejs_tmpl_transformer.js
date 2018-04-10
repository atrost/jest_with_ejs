const loader = require('ejs-loader'); 
module.exports = {
  process(src, filename, config, options) {
    return loader(src);     
  };
};