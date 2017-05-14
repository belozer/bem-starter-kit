block('greeting')(
    content()(() => [
        {
            elem : 'viewer',
            content : 'BEM Starter KIT'
        },
        {
            elem : 'form'
        }
    ]),

    elem('form')(
        content()((node) => [
            {
                block : 'input',
                mods : { theme : 'islands', size : 'xl' },
                mix : { block : node.block, elem : 'form-input' },
                placeholder : 'Please enter your name',
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 'xl' },
                mix : { block : node.block, elem : 'form-button' },
                text : 'hello'
            }
        ])
    )
);
