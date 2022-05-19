// Получпем имя папки проэкта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать ${rootFolder}
const srcFolder = `./src`;

export const path = {
	build: {
		fonts: `${buildFolder}/fonts`,
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		iconssvg: `${srcFolder}/img/icons/**/*.svg`,
		images: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		js: `${srcFolder}/js/main.js`,
		scss: `${srcFolder}/scss/style.scss`,
		scssall: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		svgicons: `${srcFolder}/img/icons/**/*.svg`,
		images: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: 'test'
};