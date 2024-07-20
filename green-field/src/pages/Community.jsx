import React, { useState } from 'react';
import '../styles/Community.css'
import Board from './Board.jsx'

const Community = ({ activeTab, onTabChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionTag, setRegionTag] = useState('');
  const [sortOption, setSortOption] = useState('최신순');

  const handleSearch = () => {
    /*검색 로직 구현*/
    console.log('Search Query: ', searchQuery);
    console.log('Region Tag: ', regionTag);
    console.log('Sort Option: ', sortOption);
  }

  const handleReset = () => {
    setSearchQuery('');
    setRegionTag('');
    setSortOption('최신순');
  }

  return (
      <div className='community-container'>
        <div className='tabs'>
          <button
            className={activeTab === '소통' ? 'active' : ''}
            onClick={() => onTabChange('소통')}
            >
            소통
          </button>
          <button
            className={activeTab === '거래' ? 'active' : ''}
            onClick={() => onTabChange('거래')}
            >
            거래
          </button>
        </div>

        <div className='search-container'>
          <div className='search-inputs'>
            <input
              type='text'
              placeholder='궁금한 내용을 키워드로 검색해보세요.'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
            <input
              type='text'
              placeholder='# 지역태그로 검색해보세요.(ex. #경상북도, #전라남도, #충청북도, #제주특별자치도)'
              value={regionTag}
              onChange={(e) => setSearchQuery(e.target.value)}
              />
          </div>
          <div className='search-buttons'>
            <button onClick={handleSearch}>검색</button>
            <button onClick={handleReset}>초기화</button>
          </div>
        </div>

        <div className='sort-options'>
          <div>
            <label>
              <input 
                type='radio'
                name='sort'
                value="최신순"
                checked={sortOption === '최신순'}
                onChange={() => setSortOption('최신순')}
                />
              최신순
            </label>

            <label>
              <input 
                type='radio'
                name='sort'
                value="답변많은순"
                checked={sortOption === '답변많은순'}
                onChange={() => setSortOption('답변많은순')}
                />
              답변많은순
            </label>

            <label>
              <input 
                type='radio'
                name='sort'
                value="추천순"
                checked={sortOption === '추천순'}
                onChange={() => setSortOption('추천순')}
                />
              추천순
            </label>
          </div>
          <button className='write-button'>글쓰기</button>
        </div>

        <Board activeTab={activeTab} searchQuery={searchQuery} regionTag={regionTag} sortOption={sortOption} /><br /><br />
      </div>
  );
}

export default Community;
