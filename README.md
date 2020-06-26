## React-Project

Donald Trump random dumb quote/ gif generator titled: 'Donny'

## Project Link
https://jordanlarson.github.io/React-Project/

## Project Description
I plan on creating a Random Quote/ gif/ picture generator for Donny Trump. This App will produce a random quote onClick, and also provide the option to search for various dumb quotes 
from the potus. I would also like to add a random gif generator that one can add gifs/ pictures through a form. If I have a time I'd like to add a separate form component
that one can add their own quotes through. I would also like to implement a search bar that allows one to search through all of the quotes the potus has made throughout his career.

## API link
link to API: https://www.tronalddump.io/


## WireFrames
WireFrames for App : https://www.figma.com/file/2Js6f2nxHoeygWnWuNZ6SN/Tronald-Dump-Wire-Frames?node-id=0%3A1


Component Map : https://www.figma.com/file/ycC2YroZNTkoopGOOt0m02/Tronald-Dump-App-Components?node-id=0%3A1


## Data pulled demo : Random quote:


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

# MVP Matrix


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 2 | |  |
| Research | H | 8 |  |  |
| Navbar & Footer | H | 2 |  |  |
| React Router | H | 2 |  |  |
|  Home Page/ About | H | 1 |  |  |
| Random Quote Generator/ onclick | H | 4 |  |  |
| Form bar for searching through quotes | H | 3 |  |  |
| Random Picture/ Gif Generator onClick | M | 3 |  |  |
| Form for adding Quotes | M | 2 |  |  |
| Data Component for Gifs/ Pictures | M | 2 |  |  |
| Adding Content to Data Component | M | 2 |  |  |
| Responsive Design | H | 4 |  |  |
| CSS/ Styling | H | 8 |  |  |
| Implement SASS | M | 3 |  |  |
| Total | H | 44 |  |  |

# Components 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Nav | Nav guides to about, random quote generator, and random gif | 
| Main | Contains Switch/Routes for content |
| Quote Generator | Renders random quotes on click |
| Quote Submit form | A form which adds new quotes to the library |
| Quote Search Form  | Searches through the array of Trump quotes according to keywords and renders to the page |
| Random Gif Generator | Renders a Random Gif to the page onClick |
| Random Gif Submit Form | Form that users can submit random pictures/gifs through |
| Gif-Data Component | Component that stores random gifs in an array |
| About Page | Displays the about page for the app |

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

