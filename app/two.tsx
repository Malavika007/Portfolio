import TextType from './textstyle'



export default function Two() {
  return (
    <div  className="flex justify-center items-center h-screen w-full overflow-hidden bg-red-900">

        <TextType className='font-semibold text-8xl'
          text={["oooooooo", "weeeee", "oooooooo", "weeeee"]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|" variableSpeed={undefined} onSentenceComplete={undefined}        />

      </div>
        

  );
}
