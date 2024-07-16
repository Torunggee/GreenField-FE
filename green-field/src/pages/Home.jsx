import React, { useState, useEffect } from 'react';
import './Home.scss';
import Container from '../components/Container/Container';


const newsItems = [
  {
    headline: "헤드 라인1",
    title: "제목1",
    description: "글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1글 내용1",
    image: `${process.env.PUBLIC_URL}/news-image1.jpg`
  },
  {
    headline: "헤드 라인2",
    title: "제목2",
    description: "글 내용2글 내용2글 내용2글 내용2글글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2글 내용2",
    image: `${process.env.PUBLIC_URL}/news-image1.jpg`
  },
  {
    headline: "헤드 라인3",
    title: "제목3",
    description: "글 글 내용2글 내용2글 내용2글 내용2글내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3글 내용3",
    image: `${process.env.PUBLIC_URL}/news-image1.jpg`
  },
  {
    headline: "헤드 라인4",
    title: "제목4",
    description: "글 내글 내용2글 내용2글 내용2글 내용2글글 내용2글 내용2글 내용2글 내용2글용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4글 내용4",
    image: `${process.env.PUBLIC_URL}/news-image1.jpg`
  },
  {
    headline: "헤드 라인5",
    title: "제목5",
    description: "글 내용5글글 내용2글 내용2글 내용2글 내용2글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5글 내용5",
    image: `${process.env.PUBLIC_URL}/news-image1.jpg`
  },
  {
    headline: "헤드 라인6",
    title: "제목6",
    description: "글 내용6글글 내용2글 내용2글 내용2글 내용2글글 내용2글 내용2글 내용2글 내용2글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6글 내용6",
    image: `${process.env.PUBLIC_URL}/news-image1.jpg`
  }
];

const bannerTexts = [
  { pre: "더운 여름날엔", main: "수박화채" },
  { pre: "추운 겨울날엔", main: "따뜻한 코코아" },
  // 필요한 만큼 추가 가능
];

const Home = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 1000);
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length);
    }, 7000);
    return () => {
      clearInterval(interval);
      clearInterval(bannerInterval);
    };
  }, []);

  const { headline, title, description, image } = newsItems[currentNewsIndex];
  const { pre, main } = bannerTexts[currentBannerIndex];

  return (
    <div className='home'>
      <Container>
        <div className='banner'>
          <p>{pre} <span>{main}</span> 어떠신가요?</p>
        </div>
        <section className="news-events-container">
          <div className="news">
            <h2>오늘의 뉴스</h2>
            <div className="news-item">
              <div className='news-title'>
                <h4 className="headline">{headline}</h4>
                <h3 className="title">{title}</h3>
              </div>
              <div className="news-body">
                <div className="news-image">
                  <img src={image} alt="뉴스 이미지" />
                </div>
                <div className="news-content">
                  <p className="description">{description}</p>
                </div>
              </div>
            </div>
            <div className="news-indicators">
              {newsItems.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentNewsIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
          <div className="events">
            <h2>이벤트 및 축제 정보</h2>
            <div className="event-card">
              <p>다양한 지역의 <strong>농산물 축제</strong>와<br />
                <strong>이벤트</strong>에 대한 정보를 알고싶다면?</p>
              <div className="event-buttons">
                <button>축제 바로가기</button>
                <button>이벤트 바로가기</button>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <div className="survey-preferences-container">
        <Container>
          <div className="inner-container">
            <div className='survey'>
              <h1 className="line-spacing">당신에게 딱 맞는<br className="line-spacing" />재배작물은?</h1>
              <p className="line-spacing">간단한 선호도 조사를 통해<br className="line-spacing" />농사 스타일에 맞는 작물을<br className="line-spacing" /> AI가 추천해드려요.</p>
              <button>선호도 검사하러 GOGO!</button>
            </div>
            <div className='preferences'>
              <div className='example-image'>
                <img src={`${process.env.PUBLIC_URL}/preference_Ex.png`} alt="수확주기 예시" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="badge-container">
          <div className="badge-content">
            <h1 className="line-spacing">열심히 참여해서<br className="line-spacing" />뱃지를 모아보세요!</h1>
            <p>많이 활동할 수록 등급이 올라가요.</p>
            <button>등급표 자세히 보기</button>
          </div>
          <div className="badges">
            <img src={`${process.env.PUBLIC_URL}/badge1.png`} alt="Badge 1" />
            <img src={`${process.env.PUBLIC_URL}/badge2.png`} alt="Badge 2" />
            <img src={`${process.env.PUBLIC_URL}/badge3.png`} alt="Badge 3" />
            <img src={`${process.env.PUBLIC_URL}/badge4.png`} alt="Badge 4" />
            <img src={`${process.env.PUBLIC_URL}/badge5.png`} alt="Badge 5" />
            <img src={`${process.env.PUBLIC_URL}/badge6.png`} alt="Badge 6" />
          </div>
        </div>
      </Container>

    </div>
  );
}

export default Home;

