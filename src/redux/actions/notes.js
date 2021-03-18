import swal from "sweetalert";

import { db } from "../../firebase/firebase-config";
import { types } from "../types/types";

import { loadNotes } from '../../helpers/loadNotes';
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = (newNote) => {
    return async ( dispatch, getState ) => {

        const state = getState();
        //console.log(state);
        const { uid } = state.auth;

        const doc = await db.collection(`${ uid }/journal/notes`).add(newNote);

        //dispatch( activeNote(doc.id, newNote) );
        dispatch( addNewNote(doc.id, newNote) );

        await swal('Saved',newNote.title , 'success');
    }
}

export const activeNote = (id, note) => ({
    type: types.notesAcitve,
    payload: {
        id: id,
        ...note
    }
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload:{
        id: id,
        ...note
    }
})


export const startLoadingNotes = (uid) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
})

export const startSaveNote = ( note ) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if( !note.url ){
            delete note.url;    
        }
        
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );
        
        dispatch( refreshNote( note.id, noteToFirestore ) );

        swal('Saved',note.title, 'success');
        //dispatch( startLoadingNotes( uid ) );
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdate,
    payload: {
        id, 
        note: {
            id: id,
            ...note,
        }
    }
});


export const startUploading = (file) => {
    return async (dispatch, getState) => {

        const { active:activeNote } = getState().notes;

        swal({ 
            title: 'Uploading....',
            text: 'Please wait...',
            showConfirmButton: false,
            allowOutsideClick: false,
            onBeforeOpen : ()=>{
                swal.showLoading();
            }
        })

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;
        dispatch( startSaveNote( activeNote ))

        swal.close();        
        
    }
}

export const startDeleteNote = (id) => {
    return async ( dispatch, getState ) => {

        const uid = getState().auth.uid;
        await db.doc(`${ uid }/journal/notes/${ id }`).delete();
        
        dispatch( deleteNote( id ) );
    }
}

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id,
})


export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})