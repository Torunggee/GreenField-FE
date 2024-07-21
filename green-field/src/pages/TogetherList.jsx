import React from 'react';
import '../styles/Together.scss';
import togetherMain from '../assets/images/Together-main.png';
import Container from '../components/Container/Container'
import TogetherCard from '../components/TogetherCard/TogetherCard';

const TogetherList = () => {
  return (
    <div className = "together">
        <Container>

          <div className="together-cards">
          <TogetherCard
            title="고구마 좀 가져가실 분"
            description="제가 고구마를 캤는데 주말에 애들이 너무 많아서 처리가 안 돼요."
            author={{
              togetherMain,
              name: '홍길동',
              role: '농업인'
            }}
            progress={3}
            max={5}
          />
          <TogetherCard
            title="아보카도 모종 나눔해요"
            description="3개만 필요한데 12개나 사버렸어요. 나눔해요."
            author={{
              togetherMain,
              name: '홍길동',
              role: '농업인'
            }}
            progress={1}
            max={3}
          />
          <TogetherCard
            title="비료 필요하신 분?"
            description="창고가 부족해서 둘 곳이 없어요. 필요하신 분 드려요."
            author={{
              togetherMain,
              name: '홍길동',
              role: '농업인'
            }}
            progress={2}
            max={4}
          />
        </div>
        </Container>
    </div>
  );
}

export default TogetherList;
