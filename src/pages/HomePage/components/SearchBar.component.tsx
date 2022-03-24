import './SearchBar.component.css';
import { MdSearch } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { searchSmartphones } from 'slices/smartphones';
import { ChangeEvent } from 'react';
import { i18n } from 'internationalization/i18n';

export function SearchBar() {
  const dispatch = useDispatch();
  function search(event: ChangeEvent<HTMLInputElement>) {
    dispatch(searchSmartphones(event.target.value))
  }

  return (
    <div className="sb-container" style={{ position: 'relative' }}>
      <input type="text" placeholder={i18n('search')} className="sb-input" onChange={search} />
      <MdSearch className='sb-icon' size={20} />
    </div>
  )
}