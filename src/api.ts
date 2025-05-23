

import { App, View, WorkspaceLeaf } from 'obsidian';

import {dialog_suggest} from 'src/gui/inputSuggester'
import {dialog_prompt} from 'src/gui/inputPrompt'
import { EasyEditor } from './editor';
import { File } from './file';

export class EasyAPI {
    app: App;
    dialog_suggest: Function
	dialog_prompt: Function
    editor: EasyEditor
    file: File

    constructor(app: App) {
        this.app = app;
        this.dialog_suggest = dialog_suggest;
		this.dialog_prompt = dialog_prompt;
        this.editor = new EasyEditor(app,this);
        this.file = new File(app,this);
    }

    get_plugin(name:string){
        return (this.app as any).plugins?.plugins[name]
    }

    get nc(){
        return this.get_plugin('note-chain');
    }
}