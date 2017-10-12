import { pubs } from './data';
console.log(pubs);
export const config = {
    author: {
        creditName: 'Gehlbach PL',
        displayName: 'Peter L. Gehlbach',
        degrees: 'MD, PhD',
        institution: 'Johns Hopkins University',
        photo: "/media/2.png",
    },
    pubs: pubs,
    categories: [
        'all',
        'Basic',
        'Clinical',
        'Engineering',
    ],
    types: [
        'all',
        'Original Research',
        'Collaborative',
        'Case Report',
        'Abstract',
        'Book Chapter',
        'Editorial',
        'Poster',
        'Proceeding Report',
        'Patent',
        'Grant',
        'Other',
    ],
}
