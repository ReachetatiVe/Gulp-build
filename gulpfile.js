import gulp from "gulp";
import { path } from "./gulp/config/path.js";
//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
}

//tasks import
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

//Наблюдаель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, watcher);

//default task
gulp.task('default', dev);