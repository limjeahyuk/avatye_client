import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Editor.css'
import UploadAdapter from './UploadAdapter';

const Editor = ({editorChangeHandler}) => {
   

    function MyCustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new UploadAdapter(loader)
        }
    }

    return <CKEditor
        
        config={{
            extraPlugins: [MyCustomUploadAdapterPlugin]
        }}
            editor={ ClassicEditor }
            data="<p>프로젝트 소개</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                // console.log({ event, editor, data });
                editorChangeHandler(data);
            } }
            onBlur={ ( event, editor ) => {
                // console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                // console.log( 'Focus.', editor );
            } }
        />
}

export default Editor;