const Banner = ({ title, pages, className }) => {
  return (
    <>
      <div className={className}>
        <div className="relative h-10 w-full select-none overflow-hidden bg-primary">
          <div className="absolute -top-20 left-20 h-40 w-28 origin-top-left rotate-45 bg-secondary"></div>
          <div className="absolute -top-20 left-24 h-40 w-28 origin-top-left rotate-45 bg-secondary/70"></div>
          <div className="absolute -top-20 left-28 h-40 w-28 origin-top-left rotate-45 bg-secondary/40"></div>
          <div className="absolute -top-20 left-32 h-40 w-28 origin-top-left rotate-45 bg-secondary/10"></div>
          <div className="text-md absolute w-32 py-2 pl-4 font-bold text-primary">
            {title}
          </div>
          <div className="text-md absolute right-2 h-full w-24 bg-secondary/70"></div>
          <div className="text-md absolute right-4 h-full w-24 bg-secondary/40"></div>
          <div className="text-md absolute right-6 h-full w-24 bg-secondary/10"></div>
          <div className="text-md absolute right-0 h-full w-24 bg-secondary p-2 text-center font-bold text-primary">
            {pages}
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
