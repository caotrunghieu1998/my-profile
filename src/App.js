import { dataInfo } from "./data";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="bg-black bg-opacity-80 text-white lg:text-left text-center">
        <div className="flex py-5 custom-container">
          <div className="lg:w-1/2 xl:w-2/5"></div>
          <div className="lg:w-1/2 xl:w-3/5 w-full">
            <p className="font-bold text-5xl mb-3">CAO TRUNG HIEU</p>
            <span>
              <i className="icon-dot-single"></i> FULLSTACK DEVELOPER
            </span>
          </div>
        </div>
      </header>
      {/* Content */}
      <div className="custom-container">
        {/* Base Information */}
        <div>
          <div className="lg:flex py-5 pb-0">
            <div className="lg:w-1/2 xl:w-2/5 lg:-mt-36 lg:mb-0 mb-5">
              <div className="bg-slate-400 lg:mr-7 h-full">
                <div className="p-5">
                  <div>
                    <img src="/images/avatar/avatar.jpg" alt="Avatar" className="w-full" />
                  </div>
                  {/* Information */}
                  <div className="my-5">
                    <p className="font-bold text-5xl mb-3 lg:block hidden">BASE INFORMATION</p>
                    <div className="flex lg:hidden">
                      <div className="w-12 h-12 bg-black rounded-lg mr-2"></div>
                      <p className="font-bold text-5xl mb-3">BASE INFORMATION</p>
                    </div>
                    {dataInfo.baseInfo.map((info, index) =>
                      <div key={index}>
                        {
                          info?.href ?
                            <a href={info.href} target="_blank" rel="noopener">
                              <i className={info?.icon}></i>&ensp;
                              <span>{info?.text}</span>
                            </a> :
                            <p>
                              <i className={info?.icon}></i>&ensp;
                              <span>{info?.text}</span>
                            </p>
                        }
                      </div>
                    )}
                  </div>
                  {/* Skill */}
                  <div className="my-5">
                  <p className="font-bold text-5xl mb-3 lg:block hidden">SKILLS</p>
                    <div className="flex lg:hidden">
                      <div className="w-12 h-12 bg-black rounded-lg mr-2"></div>
                      <p className="font-bold text-5xl mb-3">SKILLS</p>
                    </div>
                    {dataInfo.skills.map((skill, index) =>
                      <div key={index} className="mb-5">
                        <b>{skill.name}</b>
                        <p>{skill.items}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5">
              {/* OVERVIEW */}
              <div className="mb-5">
                <div className="flex">
                  <div className="w-12 h-12 bg-black rounded-lg mr-2"></div>
                  <p className="font-bold text-5xl mb-3">OVERVIEW</p>
                </div>
                {dataInfo.overView.map((text, index) =>
                  <p key={index}>- {text}</p>
                )}
              </div>
              {/* Slogan */}
              <div className="mb-5">
                <div className="flex">
                  <div className="w-12 h-12 bg-black rounded-lg mr-2"></div>
                  <p className="font-bold text-5xl mb-3">SLOGAN</p>
                </div>
                {dataInfo.slogan.map((text, index) =>
                  <p key={index}>{text}</p>
                )}
              </div>
              {/* EDUCATION */}
              <div className="mb-5">
                <div className="flex">
                  <div className="w-12 h-12 bg-black rounded-lg mr-2"></div>
                  <p className="font-bold text-5xl mb-3">EDUCATION</p>
                </div>
                <div className="my-4">
                  <p className="font-bold">{dataInfo.education.schoolName}</p>
                  <p className="italic text-blue-400 text-lg">{dataInfo.education.specialized}</p>
                  <p className="font-bold">{dataInfo.education.time}</p>
                  <p>Major: {dataInfo.education.major}</p>

                </div>
              </div>
              {/* WORK EXPERIENCE */}
              <div className="mb-5">
                <div className="flex">
                  <div className="w-12 h-12 bg-black rounded-lg mr-2"></div>
                  <p className="font-bold text-5xl mb-3">WORK EXPERIENCE</p>
                </div>
                {dataInfo.workExperience.map((experience, index) =>
                  <div key={index} className="my-4">
                    <p className="font-bold">{experience.location}</p>
                    <p className="italic text-blue-400 text-lg">{experience.location}</p>
                    <p className="font-bold">{experience.time}</p>
                    <div>
                      {experience.description}
                    </div>
                  </div>
                )}
              </div>
              {/* PROJECTS */}
              <div className="mb-5">
                <div className="flex">
                  <div className="w-12 h-12 bg-black rounded-lg mr-2"></div>
                  <p className="font-bold text-5xl mb-3">PROJECTS</p>
                </div>
                {dataInfo.projects.map((project, index) =>
                  <div key={index} className="my-4">
                    <p className="font-bold">{project.name}</p>
                    <p className="italic text-blue-400 text-lg">Role: {project.position}</p>
                    <p className="font-bold">{project.time}</p>
                    <p className="font-bold">Team size: {project.teamSize}</p>
                    <div>
                      {project.description}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer>
        <p className="text-center p-4 bg-black text-white">@Copyright by me</p>
      </footer>
    </div>
  );
}

export default App;
