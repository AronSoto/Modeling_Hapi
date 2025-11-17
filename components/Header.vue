<script setup lang="ts">
const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Login', href: '#' },
]
</script>

<template>
  <header class="header">
    <div class="header-content container">
      <div class="logo">
        <img src="/Logo_Happi.png" alt="Logo Hapi" >
      </div>

      <div class="nav-wrapper">
        <div class="welcome-badge">
          <span>Bienvenido a Hapi</span>
        </div>

        <nav class="nav">
          <ul class="nav-list">
            <li v-for="item in menuItems" :key="item.label" class="nav-item">
              <button class="nav-button">{{ item.label }}</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #c6c6c6;
  padding: 30px 0;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  img {
    height: 100px;
    border-radius: 10px;
  }
}

.nav-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
}

.welcome-badge {
  span {
    display: inline-block;
    padding: 8px 24px;
    background-color: #4c57ed;
    color: white;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    border-radius: 45px;
  }
}

.nav-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
    grid-template-columns: none;
  }
}

.nav-item {
  display: flex;
}

.nav-button {
  width: 100%;
  min-width: 80px;
  padding: 8px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #ffffff;
  background-color: #4c57ed;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #2be0ee;
    box-shadow: 0px 15px 20px rgba(8, 26, 66, 0.884);
    color: #000000;
    transform: translateY(-7px);
  }
}
</style>
