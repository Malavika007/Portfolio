import TextType from './textstyle'



export default function One() {
  return (
    <div  className="flex justify-center items-center h-screen w-full overflow-hidden bg-white">

        <TextType className='font-light text-8xl font-mono'
          text={["Hi Im Malavika--Student developer from India exploring AI, ML, and full-stack development to solve real-world problems."]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|" variableSpeed={undefined} onSentenceComplete={undefined}        />

      </div>
        

  );
}
