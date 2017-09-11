const gulp = require('gulp');

gulp.task(process.argv[2], function() {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth()+1;
    let d = date.getDate();
    let name = process.argv[2];
    require('fs').writeFileSync(`_posts/${y}-${m}-${d}-${name.replace(/ /g,"_")}.md`, `---\nlayout: post\ntitle: ${name}\n---\n\n`);
});