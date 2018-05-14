/* MobX adds observable capabilities through annotations in the properties 
of the class with the @observable decorator*/

import { computed, observable, action } from 'mobx' 

export class AppState {

    /*
        This offers detailed control over what variables, which become observable.
        The variables are initialized in any value, which can then be modified if desired.
    */
    @observable name = "Astrid Vanegas Chinchilla"
    @observable message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    @observable open = false

    /*
        The @computed decorator is used to define the getter of the properties available in the class.
    */
    @computed get getOpenText(){
        return this.open
    }

    @computed get getName(){
        return this.name
    }

    @computed get getMessage(){
        return this.message
    }

    /*
        the decorator @action is used to define the functions that will modify the states of the properties 
        available in the class.
    */
    @action.bound
    openText(){
        this.open = true
    }

    @action.bound
    closeText(){
        this.open = false
    }

    @action.bound
    editStates = (name, message) => {
        this.name = name
        this.message = message
    }
}

export default new AppState()


