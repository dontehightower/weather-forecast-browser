# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

## 
* Make AJAX requests with Redux
* Rely Entirely on Redux to manage state
* Make and render graphs using third party API

### Controlled Components
* A controlled field is a form element where the value of the input is determined by the state, not the the other way around
* To create a controlled component, the application must change its state whenever the input is changed.
  * To do this, the following attributes are placed on SearhBar's input :
    * value={this.state.term} - the value of the input will depend on the application state's "term" property value.

    * onChange={this.onInputChange} - when keypresses occur within the input, a function called onInputChange will run. 
      * onInputChange needs to do one thing: change the value of this.state.term to be the value of the event.target that triggered the function call. (see line 29 of SearchBar.js) 

### Middleware 
* Middleware are functions that take an action and can determine what is done with that action (whether it passes, is manipulated, logged, or stopped) BEFORE they hit reducers
* Redux promise is the npm package that will be used to manage middleware and handle AJAX calls in this application

#### Redux Promise

### SparkLines

### Google Maps Integration
* Comes with the challenge of using a third party library that already 'has an idea' for how to render a component to the DOM