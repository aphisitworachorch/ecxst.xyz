let mix = require('webpack-mix');

mix.sass('src/sass/app.sass', 'css').js('src/js/app.js', 'js').options({
    processCssUrls: true,
    purifyCss: false,
    uglify: {
        uglifyOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
});
const imagemin = require('imagemin');
const imageTran = require('imagemin-jpegoptim');

(async () => {
    const files = await imagemin(['assets/images/*.{jpg,png}'], {
        destination: 'images',
        plugins: [
            imageTran({
                size:'16%'
            })
        ]
    });
    console.log("Completed ! ");
})();
module.exports = {
    entry: {
        app: ['babel-polyfill','./src/js/app.js']
    }
}
