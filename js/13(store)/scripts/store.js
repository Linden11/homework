function createStore(reducer){
    this.state       = reducer(undefined, {}) //стартова ініціалізація стану, запуск редьюсера зі state === undefined
    this.cbs         = []                     //масив пiдписникiв
    
    this.getState  = () => this.state            //функція, що повертає змінну із замикання
    this.subscribe = cb => this.cbs.push(cb)   //запам'ятовуємо пiдписника у масиві
                             
    this.dispatch  = action => { 
        const newState = reducer(this.state, action) //пробуємо запустити редьюсер
        if (newState !== this.state){ //перевіряємо, чи зміг ред'юсер обробити action
            this.state = newState //якщо зміг, то оновлюємо state 
            for (let cb of this.cbs)  cb() //та запускаємо пiдписникiв
        }
    }
}
