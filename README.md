# Spotify Song Search with oAuth

In this lab we will be building a Spotify song search interface with the ability to save and retrieve songs from users' profiles. Here are the requirements for the application:

- The application should first allow the user to enter a search query and see a list of results populated. [(see search endpoint)](https://developer.spotify.com/web-api/search-item/)
- The app should also allow the user to log into Spotify with their credentials. [(see authorization docs)](https://developer.spotify.com/web-api/authorization-guide/)
- The app should allow the user to save a track to their saved list and see all of their saves on the saved.html template. [(see library endpoints)](https://developer.spotify.com/web-api/library-endpoints/)
- Since you will be modifying the user's account, you will need additional scoped permissions (user-library-read user-library-modify).
- You can [read more about scoped permissions here](https://developer.spotify.com/web-api/using-scopes/).