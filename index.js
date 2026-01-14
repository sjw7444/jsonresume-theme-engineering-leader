const
  fs = require('fs'),
  handlebars = require('handlebars'),
  handlebarsWax = require('handlebars-wax');

handlebars.registerHelper({
  isArray: function (value) {
    return Array.isArray(value);
  }
});

function render(resume) {
  let dir = __dirname,
    css = fs.readFileSync(dir + '/style.css', 'utf-8'),
    template = fs.readFileSync(dir + '/resume.hbs', 'utf-8');

  let Handlebars = handlebarsWax(handlebars);

  // inline the CSS to avoid path related issues while developing
  const compiled = Handlebars.compile(template);
  return compiled({ resume: resume, style: `<style>${css}</style>` });
}

module.exports = {
  render: render,
  pdfRenderOptions: {
    format: 'A4',
    mediaType: 'print',
  },
};
