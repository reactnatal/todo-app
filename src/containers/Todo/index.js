import React, { useState } from 'react';

import { Icon } from '../../components';

const Todo = () => {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);

  const changeItem = (id, field, value) => {
    const modifiedItems = items.map(item => item.id === id ? { ...item, [field]: value } : item)

    setItems(modifiedItems);
  }

  const addItem = () => {
    const lastAdded = items.length ? items[items.length - 1].id : 0;

    setItems([
      ...items,
      {
        id: lastAdded + 1,
        checked: false,
        value: '',
      }
    ])

  }

  const removeItem = id => {
    const modifiedItems = items.filter(item => item.id !== id && item);

    setItems(modifiedItems);
  }

  return (
    <div className="todo">
      <div className="todo__container">
        <div className="todo__content">
          <div className="todo__header">
            <input id="title" placeholder="Titulo" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <ul className="todo__list">
            {items.map(item => (
              <li key={item.id} className="todo__item">
                <input
                  type="checkbox"
                  id={`item-checked-${item.id}`}
                  value={item.checked}
                  onChange={e => changeItem(item.id, 'checked', e.target.checked)}
                />
                <input
                  type="text"
                  id={`item-value-${item.id}`}
                  value={item.value}
                  onChange={e => changeItem(item.id, 'value', e.target.value)}
                />
                <Icon name="trash" onClick={() => removeItem(item.id)} />
              </li>
            ))}
          </ul>
        </div>
        <div className="todo__actions">
          <Icon name="add" onClick={addItem} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
