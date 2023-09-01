import img from "../assets/images/soz.png";

interface SozImgProps {}

const SozImg = (props: SozImgProps) => (
  <img src={img} style={{ width: "80%" }} alt="img" />
);

export default SozImg;
