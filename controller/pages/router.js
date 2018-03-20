import fs from 'fs';
let getIndexTemplate = fs.readFileSync('./static/template/index.html');
function indexController(ctx, next) {
    ctx.type = 'text/html';
    ctx.body = getIndexTemplate;
}
let getSearchTemplate = fs.readFileSync('./static/template/login.html');
function loginController(ctx, next) {
    //console.log(getSearchTemplate);
    ctx.type = 'text/html';
    ctx.body = getSearchTemplate;
}
export {indexController,loginController}