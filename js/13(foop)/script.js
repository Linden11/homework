{
    function Person(name, surname) {
        this.name = () => name;
        this.surname = () => surname;
        this.fatherName = ""
        this.getFullName = function () {
            return `${this.name()} ${this.fatherName} ${this.surname()}`
        }
    }

    const a = new Person("Вася", "Пупкін")
    const b = new Person("Ганна", "Іванова")
    const c = new Person("Єлизавета", "Петрова")

    console.log(a.getFullName())
    a.fatherName = 'Іванович'
    console.log(a.getFullName())
    console.log(b.getFullName())
}//Person Constructor



{
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getFullName = function () {
        return `${this.name} ${this.fatherName || ""} ${this.surname}`
    }

    const a = new Person("Вася", "Пупкін")
    const b = new Person("Ганна", "Іванова")
    const c = new Person("Єлизавета", "Петрова")

    console.log(a.getFullName()) // Василь Пупкін
    a.fatherName = 'Іванович' // Василь Іванович Пупкін
    console.log(a.getFullName())
    console.log(b.getFullName()) // Ганна Іванова
}//Person Prototype



{ 
    function Store(reducer){
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
}//Store



{ 
    function Password(parent, open) {
        const fieldPassword = document.createElement('input');
        parent.append(fieldPassword);

        const checkboxView = document.createElement('input');
        checkboxView.type = 'checkbox';
        checkboxView.checked = open;
        parent.append(checkboxView);

        this.setValue = function(value) {
            fieldPassword.value = value;
        }

        this.getValue = function() {
            return fieldPassword.value;
        }

        this.setOpen = function(bool) {
            checkboxView.checked = bool;
        }

        this.getOpen = function() {
            return checkboxView.value;
        }

        this.setStyle = function(name, value) {
            fieldPassword.style[name] = value;
        }

        fieldPassword.oninput = (event) => {
            this.setValue(event.target.value);
            this.onChange(event.target.value);
        }

        checkboxView.onchange = (event) => {
            this.setOpen(event.target.checked);
            fieldPassword.type = event.target.checked ? 'text' : 'password';
            this.onOpenChange(event.target.checked);
        } 

        this.onChange = (text) => {
        }

        this.onOpenChange = () => {
        }

    }

        
let p = new Password(document.body, true)
p.onChange = data => console.log(data)  //буде корисно при виконаннi LoginForm та Password Verify
p.onOpenChange = open => console.log(open)

p.setValue('qwerty')
console.log("1", p.getValue())

p.setOpen(false)
console.log("2", p.getOpen())

}//Password



{ 
    function Password(parent, open) {
        const fieldPassword = document.createElement('input');
        parent.append(fieldPassword);

        const checkboxView = document.createElement('input');
        checkboxView.type = 'checkbox';
        checkboxView.checked = open;
        parent.append(checkboxView);

        this.setValue = function (value) {
            fieldPassword.value = value;
        }

        this.getValue = function () {
            return fieldPassword.value;
        }

        this.setOpen = function (bool) {
            checkboxView.checked = bool;
        }

        this.getOpen = function () {
            return checkboxView.value;
        }

        this.setStyle = function (name, value) {
            fieldPassword.style[name] = value;
        }

        fieldPassword.oninput = (event) => {
            this.setValue(event.target.value);
            this.onChange(event.target.value);
        }

        checkboxView.onchange = (event) => {
            this.setOpen(event.target.checked);
            fieldPassword.type = event.target.checked ? 'text' : 'password';
            this.onOpenChange(event.target.checked);
        }

        this.onChange = () => {
        }

        this.onOpenChange = () => {
        }
    }

    function LoginForm(parent = document.body) {
        const formLogin = document.createElement('form');
        parent.append(formLogin);

        const fieldLogin = document.createElement('input');
        formLogin.append(fieldLogin);
        fieldLogin.oninput = () => {
            (!fieldLogin.value || !password.getValue()) ? buttonLogin.setAttribute('disabled', 'disabled') : buttonLogin.removeAttribute('disabled');
        }

        const password = new Password(formLogin, true);
        password.onChange = () => {
            (!fieldLogin.value || !password.getValue()) ? buttonLogin.setAttribute('disabled', 'disabled') : buttonLogin.removeAttribute('disabled');
        }

        const buttonLogin = document.createElement('button');
        (!fieldLogin.value || !password.getValue()) && buttonLogin.setAttribute('disabled', 'disabled');
        formLogin.append(buttonLogin);
    }

    let l = new LoginForm(document.body)
}//LoginForm



{ 
    function Password(parent, open) {
        const fieldPassword = document.createElement('input');
        parent.append(fieldPassword);

        const checkboxView = document.createElement('input');
        checkboxView.type = 'checkbox';
        checkboxView.checked = open;
        parent.append(checkboxView);

        this.setValue = function (value) {
            fieldPassword.value = value;
        }

        this.getValue = function () {
            return fieldPassword.value;
        }

        this.setOpen = function (bool) {
            checkboxView.checked = bool;
        }

        this.getOpen = function () {
            return checkboxView.value;
        }

        this.setStyle = function (name, value) {
            fieldPassword.style[name] = value;
        }

        fieldPassword.oninput = (event) => {
            this.setValue(event.target.value);
            this.onChange(event.target.value);
        }

        checkboxView.onchange = (event) => {
            this.setOpen(event.target.checked);
            fieldPassword.type = event.target.checked ? 'text' : 'password';
            this.onOpenChange(event.target.checked);
        }

        this.onChange = () => {
        }

        this.onOpenChange = () => {
        }
    }

    function LoginForm(parent = document.body) {
        const formLogin = document.createElement('form');
        parent.append(formLogin);

        const fieldLogin = document.createElement('input');
        formLogin.append(fieldLogin);

        const password = new Password(formLogin, true);

        const buttonLogin = document.createElement('button');
        (!fieldLogin.value || !password.getValue()) && buttonLogin.setAttribute('disabled', 'disabled');
        formLogin.append(buttonLogin);

        this.setPassword = function (value) {
            password.setValue(value);
        }

        this.getPassword = function () {
            password.getValue();
        }

        this.setLogin = function (value) {
            fieldLogin.value = value;
        }

        this.getLogin = function () {
            return fieldLogin.value;
        }

        this.setCheckbox = function (value) {
            password.setOpen(value);
        }

        this.getCheckbox = function () {
            password.getOpen();
        }
        
        password.onChange = (text) => {
            (!fieldLogin.value || !password.getValue()) ? buttonLogin.setAttribute('disabled', 'disabled') : buttonLogin.removeAttribute('disabled');
            this.onPasswordChange(text);
        }

        password.onOpenChange = (open) => {
            this.onCheckboxChange(open);
        }

        fieldLogin.oninput = (event) => {
            (!fieldLogin.value || !password.getValue()) ? buttonLogin.setAttribute('disabled', 'disabled') : buttonLogin.removeAttribute('disabled');
            this.setLogin(event.target.value);
            this.onLoginChange(event.target.value);
        }

        this.onLoginChange = () => {
        }

        this.onPasswordChange = () => {
        }

        this.onCheckboxChange = () => {
        }

    }
    let l = new LoginForm(document.body);
}//LoginForm Constructor
