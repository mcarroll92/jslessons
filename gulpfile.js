const gulp = require(`gulp`);
const uglify = require(`gulp-uglify`);
const rename = require(`gulp-rename`);
const webpack = require(`webpack-stream`);
gulp.task(`scripts`, () => gulp
    .src(`javascript/index.js`)
    .pipe(webpack({
        devtool: `module-inline-source-map`,
        module: {
            loaders: [{
                test: /.jsx?$/,
                loader: `babel-loader`,
                exclude: /node_modules/,
                query: {
                    plugins: [`transform-runtime`, `transform-private-underscore`],
                    presets: [`latest`, `es2017`]
                }
            }]
        }
    }))
    .pipe(rename(`dist.js`))
    .pipe(gulp.dest(`.`))
    .pipe(rename({ suffix: `.min` }))
    .pipe(uglify())
    .pipe(gulp.dest(`.`))
);
