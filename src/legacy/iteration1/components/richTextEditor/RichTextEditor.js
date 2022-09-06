import '@wangeditor/editor/dist/css/style.css' // import css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { i18nChangeLanguage } from '@wangeditor/editor'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

i18nChangeLanguage('en')

const RichTextEditor = (props) => {
    // editor instance
    const [editor, setEditor] = useState(null);

    // editor content
    const [html, setHtml] = useState('<p>hello</p>');

    // Simulate ajax async set html
    useEffect(() => {
        setTimeout(() => {
            setHtml('<p></p>')
        }, 1500)
    }, [])

    const toolbarConfig = { }

    const editorConfig = {
        placeholder: 'Type here...',
        onBlur: props.getContent(html)
    }

    // Timely destroy editor, important!
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <div>
            <div style={{ border: '1px solid #ccc', zIndex: 100}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            <div style={{ marginTop: '15px' }}>
                {html}
            </div>
        </div>
    );
};

export default RichTextEditor;