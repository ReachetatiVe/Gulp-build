import fs, { appendFile } from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
  return (
    //Search .otf fonts
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.otf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%=error.message %>",
          })
        )
      )
      //Convert to .ttf
      .pipe(
        fonter({
          formats: ["ttf"],
        })
      )
      // Выгрузка в исходную папку
      .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
  );
};

export const ttfToWoff = () => {
  //Search .ttf fonts
  return (
    //Search
    app.gulp
      .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%=error.message %>",
          })
        )
      )
      //Convert to .woff
      .pipe(
        fonter({
          formats: ["woff"],
        })
      )
      //Upload file to folder
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
      //Search .ttf fonts
      .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
      //Convert to .woff2
      .pipe(ttf2woff2())
      //Upload file to folder
      .pipe(app.gulp.dest(`${app.path.build.fonts}`))
  );
};

export const fontStyle = () => {
  let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`;
  //Check if exist
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsFile)) {
        
      }
    }
  })
}
