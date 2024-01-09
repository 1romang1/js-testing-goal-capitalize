// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново
import { strict as assert } from 'node:assert';
import { capitalize } from '../src/capitalize.js';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

// console.log('Все тесты пройдены!');
assert.deepEqual(capitalize(''), '')
assert.deepEqual(capitalize('hello'), 'Hello')