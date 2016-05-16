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


var paths = {
        css : {
                src  : 'sass',
                dist : 'css'
        }
}

var banner = ['/**',
        ' * Flex layout attribute',
        ' * <%= pkg.description %>',
        ' * ',
        ' * VERSION: v<%= pkg.version %>',
        ' * DATE:    ' + util.date( 'yyyy-mm-dd' ),
        ' * URL:     <%= pkg.homepage %>',
        ' * AUTHOR:  <%= pkg.author.name %> | <%= pkg.author.email %> | <%= pkg.author.web %>',
        ' * LICENSE: <%= pkg.license %>',
        ''].join('\n');


gulp.task( 'compile-css', function() {
        return gulp.src( paths.css.src + '/*.scss' )
            .pipe( sourcemaps.init() )
            .pipe( sass() )
            .pipe( prefix( {
                    browsers : ['last 2 version']
                    //,cascade : false
            } ) )
            .pipe(header( banner, { pkg : pkg } ) )
            .pipe( size( {pretty : true, showFiles : true} ) )
            .pipe( sourcemaps.write( './maps/' ) )
            .pipe( gulp.dest( paths.css.dist ) );
} );

gulp.task( 'minify-css', function() {
        return gulp.src( paths.css.dist + '/flex-layout-attribute.css' )
            .pipe( cssnano() )
            .pipe( header( banner, { pkg : pkg } ) )
            .pipe( rename( {suffix : '.min'} ) )
            .pipe( size( {pretty : true, showFiles : true} ) )
            .pipe( gulp.dest( paths.css.dist ) );
} );

gulp.task( 'watch', function() {
        gulp.watch( paths.css.src + '/**/*.scss', ['compile-css', 'minify-css'] );
} );

gulp.task( 'default', ['compile-css', 'minify-css', 'watch'] );
