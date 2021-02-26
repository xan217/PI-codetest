# PI - CodeTest

## Project Resume
This project is an approach to the requirements indicated by the file provided by PI.
The main objective was to transform a PDF file with a visual structure and a PDF file with the description functionality in a working app.
There was a couple of modifications that were made from the provided design. I added an status circle in the top right corner to notify when the user is or isn't online. This was a "free decision" requirement and I looked for a simple and visual solution. The original structure of the form doesn't allow the user to know when it have an error in the form. So I decided to add more space between the fields to manage the error status of the field if it is necessary (as the case of the first field).
I added a point of entry of the "app" with the title of the project and the developer who made it. This have a couple of reasons: 1. the app always should have a point of entry. 2. the way how i managed the title of the pages needed to walk trough the menu to set the title of the actual page, so, was easiest to force the user to enter to each page by the menu instead of having an issue for "when I enter to the page for first time, it doesn't have the title".
The rest of the app was created to fit the requirements of the project.

## Project structure info
The project was build on NuxtJS as the requirement indicates.
The folders of middleware and plugins were deleted.
Assets folder contains a folder with the images.
Components folder have the Navigation component who handles the menu and the setting the page title.
Layouts have the default template that manages the snackbar presentation and the online status.
Pages have all the pages:
- index is the point of entry of the project.
- get-data is the manager of the form.
- profile is the presentation of the data. In this process I had to set an static image because the obtained data from the server doesn't brings images.
Store manage the general data of the project:
- constants have the definition of the messages and the data status.
- index manage the storage of the data of the user and the app en general (like the data status and the page title), and the sync process to connect to servers. This could be better implemented but for the point of the project I think it is not necessary.
This was my first application with Nuxt, so, I didn't use all the capacities of the framework.
Please follow the instructions of the basic project build setup to make it work.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
