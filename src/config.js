import { pubs } from './data';
import img from './media/profilepic.png';
for(let i = 0; i < pubs.length; i += 1) {
  pubs[i].id = i;
}
export const config = {
    author: {
        displayName: 'Peter L Gehlbach',
        degrees: 'MD, PhD',
        institution: 'Johns Hopkins University',
        image: img,
        summary: 'Peter Louis Gehlbach, MD, PhD, is Professor of Ophthalmology at the Johns Hopkins Wilmer Eye Institute. Dr. Gehlbach specializes in performing complex vitreo-retinal surgery and his grant-supported research is directed at discovering new treatments for blinding eye disease.',
        link1: [
            {
                text: 'Professional Site →',
                ref: 'https://weibb.github.io/pgeh-site/',
            },
        ],
        link2: [
            {
                text: 'Johns Hopkins Profile →',
                ref: 'https://www.hopkinsmedicine.org/profiles/results/directory/profile/0015470/peter-gehlbach',
            },
        ],
        link3: [
            {
                text: 'LinkedIn →',
                ref: 'https://www.linkedin.com/in/drpetergehlbach',
            },
        ],
        link4: [
            {
                text: 'Doximity →',
                ref: 'https://www.doximity.com/cv/drpetergehlbach',
            },
        ],
        link5: [
            {
                text: 'Google Scholar →',
                ref: 'https://scholar.google.com/citations?user=fzCX-dEAAAAJ&hl=en',
            },
        ],
    },
    pubs: pubs,
    categories: [
        'All',
        'Basic',
        'Clinical',
        'Engineering',
    ],
    types: [
        'All',
        'Original Research',
        'Clinical Trial',
        'Case Report',
        'Abstract',
        'Book Chapter',
        'Editorial',
        'Proceeding Report',
        'Patent',
    ],
}
