﻿/*
 *
 * SERVER TASKS
 *
 * gulp tasks starting the application
 *
 */

gulp.task('start', 'Start dev app.--livereload: use livereload', ['inject'], function () {
    var options = config.getBrowsersyncOptionsDefault();
    if (!yargs.livereload)
        options.files = [];  // break livereload - no watched files
    browserSync(options);
});

gulp.task('start-app', 'Start publish version of app optimized', ['build-optimized'], function () {
    //start application
    browserSync({
        server: {
            baseDir: "./dist/"   //publish version
        }
    });
});
