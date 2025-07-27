import TextType from './textstyle'



export default function One() {
  return (
    <div  className="flex justify-center items-center h-screen w-full overflow-hidden bg-stone-950">

        <TextType className='font-semibold text-8xl'
          text={["Hi Im Malavika", "Im a student and developer", "check out my site"]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|" variableSpeed={undefined} onSentenceComplete={undefined}        />

      </div>
        

  );
}
