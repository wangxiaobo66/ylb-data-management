import fs from 'fs';
let getIndexTemplate = fs.readFileSync('./management-web/static/template/index.html');
function indexController(ctx, next) {
    ctx.type = 'text/html';
    ctx.body = getIndexTemplate;
}
let getSearchTemplate = fs.readFileSync('./management-web/static/template/login.html');
function loginController(ctx, next) {
    //console.log(getSearchTemplate);
    ctx.type = 'text/html';
    ctx.body = getSearchTemplate;
}
export {indexController,loginController}