var gulp        = require( 'gulp' ),
    sass        = require( 'gulp-sass' ),
    rename      = require( 'gulp-rename' ),
    cssnano     = require( 'gulp-cssnano' ),
    prefix      = require( 'gulp-autoprefixer' ),
    size        = require( 'gulp-size' ),
    sourcemaps  = require( 'gulp-sourcemaps' ),
    util        = require( 'gulp-util' ),
    header      = require( 'gulp-header' ),
    pkg         = require( './package.json' );

var dir = {
        css : {
                src  : 'sass',
                dist : 'css'
        }
};

var banner = ['/**',
        ' * Flex layout attribute',
        ' * <%= pkg.description %>',
        ' * ',
        ' * VERSION: v<%= pkg.version %>',
        ' * DATE:    ' + util.date( 'yyyy-mm-dd' ),
        ' * URL:     <%= pkg.homepage %>',
        ' * AUTHOR:  <%= pkg.author.name %> | <%= pkg.author.email %> | <%= pkg.author.web %>',
        ' * LICENSE: <%= pkg.license %> ',
        ' */',
        ' ',
        ''].join('\n');


gulp.task( 'css-compile', function() {
        return gulp.src( dir.css.src + '/' + pkg.name + '.scss' )
            .pipe( sourcemaps.init() )
            .pipe( sass() )
            .pipe( prefix( {browsers : ['last 2 version']}) )
            .pipe( header( banner, { pkg : pkg } ) )
            .pipe( size( {pretty : true, showFiles : true} ) )
            .pipe( gulp.dest( dir.css.dist ) )
            .pipe( sourcemaps.write( './maps/' ) )
            .pipe( gulp.dest( dir.css.dist ) );
} );

gulp.task( 'css-minify', ['css-compile'], function() {
        return gulp.src( dir.css.dist + '/' + pkg.filename )
            .pipe( cssnano() )
            .pipe( header( banner, { pkg : pkg } ) )
            .pipe( rename( {suffix : '.min'} ) )
            .pipe( size( {pretty : true, showFiles : true} ) )
            .pipe( gulp.dest( dir.css.dist ) );
} );

gulp.task( 'watch', function() {
        gulp.watch( dir.css.src + '/**/*.scss', ['css-minify'] );
} );

gulp.task( 'default', ['css-minify'] );
