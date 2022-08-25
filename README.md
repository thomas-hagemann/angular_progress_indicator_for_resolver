# Angular: Show mouse cursor progress indicator while navigation is in progress

[Demo project](https://stackblitz.com/edit/angular-ivy-hszzqy)
Show process indicator on the mouse cursor, while data is loaded via a route resolver.

This Projects has two routes (a, b) both of which use a data-resolver that takes 3 seconds to resolve.
The mouse-progress-indicator-for-navigation service adds a class to the document body when the navigation process starts and removes it when it is terminated/done.
