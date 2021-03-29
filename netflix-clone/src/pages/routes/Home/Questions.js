import React from 'react';
import HomeSignUp from './HomeSignUp';
import QuestAcordion from './QuestAcordion';
import './Questions.css';
const QUESTION_DATA = [
    {
        question: '넷플릭스란 무엇인가요?',
        answer: '넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. <br><br>저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다.'
    },
    {
        question: '넷플릭스 요금은 얼마인가요?',
        answer: '스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 14,500원까지 다양합니다. 추가 비용이나 약정이 없습니다.'
    },
    {
        question: '어디에서 시청할 수 있나요?',
        answer: '다양한 디바이스에서 언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다. <br><br>iOS, Android, Windows 10용 앱에서는 좋아하는 프로그램을 저장할 수도 있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.'
    },
    {
        question: '멤버십을 해지하려면 어떻게 하나요?',
        answer: '넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.'
    },
    {
        question: '넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?',
        answer: '스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 9,500원부터 14,500원까지 다양합니다. 추가 비용이나 약정이 없습니다.'
    },
    {
        question: '무료 이용에 관해 자세히 알 수 있을까요?',
        answer: '넷플릭스를 30일 동안 무료로 이용해 보세요. 마음에 드는 경우 계속 이용하시면 됩니다. 별도로 해지하지 않는 한, 멤버십이 자동으로 유지됩니다. 무료 이용 기간이 끝나기 전에 멤버십을 해지하면 요금이 청구되지 않습니다. 복잡한 계약, 약정, 해지 수수료가 없습니다. 언제든 온라인으로 해지하세요.'
    },
]

const Questions = () => {
    return (
        <section className="home-question">
            <div>
            <h2>자주 묻는 질문</h2>
            <ul>                
                {QUESTION_DATA.map((v, i) => <QuestAcordion key={i} quest={v}/>)}
            </ul>               
            <HomeSignUp/>
            </div>
        </section>
    );
}

export default Questions;