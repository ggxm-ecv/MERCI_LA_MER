<template>
  <div class="game container-lg">
    <h2 class="game__title heading h1">Histoire</h2>
    <p class="game__subtitle">Île 8</p>
    <div class="game-quiz__wrap-content">

      <div class="game-quiz__traking">
        <div class="game-quiz__traking-item active">
          <svg class="game-quiz__tracking-true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#359d9e" d="M9,2a7,7,0,1,0,7,7A7.021,7.021,0,0,0,9,2M7.6,12.5,4.1,9l.987-.987L7.6,10.519l5.313-5.313L13.9,6.2Z" transform="translate(-2 -2)"/></svg>
          <svg class="game-quiz__tracking-false" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#0e2e41" d="M9,2A7,7,0,1,1,2,9,6.994,6.994,0,0,1,9,2m2.513,3.5L9,8.013,6.487,5.5,5.5,6.487,8.013,9,5.5,11.513l.987.987L9,9.987,11.513,12.5l.987-.987L9.987,9,12.5,6.487Z" transform="translate(-2 -2)"/></svg>
        </div>
        <div class="game-quiz__traking-item">
          <svg class="game-quiz__tracking-true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#359d9e" d="M9,2a7,7,0,1,0,7,7A7.021,7.021,0,0,0,9,2M7.6,12.5,4.1,9l.987-.987L7.6,10.519l5.313-5.313L13.9,6.2Z" transform="translate(-2 -2)"/></svg>
          <svg class="game-quiz__tracking-false" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#0e2e41" d="M9,2A7,7,0,1,1,2,9,6.994,6.994,0,0,1,9,2m2.513,3.5L9,8.013,6.487,5.5,5.5,6.487,8.013,9,5.5,11.513l.987.987L9,9.987,11.513,12.5l.987-.987L9.987,9,12.5,6.487Z" transform="translate(-2 -2)"/></svg>
        </div>
        <div class="game-quiz__traking-item">
          <svg class="game-quiz__tracking-true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#359d9e" d="M9,2a7,7,0,1,0,7,7A7.021,7.021,0,0,0,9,2M7.6,12.5,4.1,9l.987-.987L7.6,10.519l5.313-5.313L13.9,6.2Z" transform="translate(-2 -2)"/></svg>
          <svg class="game-quiz__tracking-false" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#0e2e41" d="M9,2A7,7,0,1,1,2,9,6.994,6.994,0,0,1,9,2m2.513,3.5L9,8.013,6.487,5.5,5.5,6.487,8.013,9,5.5,11.513l.987.987L9,9.987,11.513,12.5l.987-.987L9.987,9,12.5,6.487Z" transform="translate(-2 -2)"/></svg>
        </div>
      </div>

      <div class="game-quiz__items">

        <div class="game-quiz__item active" data-quiz-nb="1">
          <p class="game-quiz__item-question">1. Quelle affirmation correspond le mieux à la définition des microplastiques&nbsp;?</p>
          <div class="game-quiz__item-answers">
            <div class="game-quiz__item-answer" data-res="A" @click="quizCheckResponse('A')">
              <p class="game-quiz__item-answer-landmark">A</p>
              <div class="game-quiz__item-answer-txt">
                <span>Un microplastique est une particule de plastique de taille inférieure à 5mm</span>
                <svg class="game-quiz__item-answer-check" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#359d9e" d="M9,2a7,7,0,1,0,7,7A7.021,7.021,0,0,0,9,2M7.6,12.5,4.1,9l.987-.987L7.6,10.519l5.313-5.313L13.9,6.2Z" transform="translate(-2 -2)"/></svg>
              </div>
            </div>
            <div class="game-quiz__item-answer" data-res="B" @click="quizCheckResponse('B')">
              <p class="game-quiz__item-answer-landmark">B</p>
              <p class="game-quiz__item-answer-txt">Un microplastique est issu de la fragmentation des gros déchets</p>
            </div>
            <div class="game-quiz__item-answer" data-res="C" @click="quizCheckResponse('C')">
              <p class="game-quiz__item-answer-landmark">C</p>
              <p class="game-quiz__item-answer-txt">Un microplastique est une particule de plastique de taille inférieure à 5mm. Ces particules peuvent être présentes sous forme de microbilles dans les cosmétiques, libérées sous forme de microfibres lors du lavage de nos vêtements synthétiques, ou peuvent être issues de la fragmentation des gros déchets.</p>
            </div>
          </div>
        </div>

        <div class="game-quiz__item" data-quiz-nb="2">
          <p class="game-quiz__item-question">2. Quelle quantité de déchet est produite dans le monde chaque année&nbsp;?</p>
          <div class="game-quiz__item-answers">
            <div class="game-quiz__item-answer" data-res="A" @click="quizCheckResponse('A')">
              <p class="game-quiz__item-answer-landmark">A</p>
              <div class="game-quiz__item-answer-txt">
                <span>Moins de 1 milliard</span>
                <svg class="game-quiz__item-answer-check" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#359d9e" d="M9,2a7,7,0,1,0,7,7A7.021,7.021,0,0,0,9,2M7.6,12.5,4.1,9l.987-.987L7.6,10.519l5.313-5.313L13.9,6.2Z" transform="translate(-2 -2)"/></svg>
              </div>
            </div>
            <div class="game-quiz__item-answer" data-res="B" @click="quizCheckResponse('B')">
              <p class="game-quiz__item-answer-landmark">B</p>
              <p class="game-quiz__item-answer-txt">Plus de 2 milliards</p>
            </div>
            <div class="game-quiz__item-answer" data-res="C" @click="quizCheckResponse('C')">
              <p class="game-quiz__item-answer-landmark">C</p>
              <p class="game-quiz__item-answer-txt">Plus de 4 milliards</p>
            </div>
          </div>
        </div>

        <div class="game-quiz__item" data-quiz-nb="3">
          <p class="game-quiz__item-question">3. Quelle quantité de déchets plastiques est rejetée en mer chaque année&nbsp;?</p>
          <div class="game-quiz__item-answers">
            <div class="game-quiz__item-answer" data-res="A" @click="quizCheckResponse('A')">
              <p class="game-quiz__item-answer-landmark">A</p>
              <p class="game-quiz__item-answer-txt">500 000</p>
            </div>
            <div class="game-quiz__item-answer" data-res="B" @click="quizCheckResponse('B')">
              <p class="game-quiz__item-answer-landmark">B</p>
              <div class="game-quiz__item-answer-txt">
                <span>Plus de 6 millions</span>
                <svg class="game-quiz__item-answer-check" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs></defs><path fill="#359d9e" d="M9,2a7,7,0,1,0,7,7A7.021,7.021,0,0,0,9,2M7.6,12.5,4.1,9l.987-.987L7.6,10.519l5.313-5.313L13.9,6.2Z" transform="translate(-2 -2)"/></svg>
              </div>
            </div>
            <div class="game-quiz__item-answer" data-res="C" @click="quizCheckResponse('C')">
              <p class="game-quiz__item-answer-landmark">C</p>
              <p class="game-quiz__item-answer-txt">300 millions</p>
            </div>
          </div>
        </div>

        <div class="game-quiz__item" data-quiz-result>
          <p class="game-quiz__result-suptitle">Score</p>
          <p class="game-quiz__result-percent">100%</p>
          <div class="game-history__quiz-stars">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#359D9E" width="45.263" height="43" viewBox="0 0 45.263 43"><path d="M24.632,36.558,38.618,45,34.906,29.09l12.357-10.7-16.272-1.4L24.632,2,18.272,16.982,2,18.385l12.334,10.7L10.645,45Z" transform="translate(-2 -2)"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#359D9E" width="45.263" height="43" viewBox="0 0 45.263 43"><path d="M24.632,36.558,38.618,45,34.906,29.09l12.357-10.7-16.272-1.4L24.632,2,18.272,16.982,2,18.385l12.334,10.7L10.645,45Z" transform="translate(-2 -2)"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#359D9E" width="45.263" height="43" viewBox="0 0 45.263 43"><path d="M24.632,36.558,38.618,45,34.906,29.09l12.357-10.7-16.272-1.4L24.632,2,18.272,16.982,2,18.385l12.334,10.7L10.645,45Z" transform="translate(-2 -2)"/></svg>
          </div>
          <p class="game-quiz__result-txt">Jolie score ! Dirige toi vers la prochaine île et continue ton aventure&nbsp;!</p>
        </div>

      </div>

      <div class="game-quiz__actions">
        <div class="game-quiz__wrap-prev-exit">
          <button class="game-quiz__prev-btn btn btn-second" data-quiz-prev @click="quizPrev()">Question précédente</button>
          <router-link to="/game/history2" class="game-quiz__exit-btn btn">Quitter le quiz</router-link>
        </div>
        <div class="game-quiz__wrap-next">
          <button class="game-quiz__next-btn btn btn-main active" data-quiz-next @click="quizNext()">Question suivante</button>
          <button class="game-quiz__validate-btn btn btn-main" @click="quizValidate()">Terminer le quiz</button>
          <router-link to="/game/historyQuiz9" class="game-quiz__next-quiz-btn btn btn-main">Île suivante</router-link>
        </div>
      </div>      

    </div>
  </div>
</template>

<script>

  export default {
    name: "Game",
    components: {},
    data(){
      return {
        quizTrackNumber: 1,
        quizTotalQuestion: 3,
        quizAnswers: [
          "A",
          "A",
          "B"
        ]
      }
    },
    methods:{
      quizCheckResponse(resSelected) {

        let qNB = this.quizTrackNumber;
        let goodAnswer = this.quizAnswers[qNB-1];

        document.querySelector(`.game-quiz__item.active [data-res=${resSelected}]`).classList.add('selected');
        document.querySelector(`.game-quiz__item.active [data-res=${goodAnswer}]`).classList.add('true');
        document.querySelector(`.game-quiz__item.active [data-res=${goodAnswer}] .game-quiz__item-answer-check`).classList.add('active');
        document.querySelectorAll('.game-quiz__item.active .game-quiz__item-answer').forEach(el => {
          el.classList.add('disabled');
          if(el.getAttribute('data-res') != goodAnswer) {
            el.classList.add('false');
          }
        });

        // upadte tracking
        document.querySelectorAll('.game-quiz__traking-item').forEach((el, index) => {
          if(qNB == (index+1)) {
            if(goodAnswer == resSelected) {
              el.classList.add('true');
            } else {
              el.classList.add('false');
            }
          }
        })

      },
      quizNext() {
        let qNB = this.quizTrackNumber;

        document.querySelector(`.game-quiz__item.active[data-quiz-nb='${qNB}']`).classList.remove('active');
        document.querySelector(`.game-quiz__item[data-quiz-nb='${qNB+1}']`).classList.add('active');

        this.quizTrackNumber++;
        this.updateQuiz()
      },
      quizPrev() {
        let qNB = this.quizTrackNumber;

        document.querySelector(`.game-quiz__item.active[data-quiz-nb='${qNB}']`).classList.remove('active');
        document.querySelector(`.game-quiz__item[data-quiz-nb='${qNB-1}']`).classList.add('active');

        this.quizTrackNumber--;
        this.updateQuiz()
      },
      updateQuiz() {
        let qNB = this.quizTrackNumber;

        if(qNB > 1) {
          document.querySelector('[data-quiz-prev]').classList.add('active');
        } else {
          document.querySelector('[data-quiz-prev]').classList.remove('active');
        }

        if(qNB == this.quizTotalQuestion) {
          document.querySelector('.game-quiz__next-btn').classList.remove('active');
          document.querySelector('.game-quiz__validate-btn').classList.add('active');
        } else {
          document.querySelector('.game-quiz__next-btn').classList.add('active');
          document.querySelector('.game-quiz__validate-btn').classList.remove('active');
        }

        document.querySelectorAll('.game-quiz__traking-item').forEach((el, index) => {
          el.classList.remove('active');
          if(qNB == (index+1)) {
            el.classList.add('active');
          }
        })
      },
      quizValidate() {
        let qNB = this.quizTrackNumber;

        document.querySelector(`.game-quiz__item.active[data-quiz-nb='${qNB}']`).classList.remove('active');
        document.querySelector('.game-quiz__item[data-quiz-result]').classList.add('active');

        this.quizTrackNumber++;
        
        document.querySelector('.game-quiz__validate-btn').classList.remove('active');
        document.querySelector('.game-quiz__next-quiz-btn').classList.add('active');
        document.querySelector('.game-quiz__prev-btn').classList.remove('active');
      }
    },

    created(){
    },
    mounted(){},
    destroyed(){}
  };

</script>