import { pubs } from './data';
import img from './media/profilepic.png';
export const config = {
    author: {
<<<<<<< HEAD
        creditName: 'Gehlbach PL',
        displayName: 'Peter L Gehlbach',
=======
        displayName: 'Peter L. Gehlbach',
>>>>>>> Use test data from CSV generator
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
