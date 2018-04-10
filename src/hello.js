import Backbone from 'backbone';
import HelloTempl from './hello-tmpl';

// HelloTempl is a module that contains a precompiled version of the hello-templ.ejs.
// If using Backbone.js, you can render it like so:

const Hello = Backbone.View.extend({
  template: HelloTempl,
  
  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = Hello;