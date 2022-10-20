//patern: javascript: (() => {<code>})();
//*can run code directly in browser url bar
//*create a folder in bookmarks for your browser and and add the bookmarlet code as a bookmark to that folder.
//prompt amount will determine how many todos are generated

javascript: (() => {
  todoAmount = prompt('how many todos?');
  if (todoAmount) {
    for (index = 1; index <= todoAmount; index++) {
      setTimeout(
        function (name) {
          document.querySelector('input.new-todo').value = name;
          document
            .querySelector('input.new-todo')
            .dispatchEvent(new Event('change', { bubbles: true }));
        },
        index * 100,
        `todo${index}`
      );
    }
  }
})();
