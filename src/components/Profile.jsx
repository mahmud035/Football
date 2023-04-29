import ProfileData from './ProfileData';
import SecondaryButton from './SecondaryButton';

const Profile = () => {
  return (
    <>
      <div className="flex flex-col justify-center rounded-xl  py-6  shadow-md">
        <div className="flex items-center gap-1.5 px-5">
          <SecondaryButton classes={`bg-[#14314E] w-28`}>
            Profile
          </SecondaryButton>

          <SecondaryButton classes={`btn-outline text-[#14314E] w-28`}>
            Position
          </SecondaryButton>
        </div>

        <div className="divide-y-2 divide-[#DEDEDE] py-6">
          <ProfileData name="Team" value="Atletico" />
          <ProfileData name="position" value="LW" />
          <ProfileData name="Minutes" value={346} />
          <ProfileData name="Rating" value={'--'} />
          <ProfileData name="Model Reliability" value="Low" />
          <ProfileData name="GBE Points" value="--" />
          {/* <ProfileData name="Non-Penalty Goals (Position)" value="--" />
          <ProfileData name="Non-Penalty Goals (Position)" value="1" /> */}

          <div className="grid w-full grid-cols-3 justify-between px-5 py-4">
            <p className="col-span-2 text-sm font-medium text-[#8C8C8C]">
              Non-Penalty Goals <br /> (Position)
            </p>
            <p className={`text-sm font-semibold text-[#14314E]`}>{'--'}</p>
          </div>

          <div className="grid w-full grid-cols-3 justify-between px-5 py-4">
            <p className="col-span-2 text-sm font-medium text-[#8C8C8C]">
              Non-Penalty Goals <br /> (All Position)
            </p>
            <p className={`text-sm font-semibold text-[#14314E]`}>{1}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
