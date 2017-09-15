export const config = {
    pubs: [
        {
            id: 1,
            title: 'Development of A Custom Imaging System for Simultaneous Monitoring of Retinal and Cortical Physiology',
            publication: 'Association for Research in Vision and Ophthalmology, Annual Meeting',
            authors: [
                {
                    name: 'Gehlbach GL',
                },
                {
                    name: 'Taylor R',
                },
                {
                    name: 'Mori K',
                },
            ],
            category: ['basic'],
            type: ['caseReport', 'poster'],
            link: 'http://google.com',
            date: '2009',
            image: '/media/1.png',
        },
        {
            id: 2,
            title: 'Non-Diabetic Ocular Abnormalities Detected by Telemedicine Diabetic Retinopathy Assessment Technology in Safety-Net Medical Clinics',
            publication: '48th Annual Retina Society Meeting',
            authors: [
                {
                    name: 'Zimmer-Geller I',
                },
                {
                    name: 'Gehlbach PL',
                },
            ],
            category: ['clinical'],
            type: ['collaborativeResearch', 'abstract'],
            link: 'http://google.com',
            date: '2012',
            image: './media/2.png',
        },
        {
            id: 3,
            title: 'Noninvasive imaging of retinal blood vessels and blood flow using a custom, non-mydriatic, handheld optical imager designed for use in primary care and telehealth settings',
            publication: 'ARVO',
            authors: [
                {
                    name: 'Rege A',
                },
                {
                    name: 'Raje K',
                },
                {
                    name: 'Kheng M',
                },
            ],
            category: ['engineering'],
            type: ['collaborativeResearch', 'proceedingReport'],
            link: 'http://google.com',
            date: '2015',
            image: '/media/3.png',
        },
        {
            id: 4,
            title: 'Evaluation of Motion Artifact Associated with Use of a Custom, Handheld Imaging Device for Non-Invasive Retinal Blood Flow (RBF) Measurements in Telehealth Settings',
            publication: 'ARVO',
            authors: [
                {
                    name: 'Brooke M',
                },
                {
                    name: 'Cheng T',
                },
            ],
            category: ['clinical'],
            type: ['collaborativeResearch', 'abstract', 'caseReport'],
            link: 'http://google.com',
            date: '2015',
            image: '/media/4.png',
        },
    ],
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
        'Butts',
    ],
}
