import {observable} from 'mobx';
import appVars from './appVars';
import {SurveyState, QuestionState} from './states';

class Store {

  static instance;

  constructor() {}

  static getInstance() {

    if (!Store.instance) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

  @observable menuState = false;
  @observable videoUrl = null;
  @observable openVideoPopup = false;
  @observable videoPlaying = false;
  @observable surveyState = SurveyState.INTRO;
  @observable currentQuestionState = QuestionState.OPEN;
  @observable surveyProgress = 0;
  @observable questions = [];
  @observable result = {};
  @observable questionShouldFade = false;

  fadeQuestion() {
    this.questionShouldFade = !this.questionShouldFade;
    setTimeout(() => this.fadeQuestion(), 300);
  }

  resetSurvey() {
    this.setSurveyState(SurveyState.INTRO);
    this.setCurrentQuestionState(QuestionState.OPEN);
    this.resetSurveyProgress();
  }

  resetSurveyProgress() {
    return this.surveyProgress = 0;
  }

  setQuestions(questions) {
    return this.questions = questions;
  }

  getQuestions() {
    return this.questions;
  }

  setResult(result) {
    return this.result = result;
  }

  getResult() {
    return this.result;
  }

  setSurveyState(state) {
    return this.surveyState = state;
  }

  getSurveyState() {
    return this.surveyState;
  }

  setCurrentQuestionState(state) {
    this.currentQuestionState = state;
  }

  getCurrentQuestionState() {
    return this.currentQuestionState;
  }

  getSurveyProgress() {
    return this.surveyProgress;
  }

  getSurveyProgressPercentage() {
    return this.surveyProgress / this.questions.length * 100 || 5;
  }

  progressSurvey() {
    return this.surveyProgress++;
  }

  toggleMenu() {

    if (this.videoPlaying) {
      this.toggleVideo();
    }
    this.menuState = !this.menuState;
  }

  getVideoUrl() {

    if (!this.videoUrl) {
      this.videoUrl = appVars.video.url;
    }
    return this.videoUrl;
  }

  toggleVideo() {

    this.videoPlaying = !this.videoPlaying;
  }

  toggleVideoPopup() {
    this.openVideoPopup = !this.openVideoPopup;
  }
}

export default Store;
