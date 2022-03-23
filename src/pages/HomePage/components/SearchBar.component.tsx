import './SearchBar.component.css';
import { MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ISmartphoneSliceState, searchSmartphones, smartphonesSelector } from 'slices/smartphones';
import { RootState } from 'index';
import { ChangeEvent } from 'react';

export function SearchBar() {
  const dispatch = useDispatch();
  function search(event: ChangeEvent<HTMLInputElement>) {
    dispatch(searchSmartphones(event.target.value))
  }
  return (
    <div className="sb-container" style={{ position: 'relative' }}>
      <input type="text" placeholder="Search..." className="sb-input" onChange={search} />
      <MdSearch className='sb-icon' size={20} />
    </div>
  )
}