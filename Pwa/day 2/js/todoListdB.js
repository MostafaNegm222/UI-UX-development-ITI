const idbApp = (() => {
  if (!("indexedDB" in window)) {
      console.log("Sorry, this browser doesn’t do IndexedDB.");
      return {};
  }

  let dbPromise = idb.open("tasks-box", 1, upgradeDB => {
      console.log("Setting up a table for your tasks!");
      upgradeDB.createObjectStore("Tasks", { keyPath: "taskTitle" });
  });

  function addTasks(task) {
      dbPromise.then(db => {
          let tx = db.transaction("Tasks", "readwrite");
          let store = tx.objectStore("Tasks");
          store.add(task);
          console.log(`Added "${task.taskTitle}" to your list!`);
      });
  }

  function getByName(title) {
      return dbPromise.then(db => {
          let tx = db.transaction("Tasks", "readonly");
          let store = tx.objectStore("Tasks");
          return store.get(title);
      });
  }

  function displayByName(title) {
      getByName(title).then(task => {
          if (!task) return;
          let taskText = `
              <h2>
                  ${task.taskTitle} - ${task.hours}:${task.minutes}, 
                  ${task.month} ${task.day} ${task.year}
                  <span id="${task.taskTitle}" onclick="idbApp.deleteTask('${task.taskTitle}')"> ✗ </span>
              </h2>`;
          document.getElementById("results").innerHTML += taskText;
          console.log(`Showing "${task.taskTitle}" on your list!`);
      });
  }

  function deleteTask(title) {
      dbPromise.then(db => {
          let tx = db.transaction("Tasks", "readwrite");
          let store = tx.objectStore("Tasks");
          store.delete(title);
          let taskSpot = document.getElementById(title);
          if (taskSpot) {
              taskSpot.parentNode.style.display = "none";
          }
          console.log(`"${title}" is deleted!`);
      });
  }

  function updateByName(title) {
      getByName(title).then(task => {
          if (!task) return;
          task.notified = "YES";
          dbPromise.then(db => {
              let tx = db.transaction("Tasks", "readwrite");
              let store = tx.objectStore("Tasks");
              store.put(task);
              console.log(`"${title}" is marked as done!`);
          });
      });
  }

  return {
      addTasks,
      getByName,
      displayByName,
      deleteTask,
      updateByName
  };
})();