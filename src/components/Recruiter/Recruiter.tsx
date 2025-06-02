import profilePic from './Profile.jpg';
import * as S from './style';

const Recruiter = () => (
    <S.Container>
        <S.Thumbnail>
      <img
        alt="R.K. Sharma Profile Pic"
        src={profilePic}
      />
    </S.Thumbnail>
      <S.Description>
        <h4>
          Made By Rakesh Kumar Sharma
        </h4>
        <p>
          This is an E-Commerce website which is build with Read and Redux, and it's got all main features of a typical e-commerce website .
            <b>follow me on Linkedin.</b>
        </p>
      </S.Description>
    </S.Container>
  );
  
  export default Recruiter;
  