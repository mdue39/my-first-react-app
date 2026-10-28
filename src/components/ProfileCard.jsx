function ProfileCard() {
  return (
    <div className="mx-4 mt-6 max-w-4xl rounded-2xl bg-white p-5 text-center shadow-lg sm:mx-auto sm:mt-10 sm:p-8 md:p-10">
      <h2 className="mb-4 text-3xl font-bold text-slate-800 sm:text-4xl">
        Mduduzi Mpofu
      </h2>

      <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
        I am a Product Designer and Software Engineering student passionate
        about UI/UX design, web development, and creating digital solutions.
      </p>

      <h3 className="mb-6 text-xl font-semibold text-slate-700 sm:text-2xl">
        Skills
      </h3>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-medium text-sky-700 sm:px-4 sm:text-base">
          HTML
        </span>

        <span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-medium text-sky-700 sm:px-4 sm:text-base">
          CSS
        </span>

        <span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-medium text-sky-700 sm:px-4 sm:text-base">
          JavaScript
        </span>

        <span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-medium text-sky-700 sm:px-4 sm:text-base">
          React
        </span>

        <span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-medium text-sky-700 sm:px-4 sm:text-base">
          TypeScript
        </span>

        <span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-medium text-sky-700 sm:px-4 sm:text-base">
          UI/UX Design
        </span>
      </div>
    </div>
  );
}

export default ProfileCard;