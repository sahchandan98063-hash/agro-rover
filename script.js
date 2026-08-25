// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    // Update sidebar active state
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    // Update page title
    const titles = {
        dashboard: "Farm Dashboard",
        map: "Live Farm Map",
        rover: "Rover Control",
        tasks: "Rover Tasks",
        crop: "Crop Health",
        alerts: "Alerts & Notifications",
        reports: "Farm Reports"
    };

    document.getElementById("pageTitle").textContent =
        titles[pageId] || "AgroRover";
}


// ===============================
// ROVER CONTROL
// ===============================

function startRover() {

    const roverState = document.getElementById("roverState");

    if (roverState) {
        roverState.textContent = "Working";
    }

    showNotification("Rover started successfully 🤖");
}


function pauseRover() {

    const roverState = document.getElementById("roverState");

    if (roverState) {
        roverState.textContent = "Paused";
    }

    showNotification("Rover has been paused ⏸️");
}


function stopRover() {

    const roverState = document.getElementById("roverState");

    if (roverState) {
        roverState.textContent = "Stopped";
    }

    showNotification("Rover stopped");
}


function returnHome() {

    const roverState = document.getElementById("roverState");

    if (roverState) {
        roverState.textContent = "Returning Home";
    }

    showNotification("Rover is returning to the charging station 🏠");
}


function emergencyStop() {

    const roverState = document.getElementById("roverState");

    if (roverState) {
        roverState.textContent = "Emergency Stop";
    }

    alert("⚠ EMERGENCY STOP ACTIVATED\n\nRover has been stopped for safety.");
}


// ===============================
// CREATE TASK
// ===============================

function createTask() {

    const task = prompt(
        "Enter task:\n\n" +
        "1. Crop Monitoring\n" +
        "2. Weed Detection\n" +
        "3. Soil Analysis\n" +
        "4. Disease Detection"
    );

    if (task) {
        showNotification("New task created successfully ✅");
    }
}


// ===============================
// NOTIFICATION
// ===============================

function showNotification(message) {

    const notification = document.createElement("div");

    notification.textContent = message;

    notification.style.position = "fixed";
    notification.style.right = "25px";
    notification.style.bottom = "25px";

    notification.style.background = "#17221b";
    notification.style.color = "white";

    notification.style.padding = "14px 18px";

    notification.style.borderRadius = "10px";

    notification.style.fontSize = "13px";

    notification.style.zIndex = "9999";

    document.body.appendChild(notification);


    setTimeout(() => {

        notification.remove();

    }, 3000);
}