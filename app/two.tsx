import TextType from './textstyle'



export default function Two() {
  return (
    <div  className="bg-white h-screen flex justify-center items-center w-full overflow-hidden  text-stone-950">

        <TextType className='font-light text-8xl'
          text={["Student developer from India exploring AI, ML, and full-stack development to solve real-world problems."]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|" variableSpeed={undefined} onSentenceComplete={undefined}        />

      </div>
        

  ); 
}
