import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
<>
    <div  className=" flex flex-col p-10  w-full text-black">
        
        <hr className="w-full border-black mb-5" />
       <h5  className="self-center font-mono" >Malavika G</h5>
      </div>
  

      

    <div  className="flex  items-center justify-center w-full overflow-hidden  text-zinc-500">  
        <a  href='https://github.com/Malavika007'><Github color="black" size={28}/></a>
        <a className="m-5" href='https://www.instagram.com/malavikaa.g'><Instagram color="black" size={28} /></a>
        <a  href='https://www.linkedin.com/in/malavika-g-9aa515374/'><Linkedin color="black" size={28} /></a>

        
      </div>

  
  </>
  );

}
