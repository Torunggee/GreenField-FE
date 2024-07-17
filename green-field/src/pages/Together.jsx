import React from 'react';
import '../styles/Together.scss';
import togetherMain from '../assets/images/Together-main.png';
import Container from '../components/Container'
import TogetherCard from '../components/TogetherCard';
import '../styles/TogetherCard.scss'

const Together = () => {
  return (
    <div className = "together">
      <div className = "image-container">
        <img src={togetherMain} alt='함께농사 메인 이미지'/>
        <div className = "overlay">
          <h3>함께 농사하는 재미!</h3> 
        </div>
      </div>

      <div className = "red-background">
        <Container>
          <h3>함께 농사에 참여해요!</h3>
          <p>새로운 농촌 환경을 만들어가요</p>

          <div className="together-cards">
          <TogetherCard
            title="고구마 좀 가져가실 분"
            description="제가 고구마를 캤는데 주말에 애들이 너무 많아서 처리가 안 돼요."
            author="홍길동 농부"
            progress={3}
            max={5}
          />
          <TogetherCard
            title="아보카도 모종 나눔해요"
            description="3개만 필요한데 12개나 사버렸어요. 나눔해요."
            author="이사과 농부"
            progress={1}
            max={3}
          />
          <TogetherCard
            title="비료 필요하신 분?"
            description="창고가 부족해서 둘 곳이 없어요. 필요하신 분 드려요."
            author="김농사 농부"
            progress={2}
            max={4}
          />
        </div>


        </Container>
      </div>
      

    </div>
  );
}

export default Together;
