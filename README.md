**publication-timeline** is an interactive CV for use by professionals in the sciences, medicine, and academia. The app allows a user to browse a large number of the author's published works in chronological order and filter publications by type and category.

The app uses a simple config object stored in `config.js` to set the author name and details, as well as a list of publication types and categories. The config pulls a publication list from `data.js`, which is structured to receive data from a [simple spreadsheet](https://docs.google.com/spreadsheets/d/1lKKAnrnslDNZ2zbxItiS6UxnZc_caRLbFBMO7BeegUU/edit#gid=0) processed through one of the many [CSV-to-JSON](http://www.convertcsv.com/csv-to-json.htm) converters available online.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

- [Installation](#installation)
- [Config Object](#config-object)
- [Publication Object](#publication-object)
- [State Object](#state-object)
- [Events](#events)
- [Components](#components)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)


## Installation

`npm install` to install dependencies
`npm start` to initialize a test server

## Config Object

The config object is stored in `config.js`.

1. **Author** *object* - author info, displayed in the left sidebar.
    - **displayName** *string* - the author's name
    - **degrees** *string* - any degrees that should appear after the author's name
    - **institution** *string* - university, hospital, or other affiliation
    - **image** - a headshot or other featured image, imported in `config.js`
    - **summary** *string* - a text summary, revealed by clicking "About" in the sidebar
    - **links** *array* - one or more link objects to include in the "About" panel
        - **link** *object*
            - **text** *string* - link text
            - **ref** *string* - link url
1. **pubs** - imported from `data.js`
1. **categories** *array* - list of all publication categories for filtering the timeline
    - **category** *string* - a publication category
1. **types** *array* - list of all publication types for filtering the timeline
    - **type** *string* - a publication type
```
{
    author: {
        displayName: 'Firstname Lastname',
        degrees: 'MD, PhD',
        institution: 'Temple University',
        image: img,
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

```

## Publication Object

An array of publications is stored in `data.js`.

1. **id** *number* - a unique contiguous int for the publication. In a future update these will be set automatically instead of included in the config.
1. **title** *string* - the title of the work
1. **publication** *string* - the journal or other publication in which the work was published
1. **author1** *string* - the work's primary author
1. **author2** *string* - another author
1. **author3** *string* - another author
1. **moreAuthors** *boolean* - `true` if there are more than 3 authors of the work. Displays 'et al' when the work is rendered
1. **category** *string* - a category that matches a category from the config array, used for filtering
1. **type** *string* - a publication type that matches a type from the config array, used for filtering
1. **link** *string* - a url where the user can find the work
1. **date** *number* - the date of publication, used for sorting works on the timeline
1. **image** *string* - an accent image to display in the summary
```
{
  "id": 235,
  "title": "Efficacy of a moon bounce for the glory of the Old Gods",
  "publication": "Nature Medicine",
  "author1": "Ward",
  "author2": "Moore",
  "author3": "",
  "moreAuthors": true,
  "category": "Basic",
  "type": "Patent",
  "link": "http://google.com",
  "date": 2003,
  "image": "img4"
}
```
## State Object

The starting state is set in `App.js`.

1. **config** - config object imported from `config.js`
1. **minYear** *number* - the first year rendered in the timeline
1. **maxYear** *number* - the last year rendered in the timeline
1. **matches** *array* - the array of publications that match the type/category selected, created by `filter()`. The default values for type and category are 'all', so `filter()` will return all publications as matches on initial load.
1. **type** *string* - the publication type set by `selectType()`. Defaults to 'all'.
1. **category** *string* - the publication category set by `selectCategory()`. Defaults to 'all'.
1. **pub** *number* - the selected publication id, defaults to the last publication in `config.pubs` (loaded from `data.js`)
1. **initialLoad** *boolean* - this value suppresses the summary panel animation on initial load
1. **aboutVisible** *boolean* - about panel is visible. Toggled by `showAbout()`. Defaults to `false`.


```
const startingState = {
    config: config,
    minYear: 1970,
    maxYear: 2017,
    matches: [],
    type: 'all',
    category: 'all',
    pub: config.pubs.length,
    initialLoad: true,
    aboutVisible: false,
}
```

## Events

1. **showAbout()** - sets `state.aboutVisible` to the opposite of its current value, showing or hiding the About panel.
1. **filter()** - iterates through the publications array, setting `publication.match` to `true` if the publication's type and category match `state.type` and `state.category`, or `false` if either does not match. Invoked by the `<Timeline>` component; will run after `selectType()` or `selectCategory()` is invoked.
1. **selectType()** - updates `state.type`
    - **type** *string* - the publication type the user selects from the left sidebar
1. **selectCategory()** - updates `state.category`
    - **category** *string* - the publication category the user selects from the left sidebar
1. **getSummary** - update `state.pub`, causing the summary of the selected publication to display
    **id** *number* - the id of the publication to display

## Components

1. **App** - the master React app element
1. **Timeline** - the main viewable area, which holds `<TimeEvent>` components arranged by year
1. **TimeEvent** - the element for an individual publication, containing a button that triggers the `getSummary()` event
1. **Tags** - the left sidebar element, which contains author info and type/category tags with `getType()` and `getCategory` events. This should be renamed to reflect the full scope of the element
1. **Summary** - the right sidebar element, which displays a summary of the selected publication

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
