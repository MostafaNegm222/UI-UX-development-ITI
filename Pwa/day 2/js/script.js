const TaskHelper = () => {
  const notifyBtn = document.getElementById("enableNotify");
  const addTaskBtn = document.getElementById("AddTask");
  const taskTitle = document.getElementById("TaskTitle");
  const hours = document.getElementById("Hours");
  const mins = document.getElementById("Mins");
  const days = document.getElementById("Days");
  const months = document.getElementById("Months");
  const years = document.getElementById("Years");

  const reminders = {};
  
  if (!("Notification" in window)) {
      console.log("Oops, your browser doesn’t do notifications.");
      notifyBtn.style.display = "none";
  } else {
      notifyBtn.onclick = () => {
          Notification.requestPermission().then(permission => {
              if (permission === "granted") {
                  console.log("It's granted");
                  notifyBtn.style.display = "none"; 
              } else {
                  console.log("Not granted");
              }
          });
      };
  }
  addTaskBtn.onclick = () => {
      let title = taskTitle.value;
      let hour = hours.value;
      let min = mins.value;
      let day = days.value;
      let month = months.value;
      let year = years.value;

      if (!title || !hour || !min) {
          alert("Hey, give me a title and time so I can remind you!");
          return;
      }
      hour = Number(hour);
      min = Number(min);
      if (hour < 0 || hour > 23 || min < 0 || min > 59) {
          alert("please use 0-23 for hours and 0-59 for minutes!");
          return;
      }

      let taskTime = new Date(`${month} ${day}, ${year} ${hour}:${min}`);
      let timeLeft = taskTime - Date.now();

      idbApp.addTasks({
          taskTitle: title,
          hours: hour,
          minutes: min,
          day: day,
          month: month,
          year: year,
          notified: "NO"
      });

      idbApp.displayByName(title);

      if (timeLeft > 0) {
          reminders[title] = setTimeout(() => {
              showNotify(title);
              let taskSpot = document.getElementById(title);
              if (taskSpot) {
                  taskSpot.parentNode.style.textDecoration = "line-through";
              }
              idbApp.updateByName(title);
              delete reminders[title];
          }, timeLeft);
          console.log(`I’ll notify you about "${title}"`);
      } else {
          console.log(`"${title}" is already past `);
      }

      taskTitle.value = "";
      hours.value = "";
      mins.value = "";
      days.value = "01";
      months.value = "January";
      years.value = "2025";
  };

  function showNotify(title) {
      if (Notification.permission === "granted") {
          navigator.serviceWorker.getRegistration().then(reg => {
              reg.showNotification(`Time for "${title}"!`, {
                  body: "Hey, it’s time to take this one!",
                  icon: "img/icon-128.png"
              });
              console.log(`Noticed you about "${title}"!`);
          });
      }
  }

  if ("serviceWorker" in navigator) {
      window.onload = () => {
          navigator.serviceWorker.register("sw.js")
              .then(() => console.log("Service worker is ready to help!"))
              .catch(err => console.log("Service worker didn’t show up:", err));
      };
  }
};

TaskHelper();