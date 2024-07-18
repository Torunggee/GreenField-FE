import React from 'react';
import Container from '../components/Container/Container';
import '../styles/Board.css';

const Board = ({ activeTab, searchQuery, regionTag, sortOption }) => {
    const communicationPosts = [
        { title: '잎이 벌레가 먹었어요', content: '벌레가 요즘 자주 먹을 얘기도...', time: '2시간 전' },
        { title: '복숭아 키우는게 쉽지 않네요', content: '잘안가요. 왜죠?', time: '5시간 전' },
        { title: '귀농할까요', content: '요즘은 일도 힘들고 그래서 고민 생각이 많이 납니다...', time: '1일 전' },
        { title: '토마토가 좋나요 누룽지가 좋나요', content: '나는 둘 다 좋아', time: '2일 전' },
        { title: '오이가 쑥쑥 잘자라네요', content: '처음 키워보는데 재배 반이도가 높아요...', time: '3일 전' },
    ];

    const tradePosts = [
        { title: '트랙터 팝니다', content: '사용하던 트랙터 판매합니다...', time: '3시간 전' },
        { title: '농기구 교환합니다', content: '농기구 교환하고 싶습니다...', time: '1일 전' },
        { title: '사료 구합니다', content: '사료를 구합니다...', time: '2일 전' },
    ];
    let posts = activeTab === '소통' ? communicationPosts : tradePosts;

     // 검색어 필터링
    if (searchQuery) {
        posts = posts.filter(post => post.title.includes(searchQuery) || post.content.includes(searchQuery));
    }
    // 지역 태그 필터링 
    if (regionTag) {        
        posts = posts.filter(post => post.content.includes(regionTag));
    }

    // 정렬 옵션 적용 
    if (sortOption === '최신순') {
        posts = posts.sort((a, b) => a.time.localeCompare(b.time));
    } else if (sortOption === '답변많은순') {
        // 답변많은순 정렬 로직 추가
    } else if (sortOption === '추천순') {
        // 추천순 정렬 로직 추가
    }


    return (
        // <Container>
            <div className="board">
            {posts.map((post, index) => (
                <div key={index} className="post">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <span>{post.time}</span>
                </div>
            ))}
            </div>
        // </Container>
    );
}

export default Board;
