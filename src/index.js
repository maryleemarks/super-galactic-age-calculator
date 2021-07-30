import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './age.js';

$(document).ready(function(){
  $("#age").submit(function(event) {
    event.preventDefault();
    const inputtedAge = parseInt($("#earthAge").val());
    const inputtedLifeExpectancy = parseInt($("#lifeExpectancy").val());

  });
});
