<template>
    <div class="language-picker language-picker--flags js-language-picker" data-trigger-class="li4-btn li4-btn--subtle js-tab-focus">
        <form action="" class="language-picker__form">
            <label for="language-picker-select"></label>

            <select name="language-picker-select" id="language-picker-select">
                <option lang="fr" value="francais" selected>Français</option>
                <option lang="en" value="english">English</option>
				<option lang="de" value="deutsch">Deutsch</option>
				<option lang="it" value="italiano">Italiano</option>
            </select>
        </form>
    </div>
</template>

<script>
import { languageStore } from '../LanguageStore.js';
export default {
    mounted(){
        const Util = () => {}
        if(!Util)  Util ();

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
  if(bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

Util.moveFocus = function (element) {
  if( !element ) element = document.getElementsByTagName('body')[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute('tabindex','-1');
    element.focus();
  }
};

Util.getIndexInArray = function(array, el) {
  return Array.prototype.indexOf.call(array, el);
};


// File#: _1_language-picker
// Usage: codyhouse.co/license
(function() {
	var LanguagePicker = function(element) {
		this.element = element;
		this.select = this.element.getElementsByTagName('select')[0];
		this.options = this.select.getElementsByTagName('option');
		this.selectedOption = getSelectedOptionText(this);
		this.pickerId = this.select.getAttribute('id');
		this.trigger = false;
		this.dropdown = false;
		this.firstLanguage = false;
		// dropdown arrow inside the button element
		this.arrowSvgPath = '<svg viewBox="0 0 16 16"><polygon points="3,5 8,11 13,5 "></polygon></svg>';
		this.globeSvgPath = '<svg viewBox="0 0 16 16"><path d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M13.9,7H12c-0.1-1.5-0.4-2.9-0.8-4.1 C12.6,3.8,13.6,5.3,13.9,7z M8,14c-0.6,0-1.8-1.9-2-5H10C9.8,12.1,8.6,14,8,14z M6,7c0.2-3.1,1.3-5,2-5s1.8,1.9,2,5H6z M4.9,2.9 C4.4,4.1,4.1,5.5,4,7H2.1C2.4,5.3,3.4,3.8,4.9,2.9z M2.1,9H4c0.1,1.5,0.4,2.9,0.8,4.1C3.4,12.2,2.4,10.7,2.1,9z M11.1,13.1 c0.5-1.2,0.7-2.6,0.8-4.1h1.9C13.6,10.7,12.6,12.2,11.1,13.1z"></path></svg>';

		initLanguagePicker(this);
		initLanguagePickerEvents(this);
	};

	function initLanguagePicker(picker) {
		// create the HTML for the custom dropdown element
		picker.element.insertAdjacentHTML('beforeend', initButtonPicker(picker) + initListPicker(picker));
		
		// save picker elements
		picker.dropdown = picker.element.getElementsByClassName('language-picker__dropdown')[0];
		picker.languages = picker.dropdown.getElementsByClassName('language-picker__item');
		picker.firstLanguage = picker.languages[0];
		picker.trigger = picker.element.getElementsByClassName('language-picker__button')[0];
	};

	function initLanguagePickerEvents(picker) {
		// make sure to add the icon class to the arrow dropdown inside the button element
		var svgs = picker.trigger.getElementsByTagName('svg');
		Util.addClass(svgs[0], 'li4-icon');
		Util.addClass(svgs[1], 'li4-icon');
		// language selection in dropdown
		// ⚠️ Important: you need to modify this function in production
		initLanguageSelection(picker);

		// click events
		picker.trigger.addEventListener('click', function(){
			toggleLanguagePicker(picker, false);
		});
		// keyboard navigation
		picker.dropdown.addEventListener('keydown', function(event){
			if(event.keyCode && event.keyCode == 38 || event.key && event.key.toLowerCase() == 'arrowup') {
				keyboardNavigatePicker(picker, 'prev');
			} else if(event.keyCode && event.keyCode == 40 || event.key && event.key.toLowerCase() == 'arrowdown') {
				keyboardNavigatePicker(picker, 'next');
			}
		});
	};

	function toggleLanguagePicker(picker, bool) {
		var ariaExpanded;
		if(bool) {
			ariaExpanded = bool;
		} else {
			ariaExpanded = picker.trigger.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
		}
		picker.trigger.setAttribute('aria-expanded', ariaExpanded);
		if(ariaExpanded == 'true') {
			picker.firstLanguage.focus(); // fallback if transition is not supported
			picker.dropdown.addEventListener('transitionend', function cb(){
				picker.firstLanguage.focus();
				picker.dropdown.removeEventListener('transitionend', cb);
			});
			// place dropdown
			placeDropdown(picker);
		}
	};

	function placeDropdown(picker) {
		var triggerBoundingRect = picker.trigger.getBoundingClientRect();
		Util.toggleClass(picker.dropdown, 'language-picker__dropdown--right', (window.innerWidth < triggerBoundingRect.left + picker.dropdown.offsetWidth));
		Util.toggleClass(picker.dropdown, 'language-picker__dropdown--up', (window.innerHeight < triggerBoundingRect.bottom + picker.dropdown.offsetHeight));
	};

	function checkLanguagePickerClick(picker, target) { // if user clicks outside the language picker -> close it
		if( !picker.element.contains(target) ) toggleLanguagePicker(picker, 'false');
	};

	function moveFocusToPickerTrigger(picker) {
		if(picker.trigger.getAttribute('aria-expanded') == 'false') return;
		if(document.activeElement.closest('.language-picker__dropdown') == picker.dropdown) picker.trigger.focus();
	};

	function initButtonPicker(picker) { // create the button element -> picker trigger
		// check if we need to add custom classes to the button trigger
		var customClasses = picker.element.getAttribute('data-trigger-class') ? ' '+picker.element.getAttribute('data-trigger-class') : '';
	
		var button = '<button class="language-picker__button'+customClasses+'" aria-label="'+picker.select.value+' '+picker.element.getElementsByTagName('label')[0].textContent+'" aria-expanded="false" aria-controls="'+picker.pickerId+'-dropdown">';
		button = button + '<span aria-hidden="true" class="language-picker__label language-picker__flag language-picker__flag--'+picker.select.value+'">'+picker.globeSvgPath+'<em>'+picker.selectedOption+'</em>';
		button = button +picker.arrowSvgPath+'</span>';
		return button+'</button>';
	};

	function initListPicker(picker) { // create language picker dropdown
		var list = '<div class="language-picker__dropdown" aria-describedby="'+picker.pickerId+'-description" id="'+picker.pickerId+'-dropdown">';
		list = list + '<p class="li4-sr-only" id="'+picker.pickerId+'-description">'+picker.element.getElementsByTagName('label')[0].textContent+'</p>';
		list = list + '<ul class="language-picker__list" role="listbox">';
		for(var i = 0; i < picker.options.length; i++) {
			var selected = picker.options[i].selected ? ' aria-selected="true"' : '',
				language = picker.options[i].getAttribute('lang');
			list = list + '<li><a lang="'+language+'" hreflang="'+language+'" href="'+getLanguageUrl(picker.options[i])+'"'+selected+' role="option" data-value="'+picker.options[i].value+'" class="language-picker__item language-picker__flag language-picker__flag--'+picker.options[i].value+'"><span>'+picker.options[i].text+'</span></a></li>';
		};
		return list;
	};

	function getSelectedOptionText(picker) { // used to initialize the label of the picker trigger button
		var label = '';
		if('selectedIndex' in picker.select) {
			label = picker.options[picker.select.selectedIndex].text;
		} else {
			label = picker.select.querySelector('option[selected]').text;
		}
		return label;
	};

	function getLanguageUrl(option) {
		// ⚠️ Important: You should replace this return value with the real link to your website in the selected language
		// option.value gives you the value of the language that you can use to create your real url (e.g, 'english' or 'italiano')
		return '#';
	};

	function initLanguageSelection(picker) {
		picker.element.getElementsByClassName('language-picker__list')[0].addEventListener('click', function(event){
			var language = event.target.closest('.language-picker__item');
			if(!language) return;
			
			if(language.hasAttribute('aria-selected') && language.getAttribute('aria-selected') == 'true') {
				// selecting the same language
				event.preventDefault();
				picker.trigger.setAttribute('aria-expanded', 'false'); // hide dropdown
			} else { 
				// ⚠️ Important: this 'else' code needs to be removed in production. 
				// The user has to be redirected to the new url -> nothing to do here
				event.preventDefault();
				picker.element.getElementsByClassName('language-picker__list')[0].querySelector('[aria-selected="true"]').removeAttribute('aria-selected');
				language.setAttribute('aria-selected', 'true');
				picker.trigger.getElementsByClassName('language-picker__label')[0].setAttribute('class', 'language-picker__label language-picker__flag language-picker__flag--'+language.getAttribute('data-value'));
				picker.trigger.getElementsByClassName('language-picker__label')[0].getElementsByTagName('em')[0].textContent = language.textContent;
				picker.trigger.setAttribute('aria-expanded', 'false');
                let LANG = picker.element.getElementsByClassName('language-picker__list')[0].querySelector('[aria-selected="true"]').lang
                languageStore.setLanguage(LANG)
			}
		});
	};

	function keyboardNavigatePicker(picker, direction) {
		var index = Util.getIndexInArray(picker.languages, document.activeElement);
		index = (direction == 'next') ? index + 1 : index - 1;
		if(index < 0) index = picker.languages.length - 1;
		if(index >= picker.languages.length) index = 0;
		Util.moveFocus(picker.languages[index]);
	};

	//initialize the LanguagePicker objects
	var languagePicker = document.getElementsByClassName('js-language-picker');
	if( languagePicker.length > 0 ) {
		var pickerArray = [];
		for( var i = 0; i < languagePicker.length; i++) {
			(function(i){pickerArray.push(new LanguagePicker(languagePicker[i]));})(i);
		}

		// listen for key events
		window.addEventListener('keyup', function(event){
			if( event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape' ) {
				// close language picker on 'Esc'
				pickerArray.forEach(function(element){
					moveFocusToPickerTrigger(element); // if focus is within dropdown, move it to dropdown trigger
					toggleLanguagePicker(element, 'false'); // close dropdown
				});
			} 
		});
		// close language picker when clicking outside it
		window.addEventListener('click', function(event){
			pickerArray.forEach(function(element){
				checkLanguagePickerClick(element, event.target);
			});
		});
	}
}());
    }
}

</script>

<style>
/* -------------------------------- 

File#: _1_language-picker
Title: Language Picker
Descr: A custom selector allowing users to choose their preferred language on a page
Usage: codyhouse.co/license

-------------------------------- */
/* reset */
*, *::after, *::before {
  box-sizing: border-box;
}

* {
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  background-color: hsl(0, 0%, 100%);
  font-family: system-ui, sans-serif;
  color: hsl(230, 7%, 23%);
  font-size: 1rem;
}

h1, h2, h3, h4 {
  line-height: 1.2;
  color: hsl(230, 13%, 9%);
  font-weight: 700;
}

h1 {
  font-size: 2.0736rem;
}

h2 {
  font-size: 1.728rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1.2rem;
}

ol, ul, menu {
  list-style: none;
}

button, input, textarea, select {
  background-color: transparent;
  border-radius: 0;
  color: inherit;
  line-height: inherit;
  appearance: none;
}

textarea {
  resize: vertical;
  overflow: auto;
  vertical-align: top;
}

a {
  color: hsl(250, 84%, 54%);
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img, video, svg {
  display: block;
  max-width: 100%;
}

@media (min-width: 64rem) {
  body {
    font-size: 1.25rem;
  }

  h1 {
    font-size: 3.051rem;
  }

    h2 {
    font-size: 2.44rem;
  }

    h3 {
    font-size: 1.75rem;
  }

    h4 {
    font-size: 1.5625rem;
  }
}

/* variables */
:root {
  /* colors */
  --li4-color-primary-hsl: 250, 84%, 54%;
  --li4-color-bg-hsl: 0, 0%, 100%;
  --li4-color-contrast-high-hsl: 230, 7%, 23%;
  --li4-color-contrast-higher-hsl: 230, 13%, 9%;
  --li4-color-bg-light-hsl: 0, 0%, 100%;
  --li4-color-white-hsl: 0, 0%, 100%;
  --li4-color-bg-dark-hsl: 240, 4%, 95%;
  --li4-color-bg-lighter-hsl: 0, 0%, 100%;
  --li4-color-black-hsl: 230, 13%, 9%;

  /* spacing */
  --li4-space-3xs: 0.25rem;
  --li4-space-2xs: 0.375rem;
  --li4-space-xs: 0.5rem;
  --li4-space-sm: 0.75rem;
}

@media(min-width: 64rem){
  :root {
    /* spacing */
    --li4-space-3xs: 0.375rem;
    --li4-space-2xs: 0.5625rem;
    --li4-space-xs: 0.75rem;
    --li4-space-sm: 1.125rem;
  }
}

/* buttons */
.li4-btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  white-space: nowrap;
  text-decoration: none;
  background: hsl(var(--li4-color-bg-dark-hsl));
  color: hsl(var(--li4-color-contrast-higher-hsl));
  cursor: pointer;
  text-decoration: none;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: all 0.2s ease;
  will-change: transform;
  padding: var(--li4-space-2xs) var(--li4-space-sm);
  border-radius: 0.25em;
}

.li4-btn:focus-visible {
  box-shadow: 0px 0px 0px 2px hsl(var(--li4-color-bg-hsl)), 0px 0px 0px 4px hsla(var(--li4-color-contrast-higher-hsl), 0.15);
  outline: none;
}

.li4-btn:active {
  transform: translateY(2px);
}

.li4-btn--subtle {
  background: hsl(var(--li4-color-bg-lighter-hsl));
  color: hsl(var(--li4-color-contrast-higher-hsl));
  box-shadow: inset 0px 1px 0px hsla(var(--li4-color-white-hsl), 0.1), 0px 0px 0px 1px hsla(var(--li4-color-black-hsl), 0.02), 0px 1px 3px -1px hsla(var(--li4-color-black-hsl), 0.2), 0 0.3px 0.4px rgba(0, 0, 0, 0.025),0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1);
}

.li4-btn--subtle:hover {
  background: hsl(var(--li4-color-bg-light-hsl));
  box-shadow: inset 0px 1px 0px hsla(var(--li4-color-white-hsl), 0.1), 0px 0px 0px 1px hsla(var(--li4-color-black-hsl), 0.02), 0px 1px 3px -1px hsla(var(--li4-color-black-hsl), 0.2), 0 0.1px 0.3px rgba(0, 0, 0, 0.06),0 1px 2px rgba(0, 0, 0, 0.12);
}

.li4-btn--subtle:focus {
  box-shadow: inset 0px 1px 0px hsla(var(--li4-color-white-hsl), 0.1), 0px 0px 0px 1px hsla(var(--li4-color-black-hsl), 0.02), 0px 1px 3px -1px hsla(var(--li4-color-black-hsl), 0.2), 0 0.1px 0.3px rgba(0, 0, 0, 0.06),0 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 0px 2px hsl(var(--li4-color-bg-hsl)), 0px 0px 0px 4px hsl(var(--li4-color-contrast-high-hsl));
}

.li4-icon {
  height: var(--li4-size, 1em);
  width: var(--li4-size, 1em);
  display: inline-block;
  color: inherit;
  fill: currentColor;
  line-height: 1;
  flex-shrink: 0;
  max-width: initial;
}

/* component */
:root {
  --picker-vertical-gap: 4px;
}

.language-picker {
  display: inline-block;
  position: relative;
}

.language-picker__form {
  display: none;
}

.language-picker__button .li4-icon {
  height: 16px;
  width: 16px;
}
.language-picker__button .li4-icon:first-of-type {
  margin-right: var(--li4-space-3xs);
}
.language-picker__button .li4-icon:last-of-type {
  margin-left: var(--li4-space-3xs);
}

.language-picker__dropdown {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  width: 200px;
  background-color: hsl(var(--li4-color-bg-light-hsl));
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03),0 3.1px 5.5px rgba(0, 0, 0, 0.08),0 14px 25px rgba(0, 0, 0, 0.12);
  padding: var(--li4-space-3xs) 0;
  border-radius: 0.25em;
  z-index: 5;
  margin-top: var(--picker-vertical-gap);
  margin-bottom: var(--picker-vertical-gap);
  --space-unit: 1rem;
  --text-unit: 1rem;
  font-size: var(--text-unit);
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.2s, opacity 0.2s;
}

.language-picker__dropdown--right {
  right: 0;
  left: auto;
}

.language-picker__dropdown--up {
  bottom: 100%;
  top: auto;
}

.language-picker__button[aria-expanded=true] + .language-picker__dropdown {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.2s;
}

.language-picker__item {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: var(--li4-space-2xs) var(--li4-space-sm);
  color: hsl(var(--li4-color-contrast-high-hsl));
  transition: background 0.2s;
}
.language-picker__item span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.language-picker__item:hover {
  background-color: hsla(var(--li4-color-contrast-higher-hsl), 0.075);
}
.language-picker__item:focus {
  outline: none;
  background-color: hsla(var(--li4-color-primary-hsl), 0.1);
}
.language-picker__item[aria-selected=true] {
  position: relative;
  background-color: hsl(var(--li4-color-primary-hsl));
  color: hsl(var(--li4-color-white-hsl));
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.language-picker__item[aria-selected=true]:focus {
  outline: 2px solid hsla(var(--li4-color-primary-hsl), 0.2);
}
.language-picker__item[aria-selected=true]::after {
  content: "";
  height: 16px;
  width: 16px;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpolyline stroke-width='2' stroke='%23ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round' points='1,9 5,13 15,3 '/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpolyline stroke-width='2' stroke='%23ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round' points='1,9 5,13 15,3 '/%3E%3C/svg%3E");
  margin-left: auto;
}

.language-picker__flag {
  display: flex;
  align-items: center;
}
.language-picker__flag::before {
  display: none;
  flex-shrink: 0;
  content: "";
  height: 16px;
  width: 16px;
  margin-right: var(--li4-space-2xs);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.language-picker__dropdown .language-picker__flag::before {
  margin-right: var(--li4-space-xs);
}

.language-picker--flags .language-picker__flag::before {
  display: inline-block;
  display: inline-flex;
}
.language-picker--flags .language-picker__button .li4-icon:first-of-type {
  display: none;
}

.language-picker__flag--deutsch::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M48,18H0V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V18z'/%3E%3Crect y='18' fill='%23EE0000' width='48' height='12'/%3E%3Cpath fill='%23FDCF00' d='M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2V30h48V40z'/%3E%3C/svg%3E");
}

.language-picker__flag--english::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23002781' d='M46,6H2C0.896,6,0,6.896,0,8v32c0,1.104,0.896,2,2,2h44c1.104,0,2-0.896,2-2V8C48,6.896,47.104,6,46,6z'/%3E%3Cpath fill='%23E6E6E6' d='M48,8c0-1.104-0.896-2-2-2h-5.161L28,15.876V6h-8v9.876L7.161,6H2C0.896,6,0,6.896,0,8v2.586L12.239,20H0v8 h12.239L0,37.415V40c0,1.104,0.896,2,2,2h5.161L20,32.124V42h8v-9.876L40.839,42H46c1.104,0,2-0.896,2-2v-2.585L35.761,28H48v-8 H35.761L48,10.586V8z'/%3E%3Cpolygon fill='%23D10D24' points='48,22 26,22 26,6 22,6 22,22 0,22 0,26 22,26 22,42 26,42 26,26 48,26 '/%3E%3Cpath fill='%23D10D24' d='M47.001,6.307L29.2,20h3.28L48,8.062V8C48,7.268,47.587,6.656,47.001,6.307z'/%3E%3Cpath fill='%23D10D24' d='M32.48,28H29.2l17.801,13.693C47.587,41.344,48,40.732,48,40v-0.062L32.48,28z'/%3E%3Cpath fill='%23D10D24' d='M15.52,28L0,39.938V40c0,0.732,0.413,1.344,0.999,1.693L18.8,28H15.52z'/%3E%3Cpath fill='%23D10D24' d='M15.52,20h3.28L0.999,6.307C0.413,6.656,0,7.268,0,8v0.062L15.52,20z'/%3E%3C/svg%3E");
}

.language-picker__flag--francais::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%2301209F' d='M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z'/%3E%3Cpath fill='%23EF4234' d='M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z'/%3E%3Crect x='16' y='6' fill='%23E6E6E6' width='16' height='36'/%3E%3C/svg%3E");
}

.language-picker__flag--italiano::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23009345' d='M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z'/%3E%3Cpath fill='%23CF2B36' d='M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z'/%3E%3Crect x='16' y='6' fill='%23E6E6E6' width='16' height='36'/%3E%3C/svg%3E");
}

.language-picker--hide-label .language-picker__button .li4-icon {
  margin-left: 0;
}
.language-picker--hide-label .language-picker__button .li4-icon:first-of-type {
  display: none;
}
.language-picker--hide-label .language-picker__button em {
  display: none;
}
.language-picker--hide-label .language-picker__button .language-picker__flag::before {
  margin-right: var(--li4-space-3xs);
}

.language-picker--hide-label .language-picker__flag::before {
  display: inline-block;
  display: inline-flex;
}

/* utility classes */
.li4-sr-only {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  padding: 0;
  border: 0;
  white-space: nowrap;
}
</style>