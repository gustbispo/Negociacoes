class DateHelper {

    constructor(){
        throw new Error ('Date Helper não pode ser instanciada');
    }

    //Método estático para converter uma String em um Date
    static StringtoDate(string) {
        if(!/\d{4}-\d{2}-\d{2}/.test(string)) throw new Error('Formato de String Inválido');
        return new Date(string.split('-'));
    }

    //Método estático para converter um Date em uma String
    static DatetoString(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}