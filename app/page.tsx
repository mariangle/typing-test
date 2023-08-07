import TypeTest from "@/components/TypeTest"

const Home = () => {
  return (
    <div className="min-h-[70vh] grid content-center">
      <div className="my-8">
        <h4 className="text-sky-500 dark:text-sky-400 font-semibold mb-2">Test Your Speed</h4>
        <h1 className="text-4xl heading font-extrabold dark:text-white">Typing Test</h1>
        <p className="my-4 desc">Measure your typing speed by simply typing in the designated field.</p>
      </div>
      <TypeTest />
    </div>
  )
}

export default Home