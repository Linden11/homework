function createStore(reducer){
    let state       = reducer(undefined, {}) //стартова ініціалізація стану, запуск редьюсера зі state === undefined
    let cbs         = []                     //масив пiдписникiв
    
    const getState  = () => state            //функція, що повертає змінну із замикання
    const subscribe = cb => cbs.push(cb)   //запам'ятовуємо пiдписника у масиві
                             
    const dispatch  = action => { 
        const newState = reducer(state, action) //пробуємо запустити редьюсер
        if (newState !== state){ //перевіряємо, чи зміг ред'юсер обробити action
            state = newState //якщо зміг, то оновлюємо state 
            for (let cb of cbs)  cb() //та запускаємо пiдписникiв
        }
    }
    
    return {
        getState, //додавання функції getState в результуючий об'єкт
        dispatch,
        subscribe //додавання subscribe в об'єкт
    }
}
