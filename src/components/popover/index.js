import {Popover} from 'bootstrap';

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new Popover(popoverTriggerEl)
);
