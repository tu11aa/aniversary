import React from 'react'
import ChatBox from '../components/LandingPage/ChatBox'
import Section from '../components/LandingPage/Section'
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const paragraphs = [
    ["Hôm ấy có một cậu học viên không thể đi xe đến lớp học thêm được, thế là cậu ấy đã nhờ một người bạn mới quen chở đi.", "Và mọi chuyện bắt đầu từ đây!"],
    ["Sau một thời gian đèo nhau đi học, cô ấy rủ cậu tham gia Halloween do trường tổ chức, chúng tôi đã chụp với nhau bức ảnh đầu tiên.", "Sau hôm đó, tôi đã ... tỏ tìnhhhh❤"],
    ["Bình thường là một cô gái dễ thương, nhưng sau khi toi lục lọi được một tấm hình thiệt là hihi😍"],
    ["Cuối năm bế giảng được chụp chung tấm hình nữa nè."],
    ["Lúc nghỉ tết thì mỗi đứa một nơi, đã cậu ấy còn bị lên mụn nhưng vẫn gặp nhau chụp hình cho bằng được."],
    ["Cô ấy đi chụp kỷ yếu cuối năm, cậu ấy đi theo xem, cuối cùng cũng chen vào được một tấm."],
    ["Cô ấy lên đại học rồi nè, cậu ấy cũng vậy nha nhưng mà hỏng có chụp hình :("],
    ["Giờ 2 đứa đều tất bật với công việc và cuộc sống, nhiều khi tận vài tuần mới gặp một lần.", "Nhưng tình cảm họ dành cho nhau không bao giờ đổi thay!"],
    []
  ]

  const navigate = useNavigate()

  return (
    <div className='hint-container'>
      <Section backgroundID="bg-image1" header="Khởi đầu" paragraphs={paragraphs[0]}/>
      <ChatBox/>
      <Section backgroundID="bg-image2" header="Cũng là khởi đầu mà là khởi đầu của tềnh êu" paragraphs={paragraphs[1]}/>
      <Section backgroundID="bg-image3" header="Chếch chi gơ" paragraphs={paragraphs[2]}/>
      <Section backgroundID="bg-image4" header="Hiiiiiii" paragraphs={paragraphs[3]}/>
      <Section backgroundID="bg-image5" header="Hun mín 😚" paragraphs={paragraphs[4]}/>
      <Section backgroundID="bg-image6" header="Cũng hun mín 😚" paragraphs={paragraphs[5]}/>
      <Section backgroundID="bg-image7" header="Đại học" paragraphs={paragraphs[6]}/>
      <Section backgroundID="bg-image8" header="😢" paragraphs={paragraphs[7]}/>
      <Section backgroundID="bg-image9" header="Love uuuu" paragraphs={paragraphs[8]}/>
      <Zoom bottom cascade>
        <button className='button-landing-page' onClick={()=>navigate("/screen2")}>Tiếp nè</button>
      </Zoom>
    </div>
  )
}

export default LandingPage