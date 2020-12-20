import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const changeInput = evt => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(searchQuery);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.label}>Поиск</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Поиск изображений и фото"
          value={searchQuery}
          onChange={changeInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
