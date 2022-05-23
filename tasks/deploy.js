import gulp from "gulp";
// import { login, password } from "./credentials";
import gutil from "gulp-util";
import ftp from "vinyl-ftp";

// gulp.task("deploy", function () {
// 	var conn = ftp.create({
// 		host: "vh286.timeweb.ru",
// 		// host: "92.53.96.29",
// 		user: login,
// 		password,
// 		parallel: 10,
// 		log: gutil.log
// 	});

// 	//lindsayhotel.ru/
// 	https: // using base = '.' will transfer everything to /public_html correctly
// 	// turn off buffering in gulp.src for best performance

// 	return gulp.src("dist/**/*").pipe(conn.dest("/public_html"));
// });
