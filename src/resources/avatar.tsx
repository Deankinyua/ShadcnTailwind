import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import myImg from "../../public/pictures/WhatsApp Image 2024-06-22 at 9.02.14 PM.jpeg";

const avatar = () => {
  return (
    <Avatar>
      <AvatarImage src={myImg} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default avatar;
