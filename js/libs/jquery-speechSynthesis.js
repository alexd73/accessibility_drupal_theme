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
        timerId,
        fragments,
        small_fragments,
        checkWordRegExp = new RegExp('[a-zа-я0-9]', 'gi');

    /**
     * Создаем объект с настройками и ставим в очередь воспроизведения
     * @param text
     *          озвучиваемый текст
     */
    function createAudio (text) {
        audio = new SpeechSynthesisUtterance();
        audio.lang = settings.lang;
        audio.text = text;

        window.speechSynthesis.speak(audio);
    }

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
                /**
                 * Элемент который необходимо озвучивать
                 */
                element: 'p',
                /**
                 * Язык озвучки
                 */
                lang: 'ru-Ru',
                /**
                 * Время удерание мышки над элементом, милисекунды
                 */
                delay: 3000,
                /**
                 * Максимальная длина строки для озвучивания
                 */
                maximum_length_string: 200,
                /**
                 * Регулярное выражение для поиска предложений в длинном тексте
                 */
                pattern: '[^(\.(\?.)!]+?[(\.(\?.)!]+?'
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

                fragments = text.match(new RegExp(settings.pattern, 'gi'));

                fragments.forEach(function (fragment) {

                    if (checkWordRegExp.test(fragment)) {
                        if (fragment.length > settings.maximum_length_string) {

                            small_fragments = fragment.match(new RegExp('.{' + settings.maximum_length_string + ',}?[\s,-]', 'gi'));
                            small_fragments.push(fragment.replace(new RegExp('.{' + settings.maximum_length_string + ',}?[\s,-]', 'gi'),''));

                            small_fragments.forEach(function (small_fragment) {
                                createAudio(small_fragment);
                            });
                        } else {
                            createAudio(fragment);
                        }
                    }
                });

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
