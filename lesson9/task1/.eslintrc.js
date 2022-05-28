module.exports = {
  extends: 'eslint-config-airbnb-base', // (важно не забыть установить плагины $ npm i -D eslint-plugin-import )
  //   такжк существуют стондартные настройки правил, например airbnb они написали свой свод правил которые многим разработчикам понравились и эти правила используются часто
  rules: {
    'no-console': 0,
    'linebreak-style': 0,
    'max-len': ['error', { code: 277 }],
  },

  //   rules: {
  //     // в rules пишим наши правила которые мы хотим соблюдать,на сайте Eslint(https://eslint.org/docs/rules/) можно посмотреть правила, там их много
  //     'no-console': 'warn', // также мы указываем тип ошибки 'on', 'off' 'warn' или 'error'
  //     eqeqeq: 1, // также статус правила мы можем указвать цыфрами: 0 - выключино 1 - warning, 2 - error
  //   },
  //   parserOptions: {
  //     // указываем вурсию ES6 lin
  //     ecmaVersion: 10, // указываем версию esLint  числом
  //     sourceType: 'module', // указываем что мы работаем ES6
  //   },
  env: {
    // указваем то что мы работаем в broesere для того что бы ESlint не ругался так как многих правил с браузера он не знает
    browser: true,
  },
  //   globals: {
  //     // указваеи те слова на которые ESlint не должен ругаться, так как он их не понимает
  //     document: true,
  //     alert: true,
  //   },
};
