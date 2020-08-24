## Level 1
### Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения
<ul>
<li>	Пользователя:
	На мой взгляд, хорошая верстка должна отличаться отзывчивостью и корректной работой. То есть элементы страницы должны корректно отображаться, быстро подгружаться, исправно работать, а также не блокировать доступ друг к другу. Кроме этого должен быть осуществлен доступ к странице с разных устройств, в том числе из разных браузеров. А также любое действие пользователя (наведение, нажатие на кнопки) должно отзываться страницей (hover, active), например, подсвечиванием кнопки.</li> 
<li>	Менеджера проекта:
	Верстка соответствует ТЗ и представлена в срок, а также она должна быть легко расширяема. Если говорить о проекте с логикой, то все unit-тесты должны быть пройдены, а баги устранены. Кроме этого, желательно, чтоб текстовые блоки находились наиболее высоко в иерархии html-кода, чтоб страница была более релевантной для поисковой системы.</li>
<li>	Дизайнера:
	Верстка полностью должна соответствовать макету дизайнера как во внешнем, так и в функциональном смысле. </li>
<li>	Верстальщика:
	Адекватное использование наименований и тегов. А также адаптивность, оптимизация и расширяемость решения. </li>
<li>	Клиентского программиста:
	Верстка должна быть легко читаемой и предсказуемой для frontend-программиста. Также должны быть использованы адекватные наименования, верстка выполнена на обговоренном стеке с выбранными командой библиотеками (например, использование UI-китов, библиотеки less, bootstrap и т.д.). </li>
<li>	Серверного программиста:
	Хорошо выполнено взаимодействие между элементами, а также хорошая производительность кода (от производительности кода зависит в дальнейшем скорость работы запросов).</li>
</ul>

### Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.  Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

Основной подход-создание такой структуры сайта, модификация которого не потребует после этого полного переписывания кода. Прежде всего необходимо изначально договориться об архитектуре проекта, о нейминге, стайлинге и прочем, чтоб проект был написан в одном стиле и легко мог корректироваться при необходимости. Также стоит использовать git для упрощения работы в команде. Необходимо договориться о библиотеках. Я работал в команде над написанием сайта для работы с адаптационными планами (кейс от АО Гринатом). Для фронта мы выбрали стек технологий React, Redux. Все переменные у нас хранились в отдельном файле. При реализации придерживались архитектуры FLUX. Для написания запросов использовали библиотеку axios. Конкретно для верстки создавал модули css, использовал препроцессор scss (.module.scss). Также использовал гриды, флекс-боксы и тд.

### Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. 

Нужно помнить о том, что сайт должен съедать минимальное количество трафика. А так для верстки можно использовать media-запросы для каждого из 3 типов экранов (десктоп, планшет, телефон). А также можно использовать bootstrap, гриды, флекс боксы (все, что поддерживает кросплатформенность).

### Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Для упрощения процесса написания кода-VS Code с различными дополнительными расширениями.  Для отладки – вывод в консоль и панель разработчика в Google Chrome.
Существенно упрощают жизнь фреймворки, я использую библиотеку React.
Также имею представление о unit-тестировании, но писать их еще не приходилось.



### Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Прежде всего необходимо выявить баг. Это нужно сделать либо непосредственно с устройств, либо использовать специальные сайты для тестирования на различных устройствах, ну и в крайнем случае с Safari использовать виртуалку с соответствующей ОС.
После выявления бага необходимо залезть в код через просмотр кода в браузере, это поможет найти код, который некорректно отображается, а там уже скакать от выявленной ошибки, будь то проблема с работой с конкретными плагинами, специфика браузера или еще что-то. Также необходимо выявить, в каких версиях этих браузеров код не работает, что также может сократить поиск решения.

### Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Прежде всего я бы задал этот вопрос дизайнеру, так как его видение может существенно отличаться от моего. Однако если такой возможности нет, то выбрал бы их самостоятельно. На большинстве сайтов поведение элементов предсказуемо и примерно одинаковое-подсвечивание при наведении, pointer на курсоре и т.д. И после этого согласовал бы результат с дизайнером.

### Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). 
JS учил в freeCodeCamp, learnJavaScript, html и css в htmlacademy. Еще год назад проходил курсы по js на курсере. 
React учил по документации в основном,  а так чаще всего ответы на мои вопросы уже есть в StackOverflow или в Хабр. 
  
#### Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое? 
Мне интереснее прописывать логику, нежели верстать. Развиваться хочу как фронтенд-разработчик, так что и первое и второе мне необходимо.

#### Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
В целом интересуюсь всем, что связано с веб-разработкой, кроме этого интересен анализ данных. Если мы говорим не о сфере айти, то походы, танцы.

### Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
Я учусь на 4 курсе направления “Автоматизированные системы управления” НИТУ МИСиС. Изучаю веб-разработку чуть больше года. Проходил практику на позиции веб-программиста в АО Гринатом и получил сертификат победителя. Суть практики состояла в реализации полноценного веб-приложения по работе с адаптационными планами (проект выполнял в команде, писал front).
Понимаю принцип работы React, Redux, Redux-form и прочих библиотек для разработки SPA. Имею представление о Flux-архитектуре сайта. Также есть знания нативного JS, HTML и CSS, опыт работы с MySQL.
Также есть опыт работы в команде, используя систему контроля версий git.
 <p>Портфолио:
<ul>
<li> Все работы можно посмотреть на https://github.com/Egor3842?tab=repositories . </li>
<li> Проект с практики https://github.com/Egor3842/GreenAtomCase . </li>
<li> Социальная сеть https://github.com/Egor3842/social-network . </li>
<li> Справочник https://github.com/Egor3842/information . </li>
</ul>
</p>

## Level 2
Задание выполненено при помощи библиотеки React. Запуск приложения производится при помощи команды:
### npm start
Все требования по заданию выполнены. Третий продукт на странице disable, поэтому не кликабилен, для того, чтобы выбрать данную упаковку, нужно изменить в объекте state свойство isDisable с false на true. Упаковки меняют цвет при клике на них только тогда, когда курсор мыши убран с текущей упаковки(после клика).
