import { default as DBG } from 'debug';
const debug = DBG('notez:notes-store');
const error = DBG('notez:error-store');

var _NotesStore;

export async function useModel(model) {
    try {
        let NotesStoreModule = await import(`./notes-${model}.mjs`);
        let NotesStoreClass = NotesStoreModule.default;
        _NotesStore = new NotesStoreClass();
        return _NotesStore;
    } catch (err) {
        throw new Error(`No recognized NotesStore in ${model} because
          ${err}`);
    }
}

export { _NotesStore as NotesStore };