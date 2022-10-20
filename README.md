All code written in this repo is for interacting with the DOM for [todomvc.com](https://todomvc.com/examples/vanillajs/)

Notes for hijacking source code:

- Insert a breakpoint at the moment the todo variable is created, then set a new variable equal to that in the console. That way we have access to the todo object from the code and don't have to create so many events, and can call the methods written for todo functionality directly.
  - todoVariable.controller.addItem(<todo>)
