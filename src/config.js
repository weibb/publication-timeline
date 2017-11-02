import { pubs } from './data';
import img from './2.png';
export const config = {
    author: {
        creditName: 'Gehlbach PL',
        displayName: 'Peter L. Gehlbach',
        degrees: 'MD, PhD',
        institution: 'Johns Hopkins University',
        image: img,
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
