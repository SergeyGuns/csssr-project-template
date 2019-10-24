import gulp from "gulp";
import { login, password } from "./credentials";
import gutil from "gulp-util";
import ftp from "vinyl-ftp";

gulp.task("deploy", function() {
	var conn = ftp.create({
		// host: "lindsayhotel.ru",
		host: "cb87170.tmweb.ru",
		user: login,
		password,
		parallel: 10,
		log: gutil.log
	});

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src("dist/**/*").pipe(conn.dest("/public_html"));
});
