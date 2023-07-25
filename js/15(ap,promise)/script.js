{
    function confirmPromise(text) {
        function executor(resolve, reject) {
            const result = confirm(text);
            if (result) {
                resolve();
            } else {
                reject();
            }
        }
        return new Promise(executor);
    }

    confirmPromise('Проміси це складно?').then(
        () => console.log('не так вже й складно'),
        () => console.log('respect за посидючість і уважність')
    );

}//Promisify: confirm

{ 
    function promptPromise(text){
        function executor(resolve, reject) {
            const name = prompt(text);
            if (name) {
                resolve(name);
            } else {
                reject();
            }
        }
        return new Promise(executor);
   }
   promptPromise("Як тебе звуть?").then(name => console.log(`Тебе звуть ${name}`),
                                          () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))
}//Promisify: prompt
