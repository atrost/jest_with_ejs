import HelloView from './hello'

describe('Hellow view', ()=> {
  it ('Displays a Hello message ', ()=>{
    var view = new HelloView().render();
    expect(view.$el.html()).toContain('Hello');
  })
})