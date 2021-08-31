let resultFolder = "dist";
let sourceFolder = "src"; 

let path = {
    build:{
        html: resultFolder+"/",
        css: resultFolder+"/css/",
        js: resultFolder+"/js/",        
        img: resultFolder+"/img/",
        fonts: resultFolder+"/fonts/",
    },
    src:{
        html: sourceFolder+"/*.html",
        css: sourceFolder+"/css/*.css",
        minJs: sourceFolder+"/js/*.min.js",
        js: [sourceFolder+"/js/*.js", "!" + sourceFolder+"/js/*.min.js"],
        img: sourceFolder+"/img/**/*.{jpg,png,jpeg}",
        nonCompressibleImg: [sourceFolder+"/img/**", "!" + sourceFolder+"/img/**/*.{jpg,png,jpeg}"],
        fonts: sourceFolder+"/fonts/**/**/*.{woff,woff2}",
    },
    clean: "./" + resultFolder + "/"
};

let {src, dest, gulp, series} = require('gulp');
let del = require('del');
let uglify = require('gulp-uglify');
var tinypng = require('gulp-tinypng-compress');



function html() {
    return src(path.src.html)
        .pipe(dest(path.build.html))  
};
function cleanDist() {
    return del(path.clean);
};
function moveCss() {
    return src(path.src.css)
    .pipe(dest(path.build.css))
};
function minifyJs() {
    return src(path.src.js)
        .pipe(uglify())
        .pipe(dest(path.build.js));
    // return src(path.src.minjs)
    //     .pipe(dest(path.build.js));
};
function moveMinifiedJs() {
    return src(path.src.minJs)
        .pipe(dest(path.build.js));
};
function imageMinify() {
    return src(path.src.img)
    .pipe(tinypng({
        key: 'RlSvZTP2BVnbvcJmQdfbgGvxQx6x02R0'
    }))
    .pipe(dest(path.build.img));
};
function moveFonts() {
    return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
};
function moveSVG() {
    return src(path.src.nonCompressibleImg)
    .pipe(dest(path.build.img))
};
function defaultTask() {
    // place code for your default task here
    // вот сюда потом ебануть все функции по типу html(); и тд
    cleanDist();
    html();
    moveCss();
    minifyJs();

    // cb();
}
  
// exports.default = defaultTask
exports.default = series(cleanDist, html, moveCss, minifyJs, moveMinifiedJs, moveFonts, imageMinify, moveSVG);