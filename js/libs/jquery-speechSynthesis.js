/**
 * Created by gavroshp on 02.03.2017.
 */
/**
 * $('body').speechSynthesis({})
 *
 * Плагин - обертка для SpeechSynthesisUtterance Интерфейс Web Speech API
 * Осуществляет чтение текста с заданной задержкой
 * при наведении мышки на элемент
 */
(function ($, undefined) {

    var audio,
        settings,
        methods,
        timerId;


    methods = {
        /**
         * Инициализация плагаина
         * @param options
         *      Пользовательские настройки
         */
        init: function (options) {
            /**
             * Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
             */
            settings = $.extend({
                element: 'p',
                lang: 'ru-Ru',
                delay: 3000,
                maximum_length_string: 200
            }, options);


            try {

                if ('speechSynthesis' in window) {

                    $(settings.element).bind('mouseenter.speechSynthesis', methods.speak);
                    $(settings.element).bind('mouseleave.speechSynthesis', methods.abort);

                } else {

                    $.error('SpeechSynthesisUtterance Интерфейс Web Speech API не поддерживаеться Вашим браузером!');

                }
            } catch (err)  {

                console.error(err);
            }
        },
        /**
         * Воспроизведения речи
         */
        speak: function () {

            var text = $(this).text();

            /**
             * Реализация пользовательской задержки перед воспроизведением
             * @type {number}
             */
            timerId = setTimeout(function () {

                window.speechSynthesis.cancel();

                for (var i = 0; i < text.length / settings.maximum_length_string; i++ ){

                    audio = new SpeechSynthesisUtterance();
                    audio.lang = settings.lang;
                    audio.text = text.slice(settings.maximum_length_string * i, settings.maximum_length_string * i + settings.maximum_length_string);

                    window.speechSynthesis.speak(audio);
                }

            }, settings.delay);
        },
        /**
         * Удаляем ID запущенного таймера
         */
        abort: function () {
            clearTimeout(timerId);
        }
    };

    /**
     * @param method
     * @returns {*}
     */
    $.fn.speechSynthesis = function (method) {

        try {
            if (methods[method]) {

                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {

                return methods.init.apply(this, arguments);
            } else {

                $.error('Метод с именем ' + method + ' не существует для jQuery.speechSynthesis');
            }
        } catch (err)  {
            console.error(err);
        }
    };

})(jQuery);