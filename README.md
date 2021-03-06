## React-Project

Donald Trump random dumb quote/ gif generator titled: 'Donny'

## Project Link

https://jordanlarson.github.io/React-Project/

## Netlify Link

https://hungry-ride-ec339a.netlify.app

## Project Description

I plan on creating a Random Quote/ gif/ picture generator for Donny Trump. This App will produce a random quote onClick, and also provide the option to search for various dumb quotes
from the potus. I would also like to add a random gif generator that one can add gifs/ pictures through a form. If I have time I'd like to add a separate form component
that one can add their own quotes through. I would also like to implement a search bar that allows one to search through all of the quotes the potus has made throughout his career.

## API link

link to API: https://www.tronalddump.io/

## WireFrames

WireFrames for App : https://www.figma.com/file/2Js6f2nxHoeygWnWuNZ6SN/Tronald-Dump-Wire-Frames?node-id=0%3A1

Component Map : https://www.figma.com/file/ycC2YroZNTkoopGOOt0m02/Tronald-Dump-App-Components?node-id=0%3A1

## Data pulled demo : Random quote:

```
"updated_at": "2019-12-13T17:26:27.045Z",
"value": "Jeb’s policies in Florida helped lead to its almost total collapse. Right after he left he went to work for Lehman Brothers—wow!",
"_embedded": {
"author": [
{
"author_id": "wVE8Y7BoRKCBkxs1JkqAvw",
"bio": null,
"created_at": "2019-12-13T16:43:24.728Z",
"name": "Donald Trump",
"slug": "donald-trump",
"updated_at": "2019-12-13T16:43:24.728Z",
"_links": {
"self": {
"href": "http://api.tronalddump.io/author/wVE8Y7BoRKCBkxs1JkqAvw"
```

# MVP Matrix

| Component                                     | Priority | Estimated Time | Time Invetsted | Actual Time |
| --------------------------------------------- | :------: | :------------: | :------------: | :---------: |
| Create React app and files for all components |    H     |       2        |       2        |      1      |
| Research                                      |    H     |       8        |       8        |     10      |
| Navbar & Footer                               |    H     |       2        |       2        |      4      |
| React Router                                  |    H     |       2        |       2        |      1      |
| Home Page/ About                              |    H     |       1        |       1        |      1      |
| Random Quote Generator/ onclick               |    H     |       4        |       4        |      5      |
| Form bar for searching through quotes         |    H     |       3        |       3        |      5      |
| Random Picture/ Gif Generator onClick         |    M     |       3        |       3        |      4      |
| Form for adding Quotes                        |    M     |       2        |       2        |      0      |
| Data Component for Gifs/ Pictures             |    M     |       2        |       2        |      0      |
| Adding Content to Data Component              |    M     |       2        |       2        |      0      |
| Responsive Design                             |    H     |       4        |       4        |      4      |
| CSS/ Styling                                  |    H     |       8        |       8        |      6      |
| Implement SASS                                |    M     |       3        |       3        |      2      |
| Total                                         |    H     |       44       |       44       |     43      |

# Components

| Component              |                                       Description                                        |
| ---------------------- | :--------------------------------------------------------------------------------------: |
| App                    |                              Sets up app with React Router                               |
| Nav                    |               Nav guides to about, random quote generator, and random gif                |
| Main                   |                            Contains Switch/Routes for content                            |
| Quote Generator        |                              Renders random quotes on click                              |
| Quote Submit form      |                       A form which adds new quotes to the library                        |
| Quote Search Form      | Searches through the array of Trump quotes according to keywords and renders to the page |
| Random Gif Generator   |                         Renders a Random Gif to the page onClick                         |
| Random Gif Submit Form |                 Form that users can submit random pictures/gifs through                  |
| Gif-Data Component     |                      Component that stores random gifs in an array                       |
| About Page             |                           Displays the about page for the app                            |

# MVP example

- App will allow one to randomly produce Donald Trump quotes, and images through a button.
- Navbar toggles between a gif generator, quotes, and about.
- Search Form allows the user to search for specific quotes with keywords, or dates.

# PostMVP

- add favorite quotes to a favorites component
- add favorite gifs to a favoriteGifs component
- add the option for the user to submit their own images/ quotes

# Additional Libraries

-SASS, React Bootstrap

# Code Snippet

```
if (data.count > 0) { const quoteCount = data._embedded.quotes.length; const quoteIndex = Math.floor(Math.random() * quoteCount); const quote = data._embedded.quotes[quoteIndex];
```

# Bugs & Fixes:

Bugs & Fixes: The first bug I had was with useEffect call in my quotes component. I fixed this after a couple of hours of trouble-shooting and found that I was just using the wrong state for buttonClick. I had initially set useState to an empty string when all it needed to be set to was a value of zero.
My next issue came with my search component. I was able to search for quotes, but the quote would always return the same quote. I later realized this had to do with the index being referenced in the data. I then set the index equal to math random, and multiplied by the length of the array of quotes returned for the specific search term, and finally used math floor to randomize the search.
The most frustrating bug I dealt with was the attempt to access the Memes that are supposed to be part of the API, but the data that would return from a console log was unreadable. I ended up using giphy as a second API in order to get my gifs component to function.
