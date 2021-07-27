const gulp = require("gulp");
const mergeAddon = require("@foxitsoftware/gulp-merge-addon");

const addonDirectory = 'src/foxit-lib/uix-addons/'

gulp.task("merge-addons", () => {
    return gulp
        .src([
          addonDirectory + 'export-form/addon.info.json',
          addonDirectory + 'file-property/addon.info.json',
          addonDirectory + 'full-screen/addon.info.json',
          addonDirectory + 'import-form/addon.info.json',
          addonDirectory + 'multi-media/addon.info.json',
          addonDirectory + 'password-protect/addon.info.json',
          addonDirectory + 'path-objects/addon.info.json',
          addonDirectory + 'print/addon.info.json',
          addonDirectory + 'redaction/addon.info.json',
          addonDirectory + 'text-object/addon.info.json',
          addonDirectory + 'undo-redo/addon.info.json',
          addonDirectory + 'thumbnail/addon.info.json'
        ])
        .pipe(
            mergeAddon({
                library: "Addons",
                filename: "merged-foxit-addons.js",
                lazyInit: true,
                progress: true,
            })
        )
        .pipe(gulp.dest("src/"));
});
