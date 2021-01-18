<template>
  <header>
    <h2>Page does not exist</h2>
  </header>
  <main>
    <p>
      Page you were looking for does not exist. Maybe you would like to go back?
    </p>
    <router-link to="/">Go back</router-link>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

a {
  width: 200px;
  padding: 8px 0;
  font-size: 1.2em;
  color: #eee;
  background-color: rgb(64, 190, 64);
  border: 1px solid #333;
  border-radius: 4px;
  transition: background-color 0.5s ease-in;
  text-decoration: none;
  margin-top: 20px;
}

a:hover {
  background-color: rgb(52, 156, 52);
  cursor: pointer;
}

a:focus {
  border: 1px dotted #333;
  outline: none;
}
</style>