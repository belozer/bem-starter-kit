block('keep-calm')(
    content()((node, ctx) => [
        'KEEP CALM',
        'AND',
        'TRY ' + ctx.text
    ].join('<br>'))
);
