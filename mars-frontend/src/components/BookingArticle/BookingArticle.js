import { useState } from 'react';

export default function BookingArticle({ item }) {
  const [input, setInput] = useState(item.default);

  const handleInputChange = (event) => {
    if (event.target.type === 'number') {
      event.target.value >= 1 ? setInput(event.target.value) : setInput((prev) => prev);
    }
    if (event.target.type === 'date') {
      setInput(event.target.value);
    }
  };

  return (
    <article className='booking__article'>
      <label
        className='booking__label'
        htmlFor='date-input'>
        {item.text}
      </label>
      <input
        type={item.type}
        className='booking__input'
        name='date'
        value={input}
        onChange={handleInputChange}
      />
      <hr className='booking__line' />
    </article>
  );
}
