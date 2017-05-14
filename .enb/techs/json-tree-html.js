var dropRequireCache = require('enb/lib/fs/drop-require-cache');

module.exports = require('enb/lib/build-flow').create()
    .name('json-tree-html')
    .target('target', '?.html')

    .useSourceFilename('bemjson', '?.bemjson.js')
    .useSourceFilename('bemtree', '?.bemtree.js')
    .useSourceFilename('bemhtml', '?.bemhtml.js')

    .builder((bemjsonFilename, bemtreeFilename, bemhtmlFilename) => {
        dropRequireCache(require, bemjsonFilename);
        dropRequireCache(require, bemtreeFilename);
        dropRequireCache(require, bemhtmlFilename);

        const BEMJSON = require(bemjsonFilename);
        const BEMTREE = require(bemtreeFilename).BEMTREE;
        const BEMHTML = require(bemhtmlFilename).BEMHTML;

        return BEMHTML.apply(BEMTREE.apply(BEMJSON));
    })

    .createTech();
