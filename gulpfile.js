/**
 *  Блок переменных
 */
const gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rigger = require('gulp-rigger'),
  cleanCSS = require('gulp-clean-css'),
  spritesmith = require('gulp.spritesmith'),
  rename = require('gulp-rename'),
  del = require('del'),
  browserSync = require("browser-sync").create();

// Пути файлов
const path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    style: 'build/css/',
    img: 'build/images/',
    fonts: 'build/fonts/'
  },
  src: {
    html: 'src/templates/*.html',
    js: 'src/js/*.js',
    style: 'src/scss/main.scss',
    img: 'src/images/**/*.*',
    fonts: 'src/fonts/*'
  },
  watch: {
    html: 'src/templates/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/scss/**/*.scss',
    img: 'src/images/**/*.*'
  }
};

// Настройки локального сервера
const config = {
  server: {
    baseDir: "./build"
  },
  // tunnel: true,
  host: 'localhost',
  port: 9000,
};

// Запуск сервера
function browserSyncInit(done) {
  browserSync.init(config);
  done();
}

/**
 * Задачи gulp
 */
// Конвертация и сборка стилей
function style() {
  return gulp
    .src(path.src.style)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 15 versions'],
      cascade: true
    }))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(path.build.style))
    .pipe(browserSync.stream());
}

// Сборка html
function html() {
  return gulp
    .src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
}

// Оптимизация изображений
function images() {
  return gulp
    .src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()],
        interlaced: true
      })
    )
    .pipe(gulp.dest(path.build.img));
}

function spriteIcons() {
  const spriteData = gulp.src('src/images/icons/*.png').pipe(spritesmith({
		// retinaSrcFilter: 'src/images/icons/*@2x.png',
		imgName: 'sprite@1x.png',
		// retinaImgName: 'sprite@2x.png', 
    cssName: 'sprite.scss',
    imgPath: '../../images/sprite@1x.png', //Путь, прописываемый в файле scss изображениям
		// retinaImgPath: '../../images/sprite@2x.png'
		}));
  return spriteData.img.pipe(gulp.dest('src/images/')), // Путь, куда сохраняем картинку
         spriteData.css.pipe(gulp.dest('src/scss/')); // Путь, куда сохраняем стили
}

// Копирование шрифтов
function fonts() {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
}

//Сборка js
function js() {
  return gulp
    .src(path.src.js)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
}

// Отслеживать изменения в файлах
function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.style], style);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

// Удаляем папку с билдом
function clean() {
  return del([path.build.html]);
}

const build = gulp.series(clean, gulp.parallel(style, js, html, spriteIcons, images, fonts));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSyncInit));


// Экспортируем команды для доступа из командной строки
exports.images = images;
exports.style = style;
exports.js = js;
exports.html = html;
exports.clean = clean;
exports.sprite = spriteIcons;

exports.watch = watch;
exports.build = build;
