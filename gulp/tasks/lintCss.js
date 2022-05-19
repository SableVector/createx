import gulpStylelint from "gulp-stylelint";

export const lintCss = () => {
    return app.gulp.src(app.path.src.scssall)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'STYLELINTer',
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(
            app.plugins.if(
                app.isDev,
                gulpStylelint({
                    reporters: [
                        {
                            formatter: 'string',
                            console: true
                        }
                    ]
                })
            )
        );
}