📝Project description:
Web application to search and display the weather of any city using the OpenWeatherMap API.

🔧Stacks:
HTML5
CSS3
JavaScript
React-Vite

👩‍💻Work Approach:

On the one hand, a back has been worked on in C# and its connection between the back and the front has been worked on, which we can find in the PhotoServiceC file and with the PhotoHandlerC file
On the other hand, a Fake API has been created through the json server and the connection has been created through the PhotoService and HandlerService files, in case you want to work without a C# back
The Front is currently connected to the C# Back, having to perform transformations on the image since the photos are stored in the database with a base64 string.
Similarly, when an image is added to the front through the form, another transformation is executed to convert it to a base64 string that the database accepts.
In the back we have worked taking into account the possibility of loading the photos from the front in the database or adding new elements directly from the API
Only those photos that have been designated for publication are displayed on the web, the rest of the photos are stored in the database

💻How to install this project:
Clone the project
git clone https://github.com/Carmen-Trillo/Rincones-Sevilla

Install dependencies
npm install

Activate the server and keep this terminal open
npm run dev

