## Context

We are a multinational book publishing company. We want to provide our audience with a way to browse our catalog and create a reading list.

To achieve this, we aim to develop a web application that allows users to view available books and create a reading list. Please note:

- We are unsure if the framework we are currently using will be the final one, but we want to reuse as much code as possible.
- The application should be user-friendly and visually appealing.
- Approximately 80% of our users come from desktop browsers.

Use the `books.json` file to obtain book data. You can add more books if you wish, as long as they follow the same structure.

## Requirements

### Functionality

- [x] **Display Available Books**: The application must display a list of available books that users can review.

- [x] **Create a Reading List**: Users should be able to create a reading list from the available books. The UI should clearly indicate which books are in the reading list and which are not. It should also be possible to move a book from the reading list to the list of available books.

- [x] **Filter Books by Genre**: Users should be able to filter the list of available books by genre, and a counter should display the number of available books, the number of books in the reading list, and the number of books available in the selected genre.

- [x] **State Synchronization**: There should be global state synchronization that reflects the number of books in the reading list and the number of books still available. If a book is moved from the available list to the reading list, both counts should update accordingly.

- [x] **Data Persistence**: The application should persist reading list data in the browser's local storage. When the page is reloaded, the reading list should be retained.

- [ ] **Cross-Tab Synchronization**: If a user opens the application in two different tabs, changes made in one tab should be reflected in the other, without the need for a backend.

- [ ] **Deployment**: The application should be deployed on a free hosting service (Netlify, Vercel, Firebase, etc.) and should be accessible via a public URL. Provide the URL in the README.

- [ ] **Testing**: The application must have AT LEAST one test. Write the test you consider most important for your application.

## Code Tips

1. **Code Structure**: Your code should be well-organized and easy to read.

2. **HTML Semantics**: HTML should be semantic and accessible.

3. **Team-Oriented**: Prepare your project with the idea that anyone on your team may have to work on it in the future (scripts in package.json, minimal documentation in the README, code comments if necessary, etc.).

4. **Code Formatting**: Ensure your code is consistently formatted. You can use Prettier or any other preferred formatting tool.

5. **Production-Ready**: Make sure your application is production-ready. Minimize the code, optimize images, and so on.

## Additional Challenges

**Want to go the extra mile?** Here are some additional challenges you can attempt:

- Implement a search feature in the list of available books.
- Add a new filter to sort books by the number of pages.
- Allow the reordering of books in the reading list by priority.
- Make your design responsive.


