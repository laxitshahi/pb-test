function toggleSlideover() {
  document
    .getElementById('slideover-container')
    ?.classList.toggle('pointer-events-auto');
  document.getElementById('slideover-container')?.classList.toggle('invisible');
  document.getElementById('slideover-container')?.classList.toggle('z-20');
  document.getElementById('slideover-bg')?.classList.toggle('opacity-0');
  document.getElementById('slideover-bg')?.classList.toggle('opacity-70');
  document.getElementById('slideover')?.classList.toggle('translate-x-full');
}
type Props = {
  children: string | JSX.Element;
};
function Slideover({ children }: Props) {
  return (
    <div className="pointer-events-none absolute flex h-screen w-screen items-center justify-center">
      <div
        id="slideover-container"
        className="invisible fixed inset-0 h-full w-full"
      >
        <div
          onClick={toggleSlideover}
          id="slideover-bg"
          className="absolute h-full w-full bg-gray-900 opacity-0 "
        ></div>
        <div
          onClick={toggleSlideover}
          id="slideover"
          className="absolute right-0 h-full w-screen translate-x-full rounded-l-2xl border-2 bg-white shadow-2xl transition-all duration-300 ease-in-out md:w-96"
        >
          <div className="absolute top-0 right-0 mt-5 mr-5 flex h-8 w-8 cursor-pointer items-center justify-center text-gray-600">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <section className="mt-20 flex justify-center">{children}</section>
        </div>
      </div>
    </div>
  );
}

export { Slideover, toggleSlideover };
