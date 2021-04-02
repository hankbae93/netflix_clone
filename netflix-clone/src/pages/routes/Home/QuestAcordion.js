import React, {useRef, useEffect} from 'react';
import './QuestAcordion.css';

const QuestAcordion = ({ quest }) => {
    const openText = useRef();
    useEffect(() => {
        openText.current.innerHTML = quest.answer;
    },[quest]);
    const handleClick = (e) => {
        e.target.nextSibling.classList.toggle('open');
        e.target.children[0].classList.toggle('open');
    };
    return (
        <li>
            <h5 onClick={handleClick}>
                {quest.question}
                <div className="open-answer">
                    <div></div>
                    <div></div>
                </div>
            </h5>
            <div className="home-answer" >
                <p ref={openText}></p>
            </div>
        </li>
    );
}

export default QuestAcordion;