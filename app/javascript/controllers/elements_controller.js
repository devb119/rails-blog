import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Publisher Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  sort(){
      let element = document.getElementById('elements')
      let element_items = Array.from(document.getElementsByClassName('element-item'))
      let elements = element_items.map(function (element, index){
          return { id: element.dataset.id, position: index + 1 }
      })
      
      element.dataset.elements = JSON.stringify(elements)
      this.stimulate('ElementsReflex#sort', element)
  }
}