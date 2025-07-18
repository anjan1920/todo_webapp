📝 To-Do Web App
A simple web-based To-Do List application built using HTML, Tailwind CSS, and JavaScript. It allows users to add and delete tasks, with data persistence using localStorage.

🔧 Features
Add and delete tasks
Tasks saved in browser using localStorage
Tailwind CSS for modern UI
DOM manipulation using  JavaScript
----------------------------------------------------------------

🚀 How to Run
Set up Node.js and Tailwind CSS
Clone/download the files
Navigate to the   `todo_webapp` directory
Run the CLI tool to scan your source files for classes and build your CSS-`npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
`
Open index.html in your browser

Start adding tasks!
-------------------------------------------------------------------
Got it, Anjan! Here's the **Key Learnings** written in the format you want — point-wise, explained in a natural flow:

---

## ✅ Key Learnings

### 1) **Script Position and `DOMContentLoaded`**

When we place the JavaScript `<script>` tag inside the `<head>`, it runs **before the HTML is fully loaded**.
So if we try to grab elements using `getElementById` or `getElementsByClassName`, it often returns `null` because those elements haven’t been created yet.

**Solution:**

* Either move the `<script>` tag to the **bottom of the body**, just before `</body>`, so the entire HTML loads before JS runs.
* Or use:

  ```js
  document.addEventListener('DOMContentLoaded', () => {
      // All DOM elements are safely accessible here
  });
  ```

This ensures the script runs **only after the full DOM is loaded**.

---

### 2) **Using `localStorage` for Saving Tasks**

`localStorage` is a Web API that lets you **store data in the browser permanently** (until manually cleared).

But it can only store **string values**.

**So we use:**

* `JSON.stringify()` to convert an array or object into a string before saving
* `JSON.parse()` to convert it back to an array/object when loading

```js
localStorage.setItem('tasks', JSON.stringify(tasks_arr));
let tasks_arr = JSON.parse(localStorage.getItem('tasks')) || [];
```

This makes sure the tasks are saved and reloaded even after refreshing or closing the tab.

---

### 3) **Loading Tasks from `localStorage` on Page Load**

When the page loads, we check `localStorage` for existing tasks.

If tasks are found, we convert them from a string back to an array using `JSON.parse()` and then display each one using a loop.

If nothing is found, we simply start with an empty array:

```js
let tasks_arr = JSON.parse(localStorage.getItem('tasks')) || [];
```

This allows task persistence across sessions.

---

### 4) **Injecting Tailwind CSS Classes Using JavaScript**

We create DOM elements like `<li>` and style them **dynamically** using Tailwind classes via JavaScript:

```js
const li = document.createElement('li');
li.className = "flex justify-between items-center p-4 bg-gray-600 text-white m-2 rounded";
```

This approach gives:

* Clean code
* Fully dynamic task rendering
* Tailwind-styled UI without manually writing HTML elements

