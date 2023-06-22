

const Words = ({ words }: { words: string[] }) => {
    return (
      <div className="bg-blue-900 max-w-lg border border-green-900 dark:border-red-900 flex items-center gap-2 flex-wrap">
        {words.map((word, index) => (
            <span  key={index} className="whitespace-nowrap max-w-full">
            {word}
            </span >
        ))} 
      </div>
    );
  };
  
  export default Words;