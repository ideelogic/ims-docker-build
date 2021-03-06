var express = require('express')
var app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, './mmis-frontend-dist/contract')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './mmis-frontend-dist/contract/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.send({ ok: false, error: err.message })
});

let port = 4008;

app.listen(port, function () {
  console.log(`Contract frontend listening on port ${port}!`)
});