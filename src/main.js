"use strict";

import { createBoardTemplate } from './components/boardTemplate.js'
import { createFilterTemplate } from './components/filterTemplate.js'
import { createLoadMoreButtonTemplate } from './components/loadMoreButtonTemplate.js'
import { createSiteMenuTemplate } from './components/siteMenuTemplate.js'
import { createTaskEditTemplate } from './components/taskEditTemplate.js'
import { createTaskTemplate } from './components/taskTemplate.js'

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
