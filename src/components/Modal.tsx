import React from "react";
import "../style/modal.scss";
import taeyoungImg from "../projects/taeyoung_erp_img.png";
import movieAppImg from "../projects/movie_app.png";
import youtubeMobileImg from "../projects/youtube_mobile.png";

class Modal extends React.Component<{}, {}> {
  render() {
    return (
      <div className='modal'>
        {/* Modal content */}
        <div className='modal__content'>
          <div className='modal__header'>
            <span className='close'>&times;</span>
          </div>

          <div className='modal__body modal__taeyoung deactive'>
            <div className='modal__img-wrap'>
              <img src={taeyoungImg} alt='' className='modal__img' />
            </div>
            <article>
              <ul>
                <li>태영건설 ERP 프로젝트</li>
                <br />
                <li>개발기간 : 2019.04~2020.04(1년 1개월)</li>
                <li>담당업무 : 구매자재 부서의 구매업무(입찰, 계약 등) 담당</li>
                <li>기술스펙 : ES5, Spring framework, </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  oracle stored procedure
                </li>
                <br />
                <li>약 30개의 화면 개발 중 세부기능사항 : </li>
                <li>1. 공인인증서 적용</li>
                <li>2. 파일 업, 다운로드</li>
                <li>3. 동적 피벗 쿼리 적용</li>
                <li>4. 원본 rtf파일과 정보를 조합하여 pdf파일(계약서) 생성</li>
                <li>5. 입찰정보를 엑셀파일을 업로드하여 입력받는 기능</li>
                <li>6. 입찰정보를 엑셀파일로 다운로드하는 기능</li>
                <li>7. 보고서 출력기능</li>
                <li>8. 전자결재</li>
                <li>9. 보증서</li>
                <li>10. 인지세</li>
              </ul>
            </article>
          </div>

          <div className='modal__body modal__movieApp deactive'>
            <div className='modal__img-wrap'>
              <img src={movieAppImg} alt='' className='modal__img' />
            </div>
            <article>
              <ul>
                <li>Movie App front-end</li>
                <br />
                <li>개발기간 : 2020.05, 약 1주일</li>
                <li>기술스펙 : React, ES6, TypeScript, Axios </li>
              </ul>
            </article>
          </div>

          <div className='modal__body modal__youtubeMobile deactive'>
            <div className='modal__img-wrap'>
              <img src={youtubeMobileImg} alt='' className='modal__img' />
            </div>
            <article>
              <ul>
                <li>Youtube Mobile front-end</li>
                <br />
                <li>개발기간 : 2020.05, 약 1주일</li>
                <li>기술스펙 : HTML, CSS, ES6, FlexBox, 반응형</li>
              </ul>
            </article>
          </div>

          <div className='modal__footer'></div>
        </div>
      </div>
    );
  }
}

export default Modal;
