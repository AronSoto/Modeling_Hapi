<script setup lang="ts">
const footerSections = [
  {
    title: 'Nosotros',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusantium nobis soluta repellat sapiente nulla quidem doloremque cumque voluptates.',
  },
  {
    title: 'Contactos',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusantium nobis soluta repellat sapiente nulla quidem doloremque cumque voluptates.',
  },
  {
    title: 'Redes Sociales',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusantium nobis soluta repellat sapiente nulla quidem doloremque cumque voluptates.',
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-graphics">
        <div class="squares-row">
          <div v-for="i in 4" :key="`square-${i}`" class="square" />
        </div>
        <div class="lines-row">
          <div v-for="i in 4" :key="`line-${i}`" class="line" />
        </div>
      </div>

      <div class="footer-info">
        <div v-for="section in footerSections" :key="section.title" class="info-section">
          <h4>{{ section.title }}</h4>
          <p>{{ section.text }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: rgb(20, 11, 68);
  padding: 40px 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
}

.footer-graphics {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 40%;
  }
}

.squares-row {
  display: flex;
  gap: 10px;
}

.square {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #2be0ee;

  @media (max-width: 320px) {
    width: 40px;
    height: 40px;
    gap: 5px;
  }
}

.lines-row {
  display: flex;
  gap: 10px;
  margin-top: 33px;
}

.line {
  width: 60px;
  height: 5px;
  border-radius: 5px;
  background-color: #2be0ee;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    width: 60%;
    flex-direction: row;
    gap: 20px;
  }
}

.info-section {
  color: #2be0ee;
  flex: 1;

  h4 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
  }

  p {
    line-height: 1.5;

    @media (min-width: 768px) {
      padding-right: 20px;
    }
  }
}
</style>
