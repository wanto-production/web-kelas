import { atom } from 'jotai';

// Atoms for form fields
export const nameAtom = atom('');
export const emailAtom = atom('');
export const subjectAtom = atom('');
export const messageAtom = atom('');

// Atoms for form status
export const formSuccessAtom = atom(false);
export const formErrorAtom = atom<string | null>(null);
export const isPendingAtom = atom(false);