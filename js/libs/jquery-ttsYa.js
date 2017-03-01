/**
 * Created by gavroshp on 01.03.2017.
 */

/**
 * $('body').ttsYa({
 *   apikey: USERAPIKEY
 * })
 *
 * Плагин - обертка для Яндекс сервиса Синтеза речи
 * Осуществляет чтение текста с заданной задержкой
 * при наведении мышки на элемент
 */
(function ($, undefined) {

    var audio = new Audio(''),
        tts,
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
                apikey: '',
                element: 'span',
                emotion: 'good',
                speaker: 'jane',
                delay: 3000
            }, options);

            try {
                if (!ya.speechkit) {

                    $.error('Необходимо подключить API Яндекса для синтеза речи.');

                } else {

                    if (settings.apikey) {

                        tts = new ya.speechkit.Tts(settings);

                        $(settings.element).bind('mouseenter.ttsYa', methods.speak);
                        $(settings.element).bind('mouseleave.ttsYa', methods.abort);

                    } else {

                        $.error('Необходимо указать действующий apikey!.');
                    }
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
                tts.speak(
                    text,
                    {
                        dataCallback: function (blob) {
                            audio.src = URL.createObjectURL(blob);
                            audio.play();
                        },
                        stopCallback: function () {
                            console.log("Озвучивание текста завершено.");
                        }
                    }
                )
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
    $.fn.ttsYa = function (method) {

        try {
            if (methods[method]) {

                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {

                return methods.init.apply(this, arguments);
            } else {

                $.error('Метод с именем ' + method + ' не существует для jQuery.ttsYa');
            }
        } catch (err)  {
            console.error(err);
        }
    };

})(jQuery);
