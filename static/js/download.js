;
(function (d, n) {
  'use strict';
  var os = n.platform.match(/(Win|Mac|Linux)/);
  var x = n.userAgent.match(/x86_64|Win64|WOW64/) ||
    n.cpuClass === 'x64' ? 'x64' : 'x86';
  var db = d.getElementById('home-downloadbutton');
  if (!db) { return; }
  var version = db.dataset.version;
  var dlLocal = db.dataset.dlLocal;
  var text = 'textContent' in db ? 'textContent' : 'innerText';
  switch (os && os[1]) {
    case 'Mac':
      db.href += 'node-' + version + '.pkg';
      db[text] = dlLocal + ' OS X (x64)';
      break;
    case 'Win':
      // Windows 64-bit files for 0.x.x need to be prefixed with 'x64/'
      db.href += (version[1] == '0' && x == 'x64' ? x + '/' : '') + 'node-' + version + '-' + x + '.msi';
      db[text] = dlLocal + ' Windows (' + x +')';
      break;
    case 'Linux':
      db.href += 'node-' + version + '-linux-' + x + '.tar.gz';
      db[text] = dlLocal + ' Linux (' + x + ')';
      break;
  }
})(document, navigator);
