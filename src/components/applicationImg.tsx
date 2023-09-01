import img from '../assets/images/appImg.png'

interface ApplicationImgProps {}

const ApplicationImg = (props: ApplicationImgProps) => (
   <img src={img} style={{ position: "absolute", right: "0", bottom: "0", width: '500px' }} alt="img" />
  );

export default ApplicationImg;
