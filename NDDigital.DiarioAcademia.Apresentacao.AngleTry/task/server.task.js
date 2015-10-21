﻿/*
 *
 * SERVER TASKS
 *
 * gulp tasks starting the application
 *
 */

gulp.task('start', 'Starts the  app. --livereload: enable livereload', ['inject'], function () {
    var options = config.getBrowsersyncOptions();
    if (!args.livereload)
        options.files = []; // no files watched
    browserSync.init(options);
    gulp.watch([config.app.less.all], ['compile-less']);
});


gulp.task('start-publish', 'Start publish version of app optimized', ['build'], function () {
    //start application
    browserSync.init({
        server: {
            baseDir: "./dist/"   //publish version
        }
    });
});
