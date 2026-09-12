🚀 my-A05-DevStack

📖 About the Project

my-A05-DevStack is a web application that helps users explore different development technologies and build their own technology stack. Users can select technologies and manage their selected stack easily.

🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- HTML
- CSS
- JSON

✨ Features

- 🔍 Explore Technologies — Browse different frontend, backend, database, and development tools.

- 🧩 Build Your Stack — Add technologies to your personal stack and remove them whenever needed.

- 📱 Responsive Design & Notifications — The website works on different screen sizes and shows notifications when technologies are added or removed.


<td width="45%" align="center">

<img src="https://skillicons.dev/icons?i=react,typescript,tailwind,vite,html,css" width="300">

<br><br>
<img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" width="380">
</td>


1. What is JSX?

JSX হলো HTML-এর মতো syntax, যা React-এ UI সহজে তৈরি করতে ব্যবহার করা হয়।

2. Props vs State

Props parent থেকে child-এ data পাঠায়।
State component-এর নিজের পরিবর্তনশীল data রাখে।

3. What does useState do?

useState component-এর পরিবর্তনশীল data manage করে।
আমার project-এ stack, technologies, loading এবং mobile menu manage করতে ব্যবহার করেছি।

4. What does useEffect do?

useEffect side effect চালানোর জন্য ব্যবহার হয়।
আমার project-এ data.json থেকে technology data load করতে ব্যবহার করেছি।

5. Why use a unique key in .map()?

React যেন প্রতিটি item আলাদাভাবে চিনতে পারে এবং কোন item পরিবর্তন হয়েছে বুঝতে পারে, তাই unique key লাগে।

6. What is conditional rendering?

Condition অনুযায়ী আলাদা UI দেখানোকে conditional rendering বলে।
আমার project-এ stack.length === 0 হলে “Your stack is empty.” দেখানো হয়েছে।

7. Parent to Child & Child to Parent

Parent থেকে child-এ props দিয়ে data পাঠানো হয়।
Child থেকে parent-এ function props ব্যবহার করে data/action পাঠানো হয়।
