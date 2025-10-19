# Recipe Maker 🍳

A **full-featured recipe management app** built with **React**, **Context API**, **React Hook Form**, **React Router**, **Axios**, **LocalStorage**, and **Tailwind CSS**.  
Add, update, delete, and favorite recipes with a smooth user experience.  

---

## **Features**

- **Add new recipes** with image, title, chef name, description, ingredients, instructions, and category.  
- **Update and delete recipes** easily.  
- **Favorite recipes** with heart toggle, persisted in localStorage.  
- **Dynamic routing** for viewing individual recipes.  
- **Persistent data** using localStorage (recipes stay even after page reload).  
- **Responsive UI** built with Tailwind CSS.  
- **User-friendly notifications** using React Toastify.  
- **Axios** used for potential API calls (can be extended to fetch/store recipes from a server).  

---

## **Tech Stack**

- **React** - Frontend UI  
- **Context API** - Global state management  
- **React Hook Form** - Form handling & validation  
- **React Router v6** - Routing & dynamic routes  
- **Axios** - HTTP requests / API calls  
- **Tailwind CSS** - Styling  
- **LocalStorage** - Data persistence  
- **React Toastify** - Notifications  
- **nanoid** - Unique recipe IDs  
- **Heroicons** - Icons  

---

## **Folder Structure**
src/
│
├─ components/ # Navbar, Footer, reusable components
├─ context/ # RecipeContext for global state
├─ pages/ # Home, Recipes, Create, SinglePage, Fav, About, PageNotFound
├─ routes/ # Mainroute.jsx
├─ App.jsx
├─ index.jsx

1. Clone the repo:

```bash
git clone https://github.com/rakhi890rs/recipe-maker.git
Install dependencies:

cd recipe-maker
npm install
Run the app:
npm start

Open http://localhost:5173
 in your browser.



