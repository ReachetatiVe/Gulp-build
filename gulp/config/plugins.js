import replace from "gulp-replace";
import plumber from "gulp-plumber"; //Обработка ошиибок
import notify from "gulp-notify";
import browserSync from "browser-sync";
import newer from "gulp-newer"; //Проверка обновлений (картинок)

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
}