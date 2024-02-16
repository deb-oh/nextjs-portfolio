"use client";

import theme from "@/styels/theme";
import styled from "styled-components";
const { device, colors, fontSizes } = theme;

interface ProfileProps {
  profile: {
    topic: string;
    descriptions: {
      title: string;
      startDate: string;
      endDate?: string;
      details: string[];
    }[];
  };
}

const Wrapper = styled.div`
  .content-title {
    font-size: ${() => fontSizes.title};
    margin-bottom: 3rem;
  }
  .content-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem 1rem;
  }
  .content {
    &-topic {
      padding-bottom: 1rem;
      font-size: ${() => fontSizes.subTitle};
      font-weight: 500;
    }

    &-item {
      margin-bottom: 1rem;
      &-title {
        display: inline-block;
        margin: 0 1rem 0.5rem 0;
        font-size: ${() => fontSizes.normal};
      }
      &-date {
        display: inline-block;
        color: ${() => colors.gray};
      }
      &-detail {
        font-size: ${() => fontSizes.description};
        color: ${() => colors.darkGray};
        padding: 0 0.5rem 0.5rem;
      }
    }
  }

  @media ${() => device.tablet} {
    .content-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media ${() => device.mobile} {
    .content-container {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

const profile = [
  {
    topic: "경력",
    descriptions: [
      {
        title: "아이엠폼",
        startDate: "2020.10",
        endDate: "2023.10",
        details: [
          "미니프로그램 신규 서비스 다수 론칭",
          "미니샵 서비스 어드민/api 개발 및 유지보수",
          "안드로이드 어플 [인천e지] 개발",
          "iOS 어플 [미래에셋페이] 배타버전 개발 참여",
        ],
      },
    ],
  },
  {
    topic: "학력",
    descriptions: [
      {
        title: "(주)미래능력개발교육원",
        startDate: "2020.03",
        endDate: "2020.10",
        details: ["안드로이드 & 하이브리드 앱 과정 수강"],
      },
      {
        title: "숙명여자대학교",
        startDate: "2013.03",
        endDate: "2017.02",
        details: ["중어중문학부 졸업"],
      },
    ],
  },
  {
    topic: "기타",
    descriptions: [
      {
        title: "영어",
        startDate: "2020.02",
        details: ["TOEIC 950"],
      },
      {
        title: "중국어",
        startDate: "2018.08",
        details: ["(新)HSK 6급 288"],
      },
    ],
  },
];
export default function Profile() {
  return (
    <Wrapper>
      <div className="content-title">My Profile</div>
      <div className="content-container">
        {profile.map((item) => (
          <ProfileItem profile={item} />
        ))}
      </div>
    </Wrapper>
  );
}

function ProfileItem(props: ProfileProps) {
  const { profile } = props;

  return (
    <div className="content">
      <div className="content-topic">{profile.topic}</div>
      {profile.descriptions.map((item) => (
        <div className="content-item">
          <div className="content-item-title">{item.title}</div>
          <div className="content-item-date">{item.startDate}&nbsp;</div>
          <div className="content-item-date">
            {item.endDate && `~ ${item.endDate}`}
          </div>
          {item.details.map((detail) => (
            <div className="content-item-detail">○ {detail}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
