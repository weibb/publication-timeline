import { pubs } from './data';
import img from './media/profilepic.png';
export const config = {
    author: {
        displayName: 'Peter L Gehlbach',
        degrees: 'MD, PhD',
        institution: 'Johns Hopkins University',
        image: img,
        summary: 'Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.',
        links: [
            {
                text: 'Click This Informative Link →',
                ref: 'http://google.com',
            },
            {
                text: 'This One Is Great Too →',
                ref: 'http://google.com',
            },
        ],
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
