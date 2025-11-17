<script setup lang="ts">
const cryptos = [
  {
    name: 'Bitcoin',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis ipsa aut debitis iure cupiditate voluptates quisquam qui, impedit consequuntur voluptas.',
    price: '168.123 mil dolares',
  },
  {
    name: 'Ethereum',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis ipsa aut debitis iure cupiditate voluptates quisquam qui, impedit consequuntur voluptas.',
    price: '168.123 mil dolares',
  },
  {
    name: 'Litecoin',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis ipsa aut debitis iure cupiditate voluptates quisquam qui, impedit consequuntur voluptas.',
    price: '168.123 mil dolares',
  },
  {
    name: 'Solana',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis ipsa aut debitis iure cupiditate voluptates quisquam qui, impedit consequuntur voluptas.',
    price: '168.123 mil dolares',
  },
  {
    name: 'Cardano',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis ipsa aut debitis iure cupiditate voluptates quisquam qui, impedit consequuntur voluptas.',
    price: '168.123 mil dolares',
  },
]

const sponsors = [
  {
    name: 'Christian',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos, perspiciatis eius culpa, laudantium veritatis, soluta eum unde similique odit dolorem minima minus a fuga ullam reiciendis maiores excepturi natus.',
  },
  {
    name: 'Armando',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos, perspiciatis eius culpa, laudantium veritatis, soluta eum unde similique odit dolorem minima minus a fuga ullam reiciendis maiores excepturi natus.',
  },
  {
    name: 'Piero',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos, perspiciatis eius culpa, laudantium veritatis, soluta eum unde similique odit dolorem minima minus a fuga ullam reiciendis maiores excepturi natus.',
  },
]
</script>

<template>
  <div>
    <Header />

    <section class="section1">
      <div class="section1_container container">
        <div class="texto_container">
          <h1>Hapi 2.0</h1>
          <p>Somos una empresa que vende y compra de acciones en la bolsa Criptomonedas</p>
          <div class="boton s5">
            <button class="button_interac" style="color: black">Conocer</button>
          </div>
        </div>
      </div>
    </section>

    <section class="section2">
      <div class="section2_container container">
        <div class="principal_container">
          <div class="bloque_1">
            <h2>¿Qué es Hapi?</h2>
            <div class="cont_divslider">
              <div class="panel_izquierdo">
                <div class="bloque1" />
                <div class="bloque1" />
                <div class="bloque1" />
              </div>
              <div class="slider">
                <div class="arrow_left" />
                <div class="panel_derecho">
                  <div class="bloque2" />
                  <div class="bloque2" />
                  <div class="bloque2" />
                  <div class="bloque2" />
                  <div class="bloque2" />
                </div>
                <div class="arrow_right" />
              </div>
            </div>
          </div>

          <div class="bloque_2">
            <h2>Criptomonedas</h2>
            <div v-for="crypto in cryptos" :key="crypto.name" class="contenido_block1">
              <div class="block1" />
              <div class="cont_text">
                <div class="cont_contenido">
                  <h4>{{ crypto.name }}</h4>
                  <p class="txtb2">{{ crypto.description }}</p>
                  <div class="separador">
                    <p class="sepa_1">{{ crypto.price }}</p>
                    <p class="sepa_2">En la actualidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section3">
      <div class="section3_container container">
        <div class="principal_container3">
          <h3>Nuestras Recomendaciones</h3>
          <div class="contene_squares">
            <div class="bloque1_seccion3">
              <div class="blck1" />
            </div>
            <div class="bloque2_seccion3">
              <div class="blck2" />
            </div>
            <div class="bloque3_seccion3">
              <div class="blck3" />
            </div>
            <div class="bloque4_seccion3">
              <div class="blck4" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section4">
      <div class="section4_container container">
        <h2 class="titulo4">Nuestros patrocinadores</h2>
        <div v-for="sponsor in sponsors" :key="sponsor.name" class="circulo_1">
          <div class="contenido_circulo">
            <div class="circulo" />
            <h3>{{ sponsor.name }}</h3>
            <p>{{ sponsor.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.section1 {
  background-color: rgba(8, 26, 66, 0.884);
  padding: 50px 0px;

  .section1_container .texto_container {
    width: 100%;

    @media (min-width: 768px) {
      width: 25%;
    }

    h1 {
      color: #2be0ee;
      font-weight: bold;
      font-size: 20px;
    }

    p {
      padding: 20px 0px;
      color: #2be0ee;
    }

    button {
      border-radius: 20px;
      width: 100px;
      height: 30px;
      background-color: #2be0ee;
      border-style: hidden;
    }
  }
}

.section2 {
  background-color: #c6c6c6;

  .section2_container .principal_container {
    padding: 50px 0px;
    font-size: 0;

    .bloque_1 {
      width: 100%;
      display: inline-block;
      vertical-align: top;
      font-size: initial;

      @media (min-width: 768px) {
        width: 50%;
      }

      h2 {
        font-weight: bold;
        text-align: center;

        @media (min-width: 768px) {
          text-align: left;
        }
      }

      .cont_divslider {
        @media (min-width: 768px) {
          padding-right: 50px;
        }

        .panel_izquierdo .bloque1 {
          height: 200px;
          border-radius: 20px;
          background-color: #4c57ed;
          margin: 30px;
        }

        .slider {
          display: none;
          text-align: center;
          position: relative;

          @media (min-width: 768px) {
            display: block;
          }

          .arrow_right {
            position: absolute;
            display: inline-block;
            width: 0;
            height: 0;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
            border-right: 30px solid #2be0ee;
            top: 50%;
            left: 6%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
          }

          .panel_derecho {
            display: inline-block;

            .bloque2 {
              width: 50px;
              height: 50px;
              background-color: #4c57ed;
              display: inline-block;
              margin: 0px 20px;
              border-radius: 5px;
            }
          }

          .arrow_left {
            position: absolute;
            display: inline-block;
            width: 0;
            height: 0;
            border-top: 30px solid transparent;
            border-left: 30px solid #2be0ee;
            border-bottom: 30px solid transparent;
            top: 50%;
            left: 94%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }

    .bloque_2 {
      width: 100%;
      display: inline-block;
      font-size: 0;
      vertical-align: top;
      font-size: initial;

      @media (min-width: 768px) {
        width: 50%;
      }

      h2 {
        font-weight: bold;
        text-align: left;
        padding-bottom: 30px;
      }

      .contenido_block1 {
        width: 100%;
        font-size: 0;

        &:not(:last-child) {
          margin-bottom: 60px;
        }

        .block1 {
          width: 100px;
          height: 100px;
          background-color: #4c57ed;
          border-radius: 15px;
          display: inline-block;
          vertical-align: middle;
        }

        .cont_text {
          display: inline-block;
          font-size: initial;
          width: calc(100% - 100px);
          vertical-align: middle;

          .cont_contenido {
            padding-left: 20px;

            h4 {
              font-weight: bold;
            }

            .txtb2 {
              padding-bottom: 30px;
            }

            .separador {
              font-size: 0;

              .sepa_1 {
                display: inline-block;
                width: 50%;
                font-size: initial;
              }

              .sepa_2 {
                display: inline-block;
                text-align: right;
                width: 50%;
                font-size: initial;
              }
            }
          }
        }
      }
    }
  }
}

.section3 {
  background-color: #c6c6c6;

  .section3_container .principal_container3 {
    padding: 50px 0px;
    font-size: 0;

    h3 {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
    }

    .contene_squares {
      padding-top: 50px;

      .bloque1_seccion3 {
        width: 65%;
        display: inline-block;

        .blck1 {
          width: 99%;
          height: 250px;
          display: inline-block;
          background-color: #4c57ed;
        }
      }

      .bloque2_seccion3 {
        width: 35%;
        display: inline-block;

        .blck2 {
          width: 100%;
          height: 250px;
          background-color: #2be0ee;
          display: inline-block;
        }
      }

      .bloque3_seccion3 {
        width: 35%;
        display: inline-block;
        margin-top: 10px;

        .blck3 {
          width: 98%;
          height: 250px;
          background-color: #2be0ee;
          display: inline-block;
        }
      }

      .bloque4_seccion3 {
        width: 65%;
        display: inline-block;

        .blck4 {
          width: 100%;
          height: 250px;
          background-color: #4c57ed;
          display: inline-block;
        }
      }
    }
  }
}

.section4 {
  background-color: #c6c6c6;
  text-align: center;
  font-size: 0;

  .section4_container {
    .titulo4 {
      font-size: 30px;
      font-weight: bold;
      padding-bottom: 50px;
    }

    .circulo_1 {
      width: 100%;
      padding-bottom: 50px;
      display: inline-block;
      font-size: initial;

      @media (min-width: 768px) {
        width: 33.3%;
      }

      .contenido_circulo {
        width: 200px;
        display: inline-block;

        .circulo {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: #4c57ed;
        }

        h3 {
          font-size: 20px;
          font-weight: bold;
          padding: 20px 0px 10px;
        }

        p {
          text-align: justify;
        }
      }
    }
  }
}

.boton {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.s5 {
  @media (min-width: 320px) {
    justify-content: left;
  }

  @media (min-width: 768px) {
    justify-content: left;
  }

  @media (min-width: 1024px) {
    justify-content: left;
  }
}

.button_interac {
  min-width: 60px;
  height: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500px;
  color: #ffffff;
  background-color: #4c57ed;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #2be0ee;
    box-shadow: 0px 15px 20px rgba(8, 26, 66, 0.884);
    color: #000000;
    transform: translateY(-7px);
  }
}
</style>
